-- EduSphere USA — production database schema (PostgreSQL / Supabase)
-- The running demo mirrors this schema in a localStorage-backed data layer
-- (src/lib/db.ts). In production, Supabase Auth owns passwords and every table
-- carries row-level security policies scoped by organization.

create extension if not exists "uuid-ossp";

create type role_enum as enum ('visitor', 'student', 'instructor', 'school_admin', 'super_admin');
create type subscription_status_enum as enum ('active', 'trialing', 'past_due', 'canceled', 'incomplete');
create type payment_status_enum as enum ('succeeded', 'failed', 'pending', 'refunded');
create type readiness_status_enum as enum ('not_started', 'needs_support', 'building_readiness', 'near_ready', 'ready_for_final_review');
create type question_type_enum as enum ('multiple_choice', 'scenario', 'true_false');
create type difficulty_enum as enum ('easy', 'medium', 'hard');
create type assessment_kind_enum as enum ('diagnostic', 'knowledge_check', 'practice', 'timed_final');

create table organizations (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  type text not null, -- career_academy | workforce_program | private_training | school_district
  contact_name text not null,
  contact_email text not null,
  contact_phone text,
  status text not null default 'pending', -- active | pending | suspended
  created_at timestamptz not null default now()
);

create table roles (
  id uuid primary key default uuid_generate_v4(),
  name role_enum unique not null
);

create table users (
  id uuid primary key default uuid_generate_v4(), -- maps to auth.users in Supabase
  name text not null,
  email citext unique not null,
  role role_enum not null default 'student',
  title text,
  created_at timestamptz not null default now(),
  last_active_at timestamptz
);

create table organization_members (
  id uuid primary key default uuid_generate_v4(),
  organization_id uuid not null references organizations(id) on delete cascade,
  user_id uuid not null references users(id) on delete cascade,
  role role_enum not null,
  invited_by uuid references users(id),
  created_at timestamptz not null default now(),
  unique (organization_id, user_id)
);

create table products (
  id uuid primary key default uuid_generate_v4(),
  name text not null, -- Starter Cohort | Growth Cohort | Program License | Enterprise
  price_annual_cents integer, -- null = custom pricing
  max_students integer,
  max_tracks text, -- '1' | '3' | 'all'
  features jsonb not null default '[]'
);

create table credential_tracks (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  short_name text not null,
  description text,
  credential_focus text,
  estimated_weeks integer,
  is_bundle boolean not null default false,
  included_track_ids uuid[]
);

create table modules (
  id uuid primary key default uuid_generate_v4(),
  track_id uuid not null references credential_tracks(id) on delete cascade,
  title text not null,
  sort_order integer not null,
  description text
);

create table lessons (
  id uuid primary key default uuid_generate_v4(),
  module_id uuid not null references modules(id) on delete cascade,
  title text not null,
  sort_order integer not null,
  duration_min integer,
  content jsonb not null default '[]',   -- paragraphs
  key_points jsonb not null default '[]'
);

create table questions (
  id uuid primary key default uuid_generate_v4(),
  track_id uuid not null references credential_tracks(id) on delete cascade,
  module_id uuid references modules(id) on delete set null,
  topic text not null,
  type question_type_enum not null,
  difficulty difficulty_enum not null,
  text text not null,
  correct_index integer not null,
  explanation text not null,
  estimated_time_sec integer,
  tags text[] not null default '{}'
);

create table answer_choices (
  id uuid primary key default uuid_generate_v4(),
  question_id uuid not null references questions(id) on delete cascade,
  choice_index integer not null,
  text text not null
);

create table assessments (
  id uuid primary key default uuid_generate_v4(),
  track_id uuid not null references credential_tracks(id) on delete cascade,
  module_id uuid references modules(id) on delete set null,
  kind assessment_kind_enum not null,
  title text not null,
  time_limit_min integer
);

create table assessment_questions (
  assessment_id uuid not null references assessments(id) on delete cascade,
  question_id uuid not null references questions(id) on delete cascade,
  sort_order integer not null,
  primary key (assessment_id, question_id)
);

create table assessment_attempts (
  id uuid primary key default uuid_generate_v4(),
  assessment_id uuid not null references assessments(id) on delete cascade,
  student_id uuid not null references users(id) on delete cascade,
  track_id uuid not null references credential_tracks(id),
  started_at timestamptz not null default now(),
  completed_at timestamptz,
  score_pct numeric(5,2)
);

create table assessment_responses (
  id uuid primary key default uuid_generate_v4(),
  attempt_id uuid not null references assessment_attempts(id) on delete cascade,
  question_id uuid not null references questions(id),
  selected_index integer,
  correct boolean not null
);

create table enrollments (
  id uuid primary key default uuid_generate_v4(),
  student_id uuid not null references users(id) on delete cascade,
  track_id uuid not null references credential_tracks(id) on delete cascade,
  organization_id uuid not null references organizations(id) on delete cascade,
  assigned_by uuid references users(id),
  assigned_at timestamptz not null default now(),
  status text not null default 'active',
  unique (student_id, track_id)
);

create table student_progress (
  student_id uuid not null references users(id) on delete cascade,
  track_id uuid not null references credential_tracks(id) on delete cascade,
  completed_lesson_ids uuid[] not null default '{}',
  practice_questions_completed integer not null default 0,
  practice_questions_correct integer not null default 0,
  topic_stats jsonb not null default '{}',
  final_practice_score_pct numeric(5,2),
  diagnostic_baseline_pct numeric(5,2),
  last_activity_at timestamptz,
  primary key (student_id, track_id)
);

create table readiness_scores (
  id uuid primary key default uuid_generate_v4(),
  student_id uuid not null references users(id) on delete cascade,
  track_id uuid not null references credential_tracks(id) on delete cascade,
  score integer not null, -- 0-100
  status readiness_status_enum not null,
  components jsonb not null, -- { practiceAccuracy, diagnosticImprovement, moduleCompletion, finalPractice }
  computed_at timestamptz not null default now()
);

create table subscriptions (
  id uuid primary key default uuid_generate_v4(),
  organization_id uuid not null references organizations(id) on delete cascade,
  plan_id text not null, -- starter | growth | program | enterprise
  status subscription_status_enum not null default 'incomplete',
  seats integer not null default 0,
  current_period_start timestamptz,
  current_period_end timestamptz,
  stripe_customer_id text,
  stripe_subscription_id text, -- null for invoice / manual licenses
  cancel_at_period_end boolean not null default false,
  created_at timestamptz not null default now()
);

create table payments (
  id uuid primary key default uuid_generate_v4(),
  organization_id uuid not null references organizations(id) on delete cascade,
  subscription_id uuid references subscriptions(id) on delete set null,
  amount_cents integer not null,
  currency text not null default 'usd',
  status payment_status_enum not null,
  method text not null, -- card | invoice
  description text,
  stripe_payment_intent_id text, -- no card data is ever stored
  failure_reason text,
  created_at timestamptz not null default now()
);

create table invoice_requests (
  id uuid primary key default uuid_generate_v4(),
  school_name text not null,
  contact_name text not null,
  email citext not null,
  phone text,
  student_count integer,
  desired_tracks text[] not null default '{}',
  plan_id text,
  timeline text,
  notes text,
  status text not null default 'new', -- new | contacted | approved | closed
  created_at timestamptz not null default now()
);

create table demo_requests (
  id uuid primary key default uuid_generate_v4(),
  school_name text not null,
  contact_name text not null,
  email citext not null,
  phone text,
  role text,
  student_count text,
  message text,
  status text not null default 'new', -- new | scheduled | completed
  created_at timestamptz not null default now()
);

create table seat_licenses (
  id uuid primary key default uuid_generate_v4(),
  organization_id uuid not null references organizations(id) on delete cascade,
  total_seats integer not null default 0,
  used_seats integer not null default 0,
  updated_at timestamptz not null default now()
);

create table reports (
  id uuid primary key default uuid_generate_v4(),
  organization_id uuid references organizations(id) on delete cascade,
  generated_by uuid references users(id),
  kind text not null, -- student_readiness | instructor_cohort | admin_executive
  payload jsonb not null,
  created_at timestamptz not null default now()
);

create table audit_logs (
  id uuid primary key default uuid_generate_v4(),
  actor_id uuid,
  actor_name text,
  action text not null,
  detail text,
  organization_id uuid references organizations(id) on delete set null,
  created_at timestamptz not null default now()
);

create table platform_settings (
  id integer primary key default 1,
  scoring_weights jsonb not null default
    '{"practiceAccuracy":0.40,"diagnosticImprovement":0.25,"moduleCompletion":0.20,"finalPractice":0.15}'
);

-- Readiness scoring model (stored in platform_settings.scoring_weights, editable
-- in Super Admin settings):
--   readiness = 40% practice question accuracy
--             + 25% diagnostic improvement
--             + 20% module completion
--             + 15% final practice test score

-- Row-level security (Supabase): every org-scoped table gets policies like
--   using (organization_id = (select organization_id from organization_members
--                             where user_id = auth.uid()))
-- with a separate policy granting super_admin full access. Students are further
-- restricted to rows where student_id = auth.uid(); instructors and school
-- admins to their organization; billing tables exclude instructors entirely.
