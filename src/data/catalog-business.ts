// Compact specs for Business, Finance, and Marketing tracks.
// Expanded by catalog-compact.ts.
import type { CompactTrack } from './catalog-compact'

export const BUSINESS_COMPACT: CompactTrack[] = [
  {
    id: 'track_esb',
    name: 'Entrepreneurship and Small Business Readiness',
    shortName: 'Entrepreneurship',
    category: 'business',
    weeks: 12,
    description:
      'From idea to operating plan: opportunity recognition, business models, market research, basic finance, and pitching a small business.',
    credentialFocus: 'Mapped to ESB-style competency domains',
    schoolOverview:
      'A complete entrepreneurship pathway with business-model canvas activities and pitch-building exercises — plus readiness evidence per domain.',
    studentOverview:
      'Learn how real businesses are born: spot opportunities, design a business model, understand the money, and pitch your idea with confidence.',
    prerequisites: 'None.',
    alignmentNotes:
      'Mapped to ESB-style competency domains: entrepreneurial mindset, opportunity recognition, business model design, marketing and sales basics, and financial literacy for small business.',
    domains: [
      'Entrepreneurial Mindset', 'Opportunity Recognition', 'Business Model Design', 'Market Research',
      'Marketing and Sales Basics', 'Small Business Finance', 'Operations and Legal Basics', 'Pitching and Communication',
    ],
    modules: [
      {
        title: 'Entrepreneurial Mindset', description: 'How entrepreneurs think about problems, risk, and value.',
        lessons: [
          { title: 'Thinking Like an Entrepreneur', points: ['Entrepreneurs solve problems people will pay to solve', 'Value creation precedes profit', 'Calculated risk differs from gambling — test assumptions cheaply', 'Failure is data when you iterate', 'Resourcefulness beats resources at the start', 'Ownership mindset: outcomes, not tasks'] },
          { title: 'Ideas vs. Opportunities', points: ['An idea becomes an opportunity when a real customer has a real problem', 'Timing, market size, and your advantage determine viability', 'The best ideas come from problems you have lived', 'Talk to potential customers before building anything', 'Competition validates a market more than it threatens it', 'Niche focus beats broad appeal for new ventures'] },
        ],
      },
      {
        title: 'Opportunity Recognition', description: 'Systematic ways to find and evaluate business opportunities.',
        lessons: [
          { title: 'Where Opportunities Hide', points: ['Frustrations and workarounds signal unmet needs', 'Demographic and technology shifts create new markets', 'Local gaps: what exists elsewhere but not here', 'Skills and assets you already have shape your advantage', 'Trends differ from fads — durability matters', 'Observation journals train opportunity spotting'] },
          { title: 'Evaluating an Opportunity', points: ['Who exactly is the customer, and how many exist?', 'How painful is the problem — must-have or nice-to-have?', 'What do customers pay for alternatives today?', 'Can you reach them affordably?', 'What is your unfair advantage?', 'A simple scoring matrix compares opportunities honestly'] },
        ],
      },
      {
        title: 'Business Model Design', description: 'The business model canvas as a one-page operating design.',
        lessons: [
          { title: 'The Business Model Canvas', points: ['Nine blocks: customers, value proposition, channels, relationships, revenue, resources, activities, partners, costs', 'Start with customer segments and value proposition', 'Revenue streams: how money actually arrives', 'Key resources and activities: what you must have and do', 'Cost structure: the big rocks of spending', 'The canvas is a hypothesis board — expect to revise it'] },
          { title: 'Value Proposition Design', points: ['Value propositions map customer jobs, pains, and gains', 'Features are not value — outcomes are', 'A one-sentence value proposition forces clarity', 'Differentiation answers "why you instead?"', 'Test the value proposition with real customer conversations', 'Weak value propositions cannot be fixed by marketing'] },
        ],
      },
      {
        title: 'Market Research', description: 'Sizing markets and understanding customers with evidence.',
        lessons: [
          { title: 'Customer Discovery', points: ['Interviews beat surveys for early discovery', 'Ask about past behavior, not future intentions', 'Open questions reveal; leading questions mislead', 'Five good conversations surface most themes', 'Document quotes — they fuel marketing later', 'Look for patterns in pains, not feature requests'] },
          { title: 'Market Sizing and Research Basics', points: ['TAM, SAM, SOM: total, serviceable, and obtainable market', 'Top-down sizing uses industry data; bottom-up counts real customers', 'Secondary research uses published data; primary research collects your own', 'Competitor grids compare price, features, and position', 'Assumptions get listed, then tested', 'Research reduces risk; it never eliminates it'] },
        ],
      },
      {
        title: 'Marketing and Sales Basics', description: 'Getting first customers without big budgets.',
        lessons: [
          { title: 'Small Business Marketing', points: ['Know your customer before choosing channels', 'A clear message beats a clever one', 'Local marketing: community presence, partnerships, referrals', 'Social proof — reviews and testimonials — sells for you', 'Content answers the questions customers already ask', 'Measure what brings customers; double down on it'] },
          { title: 'Sales Conversations', points: ['Selling is structured listening', 'Discovery questions uncover needs before pitching', 'Price conversations follow established value', 'Objections are requests for information', 'Follow-up closes most small business sales', 'Track your pipeline: leads, conversations, proposals, closes'] },
        ],
      },
      {
        title: 'Small Business Finance', description: 'Startup costs, pricing, and break-even thinking.',
        lessons: [
          { title: 'Startup Costs and Funding', points: ['List one-time startup costs and monthly operating costs separately', 'Bootstrapping, loans, and investors trade control for capital', 'Cash flow kills more businesses than lack of profit', 'Keep a cash buffer for slow months', 'Separate business and personal money from day one', 'Simple bookkeeping from the start saves pain later'] },
          { title: 'Pricing and Break-Even', points: ['Price from value, not just cost plus', 'Know your unit economics: price minus variable cost', 'Break-even = fixed costs ÷ contribution margin', 'Small price changes move profit more than volume changes', 'Discounts destroy margin faster than they build volume', 'Review pricing as costs and value change'] },
        ],
      },
      {
        title: 'Operations and Legal Basics', description: 'Structures, registrations, and everyday operations.',
        lessons: [
          { title: 'Business Structures and Compliance', points: ['Sole proprietorship, LLC, and corporation differ in liability and taxes', 'Register the business and obtain required licenses', 'An EIN identifies the business for taxes', 'Insurance transfers risks you cannot carry', 'Contracts protect both sides — get them in writing', 'Professional advice (accountant, attorney) pays for itself'] },
          { title: 'Running Operations', points: ['Document recurring processes so quality survives growth', 'Inventory and supplier management protect cash', 'Scheduling and capacity planning prevent overpromising', 'Customer service standards keep reputation compounding', 'Weekly metrics review catches drift early', 'Systemize before you scale'] },
        ],
      },
      {
        title: 'Pitching and Communication', description: 'Telling the business story persuasively.',
        lessons: [
          { title: 'Building the Pitch', points: ['Structure: problem, solution, market, model, traction, ask', 'One idea per slide; visuals over text', 'Traction — real customers or pilots — outweighs projections', 'The ask is specific: what you need and what it buys', 'Practice out loud until it sounds conversational', 'Ten minutes forces ruthless prioritization'] },
          { title: 'Handling Questions and Feedback', points: ['Questions signal interest, not attack', 'Answer directly, then bridge to strength', '"I don\'t know yet, here\'s how I\'ll find out" builds credibility', 'Feedback patterns across audiences reveal real gaps', 'Revise the pitch after every delivery', 'Confidence comes from preparation, not bravado'] },
        ],
      },
      {
        title: 'Growth and Scaling', description: 'How small businesses grow without breaking: hiring, systems, and channels.',
        lessons: [
          { title: 'Hiring and Delegation', points: ['Hire when a role pays for itself, not when you feel busy', 'Job descriptions define outcomes, not task lists', 'Onboarding checklists compress time to productivity', 'Delegate outcomes and authority, not just tasks', 'Culture is set by what you reward and tolerate', 'First hires multiply capacity; wrong hires multiply problems'] },
          { title: 'Systems and Growth Channels', points: ['Scaling means revenue grows faster than costs and hours', 'Standard operating procedures make quality repeatable', 'One reliable sales channel beats five half-built ones', 'Partnerships and referrals scale cheaply', 'Automation handles repetition; people handle judgment', 'Growth exposes every weak process you ignored'] },
        ],
      },
      {
        title: 'Final Readiness Review', description: 'Consolidated entrepreneurship review and exam preparation.',
        lessons: [
          { title: 'Entrepreneurship Knowledge Map', points: ['Mindset: value creation, calculated risk, iteration', 'Opportunity: customer pain, market timing, advantage', 'Canvas: nine blocks, hypothesis testing', 'Research: discovery interviews, TAM/SAM/SOM', 'Finance: unit economics, break-even, cash flow', 'Pitch: structure, traction, the ask'] },
          { title: 'Exam-Day Strategy', points: ['Canvas questions test which block a fact belongs to', 'Break-even math: fixed ÷ contribution margin', 'Scenario stems reward customer-first reasoning', 'Know the funding trade-offs: control vs. capital', 'Vocabulary precision: revenue vs. profit vs. cash flow', 'Review missed practice questions by domain'] },
        ],
      },
    ],
    questions: [
      { domain: 'Entrepreneurial Mindset', difficulty: 'easy', q: 'An idea becomes a business opportunity when:', choices: ['It is unique', 'A real customer group has a real problem it solves', 'It uses new technology', 'Friends like it'], answer: 1, why: 'Opportunities are defined by customer demand, not novelty.' },
      { domain: 'Entrepreneurial Mindset', difficulty: 'medium', q: '"Calculated risk" for an entrepreneur means:', choices: ['Avoiding all risk', 'Testing assumptions cheaply before committing big resources', 'Betting everything early', 'Copying competitors'], answer: 1, why: 'Entrepreneurs de-risk by validating assumptions with small tests.' },
      { domain: 'Opportunity Recognition', difficulty: 'easy', q: 'Which is the strongest signal of a real opportunity?', choices: ['A clever name', 'People currently paying for inadequate workarounds', 'A trending hashtag', 'A detailed logo'], answer: 1, why: 'Existing spending on workarounds proves the pain is real.' },
      { domain: 'Opportunity Recognition', difficulty: 'medium', q: 'Why start with a niche market?', choices: ['Niches are easier to spell', 'Focus lets a new venture win somewhere specific before expanding', 'Large markets are illegal', 'Niches need no marketing'], answer: 1, why: 'Dominating a niche builds traction and references for expansion.' },
      { domain: 'Business Model Design', difficulty: 'easy', q: 'The business model canvas block describing how money arrives is:', choices: ['Key partners', 'Revenue streams', 'Cost structure', 'Channels'], answer: 1, why: 'Revenue streams capture pricing and payment mechanics.' },
      { domain: 'Business Model Design', difficulty: 'medium', q: 'A value proposition should describe:', choices: ['Product features in detail', 'The outcome and relief the customer gets', 'The founder\'s biography', 'Office locations'], answer: 1, why: 'Customers buy outcomes; features are only the delivery mechanism.' },
      { domain: 'Market Research', difficulty: 'easy', q: 'In customer interviews, the most reliable evidence comes from:', choices: ['What people say they would do', 'What they have actually done and paid for', 'Compliments', 'Hypothetical enthusiasm'], answer: 1, why: 'Past behavior predicts; stated intentions flatter.' },
      { domain: 'Market Research', difficulty: 'medium', q: 'SOM (serviceable obtainable market) represents:', choices: ['The whole industry', 'The portion you can realistically capture near-term', 'Social media reach', 'Stock outstanding'], answer: 1, why: 'TAM → SAM → SOM narrows from industry to your realistic share.' },
      { domain: 'Marketing and Sales Basics', difficulty: 'easy', q: 'The most credible small business marketing asset is:', choices: ['A big ad budget', 'Reviews and referrals from real customers', 'A fancy office', 'Business cards'], answer: 1, why: 'Social proof converts better than paid claims for small businesses.' },
      { domain: 'Marketing and Sales Basics', difficulty: 'medium', q: 'When a prospect raises an objection, treat it as:', choices: ['Rejection', 'A request for information about value or fit', 'Rudeness', 'Time to discount'], answer: 1, why: 'Objections mark engagement; answering them advances the sale.' },
      { domain: 'Small Business Finance', difficulty: 'easy', q: 'Break-even equals:', choices: ['Revenue minus taxes', 'Fixed costs ÷ contribution margin per unit', 'Total sales', 'Cash in the bank'], answer: 1, why: 'Each unit contributes price minus variable cost toward covering fixed costs.' },
      { domain: 'Small Business Finance', difficulty: 'medium', type: 'scenario', q: 'A profitable business fails because it cannot pay bills on time. The cause is most likely:', choices: ['Low prices', 'Cash flow timing, not profitability', 'Too many customers', 'Good bookkeeping'], answer: 1, why: 'Profit is an accounting figure; cash timing is what pays bills.' },
      { domain: 'Operations and Legal Basics', difficulty: 'easy', q: 'An LLC primarily provides:', choices: ['Free taxes', 'Liability separation between owner and business', 'Automatic profit', 'A trademark'], answer: 1, why: 'The LLC structure shields personal assets from business liabilities.' },
      { domain: 'Operations and Legal Basics', difficulty: 'medium', q: 'Why document recurring processes early?', choices: ['For decoration', 'So quality survives growth and delegation', 'To impress investors only', 'It is required by the IRS'], answer: 1, why: 'Documented processes let others deliver consistent quality.' },
      { domain: 'Pitching and Communication', difficulty: 'easy', q: 'The strongest element of any pitch is:', choices: ['Projections', 'Evidence of traction — real customers or pilots', 'Slide animations', 'Buzzwords'], answer: 1, why: 'Traction proves demand; projections only assert it.' },
      { domain: 'Pitching and Communication', difficulty: 'medium', q: 'When you do not know an answer in a pitch Q&A, the best move is:', choices: ['Invent an answer', 'Say so and explain how you will find out', 'Change the subject', 'End the pitch'], answer: 1, why: 'Honesty plus a plan builds more credibility than a bluff.' },
    ],
  },
  {
    id: 'track_pmready',
    name: 'Project Management Ready',
    shortName: 'Project Management',
    category: 'business',
    weeks: 12,
    description:
      'Core project management: initiation, planning, scheduling, budgeting, risk, execution, and stakeholder communication for entry-level project roles.',
    credentialFocus: 'Mapped to PMI Project Management Ready-style competency domains',
    schoolOverview:
      'A practical project management foundation with timeline-ordering and risk-ranking exercises — documented readiness for CTE business pathways.',
    studentOverview:
      'Learn to turn messy goals into clear plans: scope, schedule, budget, risk, and communication — the skills every team needs and employers test for.',
    prerequisites: 'None.',
    alignmentNotes:
      'Mapped to PMI Project Management Ready-style domains: project lifecycle, scope, schedule, budget, risk, stakeholders, and communication.',
    domains: [
      'Project Lifecycle', 'Scope Management', 'Scheduling', 'Budget and Cost',
      'Risk Management', 'Stakeholder Engagement', 'Communication and Documentation', 'Quality and Closure',
    ],
    modules: [
      {
        title: 'Project Lifecycle', description: 'What makes a project a project, and its phases.',
        lessons: [
          { title: 'Projects vs. Operations', points: ['Projects are temporary with a defined result; operations repeat', 'A project has start, end, and unique deliverables', 'Constraints: scope, time, cost, quality, resources', 'The project manager balances competing constraints', 'Success means delivered value, not just completed tasks', 'Project selection should tie to organizational goals'] },
          { title: 'Phases and Approaches', points: ['Lifecycle: initiate, plan, execute, monitor/control, close', 'Predictive (waterfall) plans fully up front', 'Agile iterates in short cycles with feedback', 'Hybrid matches approach to the work', 'Phase gates confirm readiness before proceeding', 'Choosing the approach is a risk decision'] },
        ],
      },
      {
        title: 'Scope Management', description: 'Defining exactly what the project will and will not deliver.',
        lessons: [
          { title: 'Defining Scope', points: ['The scope statement records deliverables and boundaries', 'Requirements trace to stakeholder needs', 'A work breakdown structure decomposes deliverables into tasks', 'Exclusions are documented as clearly as inclusions', 'Acceptance criteria define "done" per deliverable', 'Vague scope is the top cause of project disputes'] },
          { title: 'Controlling Scope', points: ['Scope creep is uncontrolled growth of requirements', 'Change control evaluates impact before accepting changes', 'Every change affects time, cost, or quality — say which', 'A change log keeps decisions visible', 'Saying no (or "yes, and here is the cost") protects the project', 'Baseline the scope so drift is measurable'] },
        ],
      },
      {
        title: 'Scheduling', description: 'Building realistic timelines from tasks and dependencies.',
        lessons: [
          { title: 'Tasks, Milestones, Dependencies', points: ['Tasks have owners, durations, and definitions of done', 'Milestones mark verifiable points, not effort', 'Dependencies: finish-to-start is the default logic', 'Estimates come from experience, analogies, or three-point ranges', 'Buffers protect the plan from known uncertainty', 'The schedule is a model — keep it current'] },
          { title: 'Critical Path and Timelines', points: ['The critical path is the longest chain of dependent tasks', 'Critical path delay delays the project; float elsewhere does not', 'Gantt charts visualize tasks over time', 'Fast-tracking overlaps tasks; crashing adds resources', 'Timeline-ordering drills build schedule intuition', 'Communicate dates with confidence ranges, not false precision'] },
        ],
      },
      {
        title: 'Budget and Cost', description: 'Estimating, tracking, and controlling project money.',
        lessons: [
          { title: 'Building the Budget', points: ['Bottom-up estimates sum task-level costs', 'Include labor, materials, equipment, and overhead', 'Contingency reserves cover identified risks', 'Management reserve covers unknown-unknowns', 'Cost baseline is the yardstick for tracking', 'Cheap estimates become expensive surprises'] },
          { title: 'Tracking and Earned Value Basics', points: ['Track actual spend against the baseline', 'Percent complete × budget = earned value intuition', 'Cost variance = earned value minus actual cost', 'Forecast final cost early, not at the end', 'Report variances with causes and recovery options', 'Small weekly tracking beats monthly archaeology'] },
        ],
      },
      {
        title: 'Risk Management', description: 'Finding, ranking, and treating what could go wrong.',
        lessons: [
          { title: 'Identifying and Ranking Risks', points: ['Risks are uncertain events with impact; issues have already happened', 'Brainstorm risks by category: technical, people, external, schedule', 'Score probability and impact to prioritize', 'A risk register records owner, score, and response', 'Risk ranking exercises build triage instinct', 'Revisit the register on a fixed cadence'] },
          { title: 'Responses and Monitoring', points: ['Avoid, mitigate, transfer, accept — the four responses', 'Mitigation actions belong in the plan with owners', 'Triggers define when a response activates', 'Contingency plans are pre-agreed responses', 'Risk owners watch their assigned risks', 'Lessons from realized risks improve the next register'] },
        ],
      },
      {
        title: 'Stakeholder Engagement', description: 'Mapping and managing the people who make or break projects.',
        lessons: [
          { title: 'Stakeholder Mapping', points: ['Identify everyone affected or influential', 'Map power and interest to choose engagement strategy', 'High power/high interest: manage closely', 'Supporters need enlistment; blockers need understanding', 'Stakeholder positions shift — re-map after major events', 'Sponsors own business value; PMs own delivery'] },
          { title: 'Managing Expectations', points: ['Under-promise and over-deliver protects trust', 'Bad news travels fastest when you deliver it', 'Expectation gaps come from assumptions, not malice', 'Confirm decisions in writing', 'Escalate with options, not just problems', 'Celebrate milestones visibly with stakeholders'] },
        ],
      },
      {
        title: 'Communication and Documentation', description: 'The information flows that keep projects aligned.',
        lessons: [
          { title: 'Communication Planning', points: ['Who needs what, when, in which format', 'Status reports: progress, risks, decisions needed', 'Meeting cadence matches project pace', 'Dashboards make status self-serve', 'Different audiences need different altitude', 'Silence creates rumor — communicate on schedule'] },
          { title: 'Project Documentation', points: ['The charter authorizes the project and PM', 'The plan integrates scope, schedule, cost, risk, communication', 'Decision logs prevent relitigating settled questions', 'Meeting notes capture actions with owners', 'Version control applies to documents too', 'Archive everything for the lessons-learned review'] },
        ],
      },
      {
        title: 'Quality and Closure', description: 'Delivering right, then closing properly.',
        lessons: [
          { title: 'Quality Management', points: ['Quality is conformance to requirements, not luxury', 'Prevention beats inspection where possible', 'Reviews and tests verify deliverables against criteria', 'Defects found early cost a fraction of late ones', 'Acceptance sign-off formalizes delivery', 'Metrics like defect rates make quality visible'] },
          { title: 'Closing Well', points: ['Formal acceptance ends scope disputes', 'Release resources deliberately', 'Lessons learned capture what to repeat and avoid', 'Documentation archive preserves organizational memory', 'Celebrate the team — closure is cultural too', 'Handover to operations completes the value chain'] },
        ],
      },
      {
        title: 'Agile and Hybrid Delivery', description: 'Iterative delivery methods and when to use them.',
        lessons: [
          { title: 'Agile Fundamentals', points: ['Agile delivers value in small increments with frequent feedback', 'Sprints are fixed-length work cycles, usually one to four weeks', 'A backlog is a prioritized list of work, continuously refined', 'Daily standups surface blockers in fifteen minutes', 'Reviews demo finished work; retrospectives improve the process', 'Velocity tracks throughput to forecast realistically'] },
          { title: 'Choosing Predictive, Agile, or Hybrid', points: ['Predictive (waterfall) fits stable, well-understood scope', 'Agile fits evolving requirements and fast feedback needs', 'Hybrid uses predictive structure with agile delivery inside', 'Regulatory and fixed-contract work often forces hybrid', 'Team experience and customer availability shape the choice', 'Method is a tool, not a religion — fit it to the work'] },
        ],
      },
      {
        title: 'Final Readiness Review', description: 'Consolidated project management review and exam preparation.',
        lessons: [
          { title: 'Project Management Knowledge Map', points: ['Lifecycle: initiate through close, predictive vs. agile', 'Scope: WBS, baselines, change control', 'Schedule: dependencies, critical path, float', 'Cost: estimates, reserves, variance tracking', 'Risk: register, scoring, four responses', 'People: stakeholders, communication, acceptance'] },
          { title: 'Exam-Day Strategy', points: ['Order questions: lifecycle and process sequence', 'Critical path questions: map dependencies before answering', 'Risk scenarios test response selection', 'Change requests always go through control — never informal', 'Stakeholder questions reward proactive communication', 'Review missed practice questions by domain'] },
        ],
      },
    ],
    questions: [
      { domain: 'Project Lifecycle', difficulty: 'easy', q: 'What distinguishes a project from operations?', choices: ['Projects have managers', 'Projects are temporary with a unique result; operations are ongoing', 'Projects cost more', 'Operations have no goals'], answer: 1, why: 'Temporary duration and unique deliverables define projects.' },
      { domain: 'Project Lifecycle', difficulty: 'medium', q: 'An agile approach fits best when:', choices: ['Requirements are fixed and regulated', 'Requirements will evolve and feedback is valuable', 'The budget is unlimited', 'The team dislikes meetings'], answer: 1, why: 'Iteration and feedback shine when requirements are uncertain.' },
      { domain: 'Scope Management', difficulty: 'easy', q: 'A work breakdown structure does what?', choices: ['Assigns blame', 'Decomposes deliverables into manageable work', 'Sets salaries', 'Schedules meetings'], answer: 1, why: 'The WBS breaks scope into components and tasks.' },
      { domain: 'Scope Management', difficulty: 'medium', q: 'A stakeholder asks to add a feature mid-project. The correct response is:', choices: ['Add it quietly', 'Route it through change control and assess impact on time/cost/scope', 'Refuse all changes', 'Add it if easy'], answer: 1, why: 'Change control evaluates impact before scope changes.' },
      { domain: 'Scheduling', difficulty: 'easy', q: 'The critical path is:', choices: ['The shortest sequence of tasks', 'The longest chain of dependent tasks — it sets the project duration', 'The most expensive tasks', 'The riskiest tasks'], answer: 1, why: 'The longest dependent chain determines the earliest finish.' },
      { domain: 'Scheduling', difficulty: 'medium', q: 'A task with float can be delayed without:', choices: ['Any cost', 'Delaying the project end date', 'Telling anyone', 'Losing quality'], answer: 1, why: 'Float is the slack before a task affects the end date.' },
      { domain: 'Budget and Cost', difficulty: 'easy', q: 'Contingency reserves fund:', choices: ['Bonuses', 'Identified risks if they occur', 'Office parties', 'Scope additions'], answer: 1, why: 'Contingency is budgeted against risks in the register.' },
      { domain: 'Budget and Cost', difficulty: 'medium', q: 'Cost variance is calculated as:', choices: ['Actual minus planned', 'Earned value minus actual cost', 'Budget minus revenue', 'Estimate times risk'], answer: 1, why: 'CV = EV − AC; negative means over budget for work done.' },
      { domain: 'Risk Management', difficulty: 'easy', q: 'The four standard risk responses are:', choices: ['Panic, blame, hide, quit', 'Avoid, mitigate, transfer, accept', 'Buy, sell, hold, wait', 'Plan, do, check, act'], answer: 1, why: 'Avoid, mitigate, transfer, and accept cover all treatment options.' },
      { domain: 'Risk Management', difficulty: 'medium', q: 'A risk trigger is:', choices: ['The cause of the risk', 'A defined condition that activates the response plan', 'A team member', 'The risk register'], answer: 1, why: 'Triggers tell owners when to execute contingency plans.' },
      { domain: 'Stakeholder Engagement', difficulty: 'easy', q: 'High-power, high-interest stakeholders should be:', choices: ['Ignored', 'Managed closely', 'Sent monthly newsletters only', 'Excluded from decisions'], answer: 1, why: 'The power/interest grid prioritizes close management for this quadrant.' },
      { domain: 'Stakeholder Engagement', difficulty: 'medium', q: 'When escalating bad news to a sponsor, bring:', choices: ['Only the problem', 'The problem plus options and a recommendation', 'A resignation letter', 'Blame analysis'], answer: 1, why: 'Decision-makers need choices, not just alarms.' },
      { domain: 'Communication and Documentation', difficulty: 'easy', q: 'A project charter\'s primary purpose is to:', choices: ['List every task', 'Formally authorize the project and the PM\'s authority', 'Track spending', 'Store meeting notes'], answer: 1, why: 'The charter authorizes the project and names the PM.' },
      { domain: 'Communication and Documentation', difficulty: 'medium', q: 'Why keep a decision log?', choices: ['To fill pages', 'To prevent settled decisions from being relitigated', 'To track attendance', 'To assign blame later'], answer: 1, why: 'Logged decisions with rationale stop circular debate.' },
      { domain: 'Quality and Closure', difficulty: 'easy', q: 'Quality in project management means:', choices: ['Luxury features', 'Conformance to requirements', 'Expensive materials', 'Fast delivery'], answer: 1, why: 'Quality is meeting the agreed requirements, nothing more or less.' },
      { domain: 'Quality and Closure', difficulty: 'medium', q: 'The lessons-learned review belongs in which phase?', choices: ['Initiation', 'Planning', 'Closure', 'It is optional'], answer: 2, why: 'Closure formalizes acceptance and captures lessons for the organization.' },
    ],
  },
  {
    id: 'track_bizcomm',
    name: 'Business Communication Readiness',
    shortName: 'Business Communication',
    category: 'business',
    weeks: 10,
    description:
      'Professional writing, presentations, meetings, and workplace communication — the communication skills employers rank first.',
    credentialFocus: 'Mapped to Communication Skills for Business-style competency domains',
    schoolOverview:
      'Builds measurable communication competence with workplace scenarios and writing practice — readiness evidence for every career pathway.',
    studentOverview:
      'Write emails that get answered, run meetings worth attending, and present ideas clearly — the skills that make every other skill visible.',
    prerequisites: 'None.',
    alignmentNotes:
      'Mapped to Communication Skills for Business-style domains: written communication, verbal and presentation skills, digital communication, and workplace listening.',
    domains: [
      'Professional Writing', 'Email Etiquette', 'Presentations', 'Meetings',
      'Listening and Feedback', 'Digital Communication', 'Audience and Tone', 'Difficult Conversations',
    ],
    modules: [
      {
        title: 'Professional Writing', description: 'Clear, concise writing for business documents.',
        lessons: [
          { title: 'Writing Fundamentals', points: ['Purpose before prose: know what the reader should do', 'One main idea per paragraph', 'Front-load the point — conclusions first', 'Cut filler: every word earns its place', 'Active voice assigns clear responsibility', 'Proofread for typos — they tax credibility'] },
          { title: 'Business Document Types', points: ['Memos and briefs summarize for decision-makers', 'Reports organize findings with headings and evidence', 'Proposals persuade with problem, solution, and cost', 'Executive summaries stand alone for busy readers', 'Formatting — headings, bullets, white space — serves the reader', 'Templates standardize recurring documents'] },
        ],
      },
      {
        title: 'Email Etiquette', description: 'Email that is read, understood, and acted on.',
        lessons: [
          { title: 'Email Structure', points: ['Subject lines state topic and urgency', 'Greeting and sign-off match the relationship', 'One topic per email where possible', 'State the ask explicitly and early', 'Short paragraphs and bullets aid scanning', 'Proofread names and attachments before sending'] },
          { title: 'Email Judgment', points: ['Reply All is a deliberate choice, not a default', 'CC informs; TO acts', 'Tone reads colder in text — soften deliberately', 'Never email angry; draft, wait, decide', 'Sensitive topics deserve calls or meetings', 'Response-time expectations differ by culture — clarify norms'] },
        ],
      },
      {
        title: 'Presentations', description: 'Planning, designing, and delivering business presentations.',
        lessons: [
          { title: 'Planning and Structure', points: ['Define the one thing the audience must remember', 'Opening, three points, close — the classic spine', 'Know the audience: what they know, need, and fear', 'Stories make data memorable', 'Time-box sections to respect the slot', 'Rehearsal is the single biggest quality lever'] },
          { title: 'Slides and Delivery', points: ['Slides support the speaker; they are not the script', 'Minimal text, strong visuals', 'Eye contact and posture carry credibility', 'Pause instead of filler words', 'Handle questions by listening fully first', 'End with a clear call to action'] },
        ],
      },
      {
        title: 'Meetings', description: 'Meetings that produce decisions instead of fatigue.',
        lessons: [
          { title: 'Meeting Design', points: ['Every meeting needs a purpose and an agenda', 'Invite only those who decide or contribute', 'Time-box agenda items', 'Start on time regardless of stragglers', 'Roles: facilitator, note-taker, timekeeper', 'Cancel meetings without a decision or purpose'] },
          { title: 'Running and Following Up', points: ['Park tangents visibly and return to the agenda', 'Draw out quiet voices; manage dominant ones', 'Decisions and action items get owners and dates', 'Notes go out within a day', 'Action items open the next meeting', 'Recurring meetings need periodic justification'] },
        ],
      },
      {
        title: 'Listening and Feedback', description: 'The receive side of communication.',
        lessons: [
          { title: 'Active Listening', points: ['Listen to understand, not to reload', 'Paraphrase to confirm meaning', 'Questions beat assumptions', 'Nonverbal signals carry most of the message', 'Silence is a listening tool', 'Note-taking shows respect and captures commitments'] },
          { title: 'Giving and Receiving Feedback', points: ['Specific behavior, not character: "the report was late" not "you are careless"', 'SBI model: situation, behavior, impact', 'Ask permission before unsolicited feedback', 'Receive feedback with thanks before defense', 'Feedback is data — decide what to keep', 'Regular small feedback beats annual surprises'] },
        ],
      },
      {
        title: 'Digital Communication', description: 'Chat, video calls, and collaboration platforms.',
        lessons: [
          { title: 'Chat and Channel Discipline', points: ['Channels organize by topic, not by whim', 'Messages state context and ask in one post', 'Threads keep discussions findable', 'Emoji and tone indicators prevent misreading', 'Urgency belongs in the message, not the notification spam', 'Async-first respects deep work'] },
          { title: 'Video Meeting Professionalism', points: ['Camera on or off follows team norms — be deliberate', 'Mute when not speaking', 'Test audio and screen-share before the meeting', 'Background and lighting communicate professionalism', 'Engage actively: chat, reactions, verbal contribution', 'Recordings and summaries serve absent members'] },
        ],
      },
      {
        title: 'Audience and Tone', description: 'Adapting the message to the reader.',
        lessons: [
          { title: 'Audience Analysis', points: ['Executives want conclusions and decisions', 'Technical audiences want method and evidence', 'Customers want outcomes, not internal process', 'New audiences need context veterans take for granted', 'Jargon excludes — translate or define', 'One message rarely fits all audiences'] },
          { title: 'Tone Control', points: ['Formality matches relationship and stakes', 'Positive framing preserves relationships', 'Directness and courtesy are compatible', 'Cultural differences affect directness norms', 'Written tone lacks vocal cues — compensate', 'Consistency across channels builds trust'] },
        ],
      },
      {
        title: 'Difficult Conversations', description: 'Disagreement, negotiation, and conflict handled professionally.',
        lessons: [
          { title: 'Structured Difficult Conversations', points: ['Prepare: facts, goal, and the other side\'s likely view', 'Describe the issue without accusation', 'Listen to their side fully before responding', 'Focus on interests, not positions', 'Agree on concrete next steps', 'Follow up in writing'] },
          { title: 'Workplace Conflict Basics', points: ['Address conflict early — it compounds', 'Separate the person from the problem', 'Common ground first, differences second', 'Escalate when direct resolution fails or safety is involved', 'Document patterns, not single incidents', 'Professional disagreement is normal and healthy'] },
        ],
      },
      {
        title: 'Digital Communication and Collaboration', description: 'Professional norms for email, chat, meetings, and shared documents.',
        lessons: [
          { title: 'Email and Chat Norms', points: ['Subject lines state the topic and any action needed', 'One topic per message keeps threads usable', 'Chat is for quick coordination; decisions go to email or docs', 'Response-time expectations differ by channel', 'Tone reads colder in text — add context and courtesy', 'Never send in anger; draft, wait, reread, then decide'] },
          { title: 'Meetings and Shared Documents', points: ['Every meeting needs an agenda and a decision owner', 'Invite only people who decide or contribute', 'Notes capture decisions, owners, and deadlines', 'Version control and naming conventions prevent chaos', 'Comments suggest; edits commit — know the difference', 'Async updates replace status meetings when done well'] },
        ],
      },
      {
        title: 'Final Readiness Review', description: 'Consolidated communication review and exam preparation.',
        lessons: [
          { title: 'Communication Knowledge Map', points: ['Writing: purpose first, active voice, reader format', 'Email: subject, ask, tone, judgment', 'Presentations: one message, rehearsal, visuals', 'Meetings: agenda, roles, action items', 'Listening: paraphrase, SBI feedback', 'Digital and difficult: channels, tone, interests'] },
          { title: 'Exam-Day Strategy', points: ['Scenario questions reward reader-first choices', 'Email questions test tone and structure judgment', 'Meeting questions center on agenda and action items', 'Feedback scenarios favor SBI framing', 'Choose professional over clever every time', 'Review missed practice questions by domain'] },
        ],
      },
    ],
    questions: [
      { domain: 'Professional Writing', difficulty: 'easy', q: 'In business writing, the main point should appear:', choices: ['At the end', 'At the beginning', 'In a footnote', 'Only in the subject'], answer: 1, why: 'Front-loading respects readers and forces clarity.' },
      { domain: 'Professional Writing', difficulty: 'medium', q: '"The report was submitted by Maria" vs. "Maria submitted the report" — the second is better because it:', choices: ['Is longer', 'Uses active voice with clear responsibility', 'Uses passive voice', 'Is more formal'], answer: 1, why: 'Active voice names the actor and reads stronger.' },
      { domain: 'Email Etiquette', difficulty: 'easy', q: 'CC recipients are expected to:', choices: ['Take action', 'Stay informed, not necessarily act', 'Reply to all', 'Forward the message'], answer: 1, why: 'CC informs; TO carries the action.' },
      { domain: 'Email Etiquette', difficulty: 'medium', type: 'scenario', q: 'You receive an infuriating email. The professional response is to:', choices: ['Reply immediately with your reaction', 'Draft a reply, wait, then decide whether to send, call, or meet instead', 'Forward it to colleagues', 'Reply All in caps'], answer: 1, why: 'Cooling time and channel choice prevent career-limiting emails.' },
      { domain: 'Presentations', difficulty: 'easy', q: 'The single biggest lever for presentation quality is:', choices: ['More slides', 'Rehearsal', 'Fancier templates', 'Smaller fonts'], answer: 1, why: 'Rehearsal improves timing, confidence, and clarity more than any design change.' },
      { domain: 'Presentations', difficulty: 'medium', q: 'Slides should contain minimal text because:', choices: ['Printers are expensive', 'The audience cannot read dense slides and listen simultaneously', 'Text is unprofessional', 'Fonts are costly'], answer: 1, why: 'Reading and listening compete; slides support, not replace, the speaker.' },
      { domain: 'Meetings', difficulty: 'easy', q: 'Every productive meeting starts with:', choices: ['Small talk for 10 minutes', 'A clear purpose and agenda', 'Attendance debate', 'Status from everyone'], answer: 1, why: 'Purpose and agenda focus time on decisions and outcomes.' },
      { domain: 'Meetings', difficulty: 'medium', q: 'Action items must always include:', choices: ['A motivational quote', 'An owner and a due date', 'A budget code', 'Three witnesses'], answer: 1, why: 'Unowned, undated actions are wishes, not commitments.' },
      { domain: 'Listening and Feedback', difficulty: 'easy', q: 'The SBI feedback model stands for:', choices: ['Situation, Behavior, Impact', 'Stop, Blame, Ignore', 'Speak, Brief, Informal', 'Survey, Build, Implement'], answer: 0, why: 'SBI frames feedback factually: the situation, the observed behavior, its impact.' },
      { domain: 'Listening and Feedback', difficulty: 'medium', q: 'Paraphrasing what someone said primarily:', choices: ['Wastes time', 'Confirms understanding and shows you heard them', 'Tests their patience', 'Avoids commitment'], answer: 1, why: 'Paraphrase verifies meaning and builds rapport.' },
      { domain: 'Digital Communication', difficulty: 'easy', q: 'In team chat platforms, threads exist to:', choices: ['Confuse newcomers', 'Keep discussions organized and findable', 'Hide messages', 'Increase notifications'], answer: 1, why: 'Threads group replies under the original post instead of flooding the channel.' },
      { domain: 'Digital Communication', difficulty: 'medium', q: 'Async-first communication culture means:', choices: ['Everyone works alone', 'Messages do not demand instant response; deep work is protected', 'No meetings ever', 'Email only'], answer: 1, why: 'Async norms reduce interruption cost while keeping coordination.' },
      { domain: 'Audience and Tone', difficulty: 'easy', q: 'When presenting to executives, lead with:', choices: ['Technical detail', 'The conclusion and the decision needed', 'Your process', 'Background history'], answer: 1, why: 'Executives need the decision context first; detail follows on request.' },
      { domain: 'Audience and Tone', difficulty: 'medium', q: 'Written tone needs extra warmth compared to speech because:', choices: ['Fonts are cold', 'Text lacks vocal cues and facial expression, so it reads colder than intended', 'Readers are sensitive', 'Grammar requires it'], answer: 1, why: 'Without nonverbal channels, neutral phrasing reads as hostile.' },
      { domain: 'Difficult Conversations', difficulty: 'easy', q: 'Effective conflict resolution focuses on:', choices: ['Positions', 'Interests underlying positions', 'Winning', 'Avoidance'], answer: 1, why: 'Interests can be satisfied multiple ways; positions cannot.' },
      { domain: 'Difficult Conversations', difficulty: 'medium', type: 'scenario', q: 'A teammate missed a deadline affecting your work. The professional opener is:', choices: ['"You always miss deadlines"', '"The report came in after Friday\'s cutoff, which delayed the client send — can we talk about what happened?"', 'Silence and resentment', 'An email to their manager'], answer: 1, why: 'Specific, behavior-focused, non-accusatory framing opens resolution.' },
    ],
  },
  {
    id: 'track_custsvc',
    name: 'Customer Service and Workplace Professionalism Readiness',
    shortName: 'Customer Service',
    category: 'business',
    weeks: 8,
    description:
      'Service mindset, customer conversations, complaint resolution, and the professionalism standards every workplace expects.',
    credentialFocus: 'Mapped to customer service and workplace professionalism competency domains',
    schoolOverview:
      'A career-ready professionalism track with complaint-resolution scenarios — readiness evidence for work-based learning placements.',
    studentOverview:
      'Learn to handle customers, complaints, and workplace situations like a professional — skills that transfer to every job you will ever have.',
    prerequisites: 'None.',
    alignmentNotes:
      'Mapped to customer service and workplace professionalism competency domains: service mindset, communication, complaint resolution, reliability, and workplace conduct.',
    domains: [
      'Service Mindset', 'Customer Communication', 'Complaint Resolution', 'Reliability and Work Ethic',
      'Workplace Conduct', 'Teamwork', 'Time Management', 'Digital Professionalism',
    ],
    modules: [
      {
        title: 'Service Mindset', description: 'What great service is and why it matters.',
        lessons: [
          { title: 'The Service Attitude', points: ['Every role has customers — internal or external', 'Service is solving the person\'s problem, not reciting policy', 'First impressions form in seconds', 'Customers remember how you made them feel', 'Ownership: see the issue through, or hand off warmly', 'Great service is a habit system, not heroics'] },
          { title: 'Understanding Customer Expectations', points: ['Baseline expectations: accuracy, speed, courtesy', 'Expectations are set by your promises and your competitors', 'Under-promise and over-deliver protects trust', 'Different customers weight speed vs. care differently', 'Mistakes are chances to build loyalty if handled well', 'Feedback loops tell you what expectations actually are'] },
        ],
      },
      {
        title: 'Customer Communication', description: 'Clear, courteous exchanges in person, by phone, and online.',
        lessons: [
          { title: 'In-Person and Phone Skills', points: ['Greet promptly — acknowledgment within seconds', 'Names personalize the interaction', 'Listen fully before solving', 'Speak in the customer\'s vocabulary, not internal jargon', 'Summarize what you will do and when', 'Thank them regardless of outcome'] },
          { title: 'Written Customer Communication', points: ['Answer the actual question first', 'Templates speed replies but must be personalized', 'Positive framing: "here\'s what I can do"', 'No internal jargon or blame in customer text', 'Proofread before sending', 'Set response expectations and keep them'] },
        ],
      },
      {
        title: 'Complaint Resolution', description: 'Turning unhappy customers into loyal ones.',
        lessons: [
          { title: 'The Recovery Process', points: ['Listen without interrupting — venting defuses anger', 'Acknowledge and apologize for the experience', 'Restate the problem to confirm understanding', 'Offer options, not excuses', 'Act within your authority; escalate beyond it', 'Follow up to confirm satisfaction'] },
          { title: 'Difficult Customer Scenarios', points: ['Stay calm — their anger is at the situation', 'Do not take insults personally, but do not accept abuse', 'Set boundaries politely: "I want to help, and I need us to keep this respectful"', 'Know when to hand off to a supervisor', 'Document the interaction factually', 'Patterns in complaints point at process fixes'] },
        ],
      },
      {
        title: 'Reliability and Work Ethic', description: 'The habits employers trust.',
        lessons: [
          { title: 'Dependability Basics', points: ['Show up on time — every time', 'Do what you said you would do', 'Communicate early when things slip', 'Meet commitments or renegotiate before the deadline', 'Consistency builds reputation faster than brilliance', 'Absences and lateness need proactive communication'] },
          { title: 'Ownership and Initiative', points: ['See a problem, own it or report it', 'Ask "what else can I help with" when work slows', 'Learn the next skill before it is required', 'Finish tasks fully — including the boring parts', 'Quality check your own work first', 'Initiative without reliability reads as chaos — build both'] },
        ],
      },
      {
        title: 'Workplace Conduct', description: 'Professional behavior standards.',
        lessons: [
          { title: 'Professionalism Standards', points: ['Dress and grooming follow the workplace norm', 'Respect shared spaces and equipment', 'Gossip and drama damage teams — stay out', 'Confidential information stays confidential', 'Honesty in small things predicts trust in big ones', 'Social media reflects on you and your employer'] },
          { title: 'Boundaries and Respect', points: ['Respect time: be brief, be prepared', 'Personal topics have professional limits', 'Harassment and discrimination policies protect everyone', 'Differences in background are strengths', 'Report serious misconduct through proper channels', 'Courtesy costs nothing and compounds daily'] },
        ],
      },
      {
        title: 'Teamwork', description: 'Being the colleague everyone wants.',
        lessons: [
          { title: 'Team Fundamentals', points: ['Shared goals beat individual credit', 'Cover for teammates; they will cover for you', 'Share information freely within the team', 'Ask for help early — it is strength, not weakness', 'Celebrate team wins publicly', 'Conflict handled early stays small'] },
          { title: 'Collaboration Skills', points: ['Handoffs need completeness: context, status, next step', 'Document what others will need', 'Offer specific, actionable help', 'Give credit precisely and generously', 'New teammates ramp faster with your patience', 'Reliability makes you the teammate people request'] },
        ],
      },
      {
        title: 'Time Management', description: 'Priorities, focus, and follow-through.',
        lessons: [
          { title: 'Prioritization', points: ['Urgent vs. important — handle both, but do not confuse them', 'Three daily priorities beat a list of thirty', 'Estimate task time honestly', 'Deadlines drive sequencing', 'Say no or negotiate when overloaded', 'Review priorities when the day changes'] },
          { title: 'Focus and Follow-Through', points: ['Single-tasking beats multitasking for real work', 'Notifications off during focus blocks', 'Break big tasks into next actions', 'The two-minute rule: quick tasks done now', 'End the day with tomorrow\'s first step defined', 'Done and documented beats perfect and unfinished'] },
        ],
      },
      {
        title: 'Digital Professionalism', description: 'Professional behavior across digital tools.',
        lessons: [
          { title: 'Digital Conduct', points: ['Work accounts are for work', 'Messages are records — write accordingly', 'Response norms differ by channel — learn them', 'Video presence is professional presence', 'Separate personal posting from professional identity', 'Screenshares should be staged: close unrelated tabs'] },
          { title: 'Data and Security Etiquette', points: ['Customer data is handled per policy, always', 'Lock your screen when away', 'Phishing targets service staff — verify before acting', 'Passwords are never shared', 'Report suspicious requests', 'Professional habits protect you as much as the company'] },
        ],
      },
      {
        title: 'Service Metrics and Continuous Improvement', description: 'Measuring service quality and turning feedback into improvement.',
        lessons: [
          { title: 'Core Service Metrics', points: ['CSAT measures satisfaction with a specific interaction', 'NPS measures likelihood to recommend the company', 'First-contact resolution tracks problems solved in one touch', 'Average handle time balances speed against quality', 'Backlog and response time reveal capacity problems', 'Metrics guide coaching; they are not weapons'] },
          { title: 'Feedback Loops and Quality', points: ['Quality reviews sample interactions against clear standards', 'Customer comments are free consulting — mine them for themes', 'Close the loop: tell customers what changed because of them', 'Recurring complaints point to product or policy fixes upstream', 'Coaching works best specific, timely, and private', 'Small consistent improvements compound into reputation'] },
        ],
      },
      {
        title: 'Final Readiness Review', description: 'Consolidated professionalism review and exam preparation.',
        lessons: [
          { title: 'Professionalism Knowledge Map', points: ['Service: solve the person\'s problem, own the outcome', 'Communication: acknowledge, listen, summarize, follow up', 'Recovery: listen, acknowledge, options, act, follow up', 'Reliability: on time, as promised, communicated early', 'Conduct: respect, confidentiality, boundaries', 'Teamwork and time: priorities, handoffs, focus'] },
          { title: 'Exam-Day Strategy', points: ['Scenario questions reward calm, ownership, and follow-through', 'Complaint scenarios follow the recovery sequence', 'Choose the option that protects the relationship and the policy', 'Professional > clever > fast, in that order', 'Watch for escalation triggers in stems', 'Review missed practice questions by domain'] },
        ],
      },
    ],
    questions: [
      { domain: 'Service Mindset', difficulty: 'easy', q: 'Great customer service fundamentally means:', choices: ['Reciting policy', 'Solving the person\'s actual problem', 'Being fast at all costs', 'Avoiding complaints'], answer: 1, why: 'Service is problem resolution with care, not policy recitation.' },
      { domain: 'Service Mindset', difficulty: 'medium', q: 'A handled-well mistake can increase loyalty because:', choices: ['Customers enjoy errors', 'Recovery demonstrates the company\'s character under stress', 'It generates paperwork', 'It delays resolution'], answer: 1, why: 'Service recovery paradox: good recovery builds more trust than no error.' },
      { domain: 'Customer Communication', difficulty: 'easy', q: 'The first step when a customer approaches is:', choices: ['Finish your current task silently', 'Acknowledge them promptly, even if just a greeting', 'Point to a sign', 'Ask them to wait'], answer: 1, why: 'Prompt acknowledgment prevents the irritation that colors the whole interaction.' },
      { domain: 'Customer Communication', difficulty: 'medium', q: 'Positive framing means saying:', choices: ['"We can\'t do that"', '"Here\'s what I can do for you"', '"That\'s not my job"', '"Policy says no"'], answer: 1, why: 'Framing around available options keeps the conversation constructive.' },
      { domain: 'Complaint Resolution', difficulty: 'easy', q: 'The first step with an angry customer is:', choices: ['Explain policy', 'Listen fully without interrupting', 'Offer a refund', 'Call a manager'], answer: 1, why: 'Being heard defuses emotion enough for problem-solving.' },
      { domain: 'Complaint Resolution', difficulty: 'medium', type: 'scenario', q: 'A customer demands something beyond your authority. You should:', choices: ['Refuse flatly', 'Acknowledge the request and escalate warmly to someone with authority', 'Promise it anyway', 'Ignore them'], answer: 1, why: 'Warm escalation keeps the customer supported without overpromising.' },
      { domain: 'Reliability and Work Ethic', difficulty: 'easy', q: 'When you will miss a commitment, the professional move is:', choices: ['Say nothing and hope', 'Communicate early with a new plan', 'Disappear', 'Blame technology'], answer: 1, why: 'Early communication preserves trust and enables adjustment.' },
      { domain: 'Reliability and Work Ethic', difficulty: 'medium', q: 'Reputation at work compounds primarily through:', choices: ['One heroic effort', 'Consistent small acts of dependability', 'Visibility in meetings', 'Long hours'], answer: 1, why: 'Trust is built by repeated kept promises, not single events.' },
      { domain: 'Workplace Conduct', difficulty: 'easy', q: 'Confidential customer information should be:', choices: ['Shared with friends', 'Protected per policy and never discussed casually', 'Posted anonymously', 'Sold'], answer: 1, why: 'Confidentiality is a legal and ethical duty.' },
      { domain: 'Workplace Conduct', difficulty: 'medium', q: 'The best response to workplace gossip is:', choices: ['Contribute your share', 'Decline to participate and redirect to work', 'Record it', 'Repeat it privately'], answer: 1, why: 'Gossip erodes trust; staying neutral protects you and the team.' },
      { domain: 'Teamwork', difficulty: 'easy', q: 'A good handoff includes:', choices: ['Just the task name', 'Context, current status, and the next step', 'Your opinion of the customer', 'Minimal detail'], answer: 1, why: 'Complete handoffs prevent dropped balls and repeated work.' },
      { domain: 'Teamwork', difficulty: 'medium', q: 'Asking for help early is:', choices: ['A sign of weakness', 'Professional judgment that protects the deadline', 'Annoying', 'Unnecessary'], answer: 1, why: 'Early help requests are cheap; late surprises are expensive.' },
      { domain: 'Time Management', difficulty: 'easy', q: 'The two-minute rule says:', choices: ['Meetings last two minutes', 'If a task takes under two minutes, do it now', 'Work two minutes per hour', 'Emails need two-minute replies'], answer: 1, why: 'Immediate action on tiny tasks prevents list buildup.' },
      { domain: 'Time Management', difficulty: 'medium', q: 'Urgent and important differ because:', choices: ['They are the same', 'Important serves goals; urgent just demands attention now', 'Urgent is always first priority', 'Important can be ignored'], answer: 1, why: 'Confusing urgency with importance crowds out meaningful work.' },
      { domain: 'Digital Professionalism', difficulty: 'easy', q: 'Work chat messages should be written assuming:', choices: ['They vanish instantly', 'They are permanent records', 'Only friends read them', 'No one checks'], answer: 1, why: 'Digital messages are records — tone and content persist.' },
      { domain: 'Digital Professionalism', difficulty: 'medium', q: 'A caller asks you to verify account details via a link they emailed. You should:', choices: ['Click and comply', 'Verify through official channels — service staff are prime phishing targets', 'Ask for their password', 'Forward to a coworker'], answer: 1, why: 'Verification through trusted channels defeats social engineering.' },
    ],
  },
  {
    id: 'track_leadership',
    name: 'Leadership and Team Operations Readiness',
    shortName: 'Leadership & Teams',
    category: 'business',
    weeks: 10,
    description:
      'Practical leadership for first-time supervisors: delegation, motivation, performance conversations, and running team operations.',
    credentialFocus: 'Mapped to leadership and team operations competency domains',
    schoolOverview:
      'Prepares students for supervisory and team-lead roles with delegation and performance-conversation practice — documented readiness per domain.',
    studentOverview:
      'Learn to lead a team for real: set goals, delegate clearly, coach performance, and run the day-to-day operations that keep teams delivering.',
    prerequisites: 'None. Workplace or team experience is helpful.',
    alignmentNotes:
      'Mapped to leadership and team operations competency domains: goal setting, delegation, motivation, coaching, performance management, and team communication.',
    domains: [
      'Leadership Styles', 'Goal Setting', 'Delegation', 'Motivation',
      'Coaching and Feedback', 'Performance Management', 'Team Communication', 'Conflict and Culture',
    ],
    modules: [
      {
        title: 'Leadership Styles', description: 'Adapting how you lead to who you lead.',
        lessons: [
          { title: 'Style Range', points: ['Directing: clear instructions for new or critical work', 'Coaching: guidance plus explanation for developing skills', 'Supporting: collaboration for capable team members', 'Delegating: autonomy for proven performers', 'No single style fits every person or situation', 'Self-awareness of your default style is the starting point'] },
          { title: 'Situational Judgment', points: ['Match style to the person\'s skill and motivation for the task', 'New tasks need more direction regardless of seniority', 'Crisis shortens consultation', 'Over-directing experts kills motivation', 'Under-supporting beginners sets them up to fail', 'Adjust as people grow — styles are dynamic'] },
        ],
      },
      {
        title: 'Goal Setting', description: 'Turning direction into measurable targets.',
        lessons: [
          { title: 'Effective Goals', points: ['SMART: specific, measurable, achievable, relevant, time-bound', 'Goals cascade from organization to team to individual', 'Too many goals means no priorities', 'Written goals outperform intentions', 'Metrics measure outcomes, not just activity', 'Public commitment increases follow-through'] },
          { title: 'Tracking and Review', points: ['Regular check-ins beat annual surprises', 'Dashboards make progress visible', 'Off-track goals need conversation, not silence', 'Adjust goals when reality changes — document why', 'Celebrate completion visibly', 'Missed goals carry lessons, not just blame'] },
        ],
      },
      {
        title: 'Delegation', description: 'Multiplying your impact through others.',
        lessons: [
          { title: 'Delegating Well', points: ['Delegate outcomes, not just tasks', 'Match the assignment to skill and development goals', 'Define what done looks like and when', 'Grant the authority the task requires', 'Checkpoints without micromanagement', 'The leader keeps accountability even after delegating'] },
          { title: 'Delegation Pitfalls', points: ['Hoarding work caps team growth and burns you out', 'Dumping without support is abandonment, not delegation', 'Taking work back at the first wobble teaches helplessness', 'Reverse delegation — upward handoffs — must be resisted politely', 'Document delegated ownership clearly', 'Mistakes are tuition for growing capability'] },
        ],
      },
      {
        title: 'Motivation', description: 'What actually drives people at work.',
        lessons: [
          { title: 'Motivation Drivers', points: ['Autonomy, mastery, and purpose drive intrinsic motivation', 'Recognition works when specific and timely', 'Fairness is a hygiene factor — perceived unfairness demotivates fast', 'Growth opportunities retain ambitious people', 'Money matters up to fairness; beyond that, meaning leads', 'Different people are motivated differently — ask'] },
          { title: 'Sustaining Team Energy', points: ['Progress visibility fuels momentum', 'Remove blockers faster than you add pressure', 'Rituals — wins of the week — keep morale rhythmic', 'Burnout prevention is a leadership duty', 'Workload fairness is watched constantly by the team', 'Energy is contagious: leaders set the tone'] },
        ],
      },
      {
        title: 'Coaching and Feedback', description: 'Developing people through conversation.',
        lessons: [
          { title: 'Coaching Conversations', points: ['Questions develop people; answers create dependence', 'GROW: goal, reality, options, way forward', 'Listen more than you talk', 'Coaching is regular, not just for problems', 'Focus on one development area at a time', 'Commitments end every coaching session'] },
          { title: 'Feedback That Lands', points: ['Praise specifically and publicly', 'Correct privately and promptly', 'SBI: situation, behavior, impact', 'Ask for their view before giving yours', 'Agree on the change and the follow-up', 'Feedback without follow-up is noise'] },
        ],
      },
      {
        title: 'Performance Management', description: 'Expectations, reviews, and improvement plans.',
        lessons: [
          { title: 'Setting Expectations', points: ['Written expectations prevent review surprises', 'Standards apply consistently across the team', 'Behavior and results both count', 'Document performance continuously, not at review time', 'Clear metrics reduce subjectivity disputes', 'Onboarding sets the performance baseline'] },
          { title: 'Handling Underperformance', points: ['Address issues early — delay is unfair to everyone', 'Diagnose first: skill, will, or obstacle?', 'Improvement plans are specific, supported, and time-bound', 'Documentation protects fair process', 'Escalation follows the policy ladder', 'Dignity matters even in exit conversations'] },
        ],
      },
      {
        title: 'Team Communication', description: 'Meetings, rituals, and information flow for teams.',
        lessons: [
          { title: 'Team Meeting Rhythms', points: ['Daily standups: yesterday, today, blockers', 'Weekly meetings handle decisions and coordination', 'One-on-ones belong to the team member\'s agenda', 'All-hands share direction and celebrate wins', 'Every meeting ends with owners and dates', 'Cancel rituals that stop earning their time'] },
          { title: 'Information Flow', points: ['Decisions get documented where everyone can find them', 'Context sharing prevents siloed knowledge', 'Bad news flows upward fastest in healthy teams', 'Repeat key messages — people need to hear things more than once', 'Channel norms: what goes in chat vs. email vs. meeting', 'Transparency builds the trust teams run on'] },
        ],
      },
      {
        title: 'Conflict and Culture', description: 'Handling friction and shaping how the team works.',
        lessons: [
          { title: 'Team Conflict', points: ['Address conflict early and directly', 'Focus on the issue, never the person', 'Hear both sides before judging', 'Shared goals reframe adversaries as collaborators', 'Some conflict is productive — eliminate disrespect, not disagreement', 'Escalate when safety or policy is involved'] },
          { title: 'Building Culture', points: ['Culture is what leaders reward, tolerate, and model', 'Norms beat posters: how meetings, mistakes, and credit actually work', 'Onboarding teaches culture faster than documents', 'Inclusive habits — rotating voices, credit sharing — compound', 'Address toxic behavior quickly regardless of performance', 'Culture is built in ordinary moments, not offsites'] },
        ],
      },
      {
        title: 'Leading Change', description: 'Guiding people and teams through transitions.',
        lessons: [
          { title: 'How People Experience Change', points: ['Change follows a curve: denial, resistance, exploration, commitment', 'People resist loss, not change itself', 'Communicate the "why" repeatedly and in plain language', 'Listen for concerns before countering them', 'Involve people affected by the change in shaping it', 'Change fatigue is real — pace initiatives deliberately'] },
          { title: 'Making Change Stick', points: ['Quick wins build belief that change is working', 'Visible sponsor support signals the change matters', 'New habits need cues, routines, and rewards', 'Metrics show whether adoption is real or performative', 'Expect a productivity dip; plan support through it', 'Celebrate milestones to reinforce the new normal'] },
        ],
      },
      {
        title: 'Final Readiness Review', description: 'Consolidated leadership review and exam preparation.',
        lessons: [
          { title: 'Leadership Knowledge Map', points: ['Styles: match direction to skill and motivation', 'Goals: SMART, cascaded, reviewed regularly', 'Delegation: outcomes with authority and checkpoints', 'Motivation: autonomy, mastery, purpose, fairness', 'Coaching: questions, GROW, SBI feedback', 'Operations: rhythms, documentation, culture'] },
          { title: 'Exam-Day Strategy', points: ['Scenario questions reward situational style-matching', 'Delegation stems test authority-clarity balance', 'Underperformance scenarios: diagnose before acting', 'Feedback questions favor SBI and privacy', 'Choose the option that develops people long-term', 'Review missed practice questions by domain'] },
        ],
      },
    ],
    questions: [
      { domain: 'Leadership Styles', difficulty: 'easy', q: 'A brand-new team member on an unfamiliar task usually needs which style?', choices: ['Delegating', 'Directing', 'Hands-off support', 'No leadership'], answer: 1, why: 'Low task experience needs clear direction, whatever the person\'s seniority.' },
      { domain: 'Leadership Styles', difficulty: 'medium', q: 'Over-directing a proven expert primarily risks:', choices: ['Higher quality', 'Demotivation and disengagement', 'Faster work', 'Better documentation'], answer: 1, why: 'Experts experience micromanagement as distrust.' },
      { domain: 'Goal Setting', difficulty: 'easy', q: 'SMART goals are:', choices: ['Easy goals', 'Specific, measurable, achievable, relevant, time-bound', 'Secret goals', 'Monthly goals'], answer: 1, why: 'The SMART criteria make goals actionable and verifiable.' },
      { domain: 'Goal Setting', difficulty: 'medium', q: 'Why cascade goals from organization to individual?', choices: ['For paperwork', 'So everyone\'s targets connect to the organization\'s direction', 'To increase meetings', 'For payroll'], answer: 1, why: 'Cascading aligns effort with strategy at every level.' },
      { domain: 'Delegation', difficulty: 'easy', q: 'Proper delegation includes granting:', choices: ['Nothing extra', 'The authority needed to complete the task', 'A raise', 'Your title'], answer: 1, why: 'Responsibility without authority sets the delegate up to fail.' },
      { domain: 'Delegation', difficulty: 'medium', q: 'After delegating, accountability stays with:', choices: ['The delegate entirely', 'The leader — delegation transfers work, not accountability', 'HR', 'Nobody'], answer: 1, why: 'Leaders remain answerable for outcomes they delegate.' },
      { domain: 'Motivation', difficulty: 'easy', q: 'The three core intrinsic motivators are:', choices: ['Money, fame, power', 'Autonomy, mastery, purpose', 'Fear, pressure, deadlines', 'Snacks, games, prizes'], answer: 1, why: 'Autonomy, mastery, and purpose sustain motivation beyond rewards.' },
      { domain: 'Motivation', difficulty: 'medium', q: 'Recognition works best when it is:', choices: ['Generic and annual', 'Specific and timely', 'Private always', 'Monetary only'], answer: 1, why: 'Specific, prompt recognition reinforces exactly the right behavior.' },
      { domain: 'Coaching and Feedback', difficulty: 'easy', q: 'The GROW coaching model stands for:', choices: ['Goal, Reality, Options, Way forward', 'Grow, Risk, Order, Win', 'Guide, Review, Observe, Work', 'Grade, Rank, Optimize, Win'], answer: 0, why: 'GROW structures coaching: goal, reality, options, way forward.' },
      { domain: 'Coaching and Feedback', difficulty: 'medium', q: 'Corrective feedback should be delivered:', choices: ['Publicly for maximum effect', 'Privately and promptly', 'Only at annual reviews', 'By email only'], answer: 1, why: 'Privacy preserves dignity; promptness ties feedback to the behavior.' },
      { domain: 'Performance Management', difficulty: 'easy', q: 'Before a performance improvement plan, first diagnose:', choices: ['Who to blame', 'Whether the gap is skill, will, or an obstacle', 'Salary fairness', 'Team popularity'], answer: 1, why: 'Different causes need different remedies — training, motivation, or removal of blockers.' },
      { domain: 'Performance Management', difficulty: 'medium', q: 'Continuous performance documentation matters because:', choices: ['HR likes files', 'Reviews must reflect the whole period, not recent memory', 'It replaces conversation', 'It is legally optional'], answer: 1, why: 'Recency bias distorts reviews without contemporaneous records.' },
      { domain: 'Team Communication', difficulty: 'easy', q: 'A daily standup answers which three questions?', choices: ['Who, what, why', 'What was done, what is next, what is blocking', 'Salary, title, office', 'Lunch plans'], answer: 1, why: 'Yesterday/today/blockers keeps the team synchronized in minutes.' },
      { domain: 'Team Communication', difficulty: 'medium', q: 'In healthy teams, bad news travels:', choices: ['Never', 'Upward quickly', 'Only through HR', 'By rumor'], answer: 1, why: 'Fast escalation of problems is a hallmark of psychological safety.' },
      { domain: 'Conflict and Culture', difficulty: 'easy', q: 'Team culture is shaped most by:', choices: ['Posters and slogans', 'What leaders reward, tolerate, and model daily', 'Office furniture', 'Org charts'], answer: 1, why: 'Culture follows behavior and incentives, not declarations.' },
      { domain: 'Conflict and Culture', difficulty: 'medium', type: 'scenario', q: 'Two high performers openly clash in a meeting. The leader should:', choices: ['Let them fight it out publicly', 'Address it promptly, focusing on the issue and shared goals, in private follow-ups', 'Fire both', 'Ignore personality conflicts always'], answer: 1, why: 'Early, issue-focused intervention prevents escalation while preserving both contributors.' },
    ],
  },
  {
    id: 'track_quickbooks',
    name: 'QuickBooks Online Readiness',
    shortName: 'QuickBooks Online',
    category: 'finance',
    weeks: 12,
    description:
      'Cloud accounting workflows: company setup, sales and expense cycles, banking and reconciliation, and core reports in QuickBooks Online.',
    credentialFocus: 'Mapped to Intuit QuickBooks-style competency domains',
    schoolOverview:
      'A hands-on accounting software pathway with transaction categorization and reconciliation practice — readiness evidence for business and finance programs.',
    studentOverview:
      'Learn the accounting software small businesses actually use: set up companies, record sales and expenses, reconcile bank accounts, and produce reports.',
    prerequisites: 'None. Basic bookkeeping concepts are helpful (or pair with Bookkeeping Professional).',
    alignmentNotes:
      'Mapped to Intuit QuickBooks-style competency domains: company setup, sales and money-in workflows, expenses and money-out, banking and reconciliation, and reporting.',
    domains: [
      'Company Setup', 'Chart of Accounts', 'Sales and Invoicing', 'Expenses and Bills',
      'Banking and Reconciliation', 'Reports', 'Customers and Vendors', 'Period-End Workflow',
    ],
    modules: [
      {
        title: 'Company Setup', description: 'Configuring a new company file correctly from the start.',
        lessons: [
          { title: 'Initial Configuration', points: ['Company settings define legal name, address, and fiscal year', 'Accrual vs. cash accounting changes when revenue and expenses count', 'Sales tax setup depends on where you sell', 'User roles control who can see and change what', 'Opening balances seed starting financial positions', 'Setup mistakes compound — verify before transacting'] },
          { title: 'Lists and Preferences', points: ['Products and services lists define what you sell', 'Payment methods and terms standardize transactions', 'Custom fields track what your business cares about', 'Automation rules reduce repetitive entry', 'Attachment habits keep source documents with transactions', 'Review settings quarterly as the business evolves'] },
        ],
      },
      {
        title: 'Chart of Accounts', description: 'The account structure behind every report.',
        lessons: [
          { title: 'Account Types', points: ['Assets, liabilities, equity, income, expense — the five families', 'Every transaction posts to at least two accounts', 'Account numbers keep ordering logical', 'Sub-accounts add detail without clutter', 'Too many accounts confuse; too few hide insight', 'The chart mirrors how the business wants to see itself'] },
          { title: 'Managing Accounts', points: ['Create accounts deliberately, with naming conventions', 'Merge duplicates instead of deleting history', 'Inactive accounts hide without losing data', 'Opening balances need documentation', 'Reclassifying transactions fixes miscategorized history', 'Review the chart annually with the accountant'] },
        ],
      },
      {
        title: 'Sales and Invoicing', description: 'The money-in cycle from estimate to payment.',
        lessons: [
          { title: 'Estimates and Invoices', points: ['Estimates quote work and convert to invoices', 'Invoices record what the customer owes', 'Payment terms drive when cash arrives', 'Recurring invoices automate repeat billing', 'Partial payments apply against open balances', 'Credit memos correct overcharges without deleting history'] },
          { title: 'Receiving Payments', points: ['Record payments against the right invoice', 'Undeposited funds group receipts before bank deposit', 'Sales receipts for immediate payment; invoices for credit', 'Payment links shorten collection time', 'Aging reports reveal who owes what, how late', 'Collections cadence: reminder, call, escalation'] },
        ],
      },
      {
        title: 'Expenses and Bills', description: 'The money-out cycle: bills, checks, and expense tracking.',
        lessons: [
          { title: 'Bills and Payments', points: ['Enter bills when received, pay when due — accrual discipline', 'Paying a bill differs from entering an expense', 'Vendor credits apply against future bills', 'Recurring transactions automate rent and subscriptions', 'Check printing follows proper numbering and voiding', 'Approval habits prevent unauthorized spending'] },
          { title: 'Expense Categorization', points: ['Every expense lands in a meaningful account', 'Receipts attach to transactions for audit trail', 'Mileage and meals have special tracking rules', 'Categorization consistency makes reports meaningful', 'Bank rules auto-categorize recurring vendors', 'Monthly categorization review keeps the books clean'] },
        ],
      },
      {
        title: 'Banking and Reconciliation', description: 'Bank feeds, matching, and the monthly reconciliation.',
        lessons: [
          { title: 'Bank Feeds and Matching', points: ['Connected feeds import bank transactions automatically', 'Match feed items to existing entries, or add new ones', 'Rules recognize recurring bank activity', 'Duplicates corrupt books — match, don\'t re-add', 'Review feed items daily or weekly, not monthly', 'Transfers between accounts must not double-count'] },
          { title: 'Reconciliation Practice', points: ['Reconcile every account every month', 'The goal: books match the bank statement exactly', 'Outstanding checks and deposits in transit explain differences', 'Never force a difference — find it', 'Reconciliation locks the period against silent change', 'Practice reconciliations until the workflow is reflex'] },
        ],
      },
      {
        title: 'Reports', description: 'Profit & loss, balance sheet, and the reports that run a business.',
        lessons: [
          { title: 'Core Financial Reports', points: ['Profit & loss shows performance over a period', 'Balance sheet shows position at a moment', 'Cash flow statement explains where cash went', 'Comparisons to prior periods reveal trends', 'Customize columns and filters for the question at hand', 'Reports are only as good as the categorization behind them'] },
          { title: 'Operational Reports', points: ['A/R aging tracks who owes you', 'A/P aging tracks what you owe', 'Sales by customer/item reveal concentration risk', 'Expense by vendor exposes creeping costs', 'Budget vs. actual holds the plan accountable', 'Scheduled report emails keep owners informed automatically'] },
        ],
      },
      {
        title: 'Customers and Vendors', description: 'Managing the people you bill and pay.',
        lessons: [
          { title: 'Customer Management', points: ['Complete customer records support invoicing and reporting', 'Payment terms per customer set expectations', 'Customer statements summarize account status', 'Duplicate records corrupt history — merge them', 'Notes and attachments preserve relationship context', 'Inactive status keeps lists clean without losing data'] },
          { title: 'Vendor Management', points: ['Vendor records hold terms, tax IDs, and contacts', 'W-9 collection precedes first payment', '1099 tracking flags reportable contractor payments', 'Vendor credits apply correctly against bills', 'Preferred vendors and pricing agreements standardize spend', 'Review vendor lists for unused or duplicate entries'] },
        ],
      },
      {
        title: 'Period-End Workflow', description: 'The monthly close checklist.',
        lessons: [
          { title: 'Monthly Close Checklist', points: ['Review and categorize all bank feed items', 'Reconcile all bank and credit card accounts', 'Review A/R aging and follow up collections', 'Pay or schedule A/P by due date', 'Review uncategorized and suspense items to zero', 'Lock the period after review'] },
          { title: 'Reviewing for Accuracy', points: ['Scan P&L for misclassified expenses', 'Balance sheet oddities: negative balances, old items', 'Compare to prior month for surprises', 'Sales tax liability matches filings', 'Document adjustments with reasons', 'The close gets faster every month with discipline'] },
        ],
      },
      {
        title: 'Payroll and Sales Tax Basics', description: 'Running payroll and managing sales tax inside the books.',
        lessons: [
          { title: 'Payroll Setup and Processing', points: ['Employees vs. contractors are classified by control and independence', 'Payroll setup requires EIN, withholding forms, and pay schedule', 'Gross pay minus withholdings equals net pay', 'Employer taxes (Social Security, Medicare, unemployment) sit on top of wages', 'Payroll liabilities are tracked until deposits are made', 'Missed payroll tax deposits carry steep penalties'] },
          { title: 'Sales Tax Compliance', points: ['Sales tax is collected on behalf of the state — it is never revenue', 'Nexus determines where you must collect', 'Rates vary by jurisdiction and product type', 'Sales tax payable is a liability account, not income', 'File and remit on the assigned schedule even in zero-sales periods', 'Exemption certificates must be collected and retained'] },
        ],
      },
      {
        title: 'Final Readiness Review', description: 'Consolidated QuickBooks review and exam preparation.',
        lessons: [
          { title: 'QuickBooks Knowledge Map', points: ['Setup: settings, lists, opening balances', 'Accounts: five families, clean chart', 'Money in: estimates → invoices → payments → deposits', 'Money out: bills, expenses, vendor credits', 'Banking: feeds, matching, monthly reconciliation', 'Reports: P&L, balance sheet, aging, close checklist'] },
          { title: 'Exam-Day Strategy', points: ['Workflow-order questions dominate: estimate before invoice before payment', 'Reconciliation questions test the match-not-force principle', 'Undeposited funds logic appears frequently', 'Know which report answers which question', 'Read scenario stems for accrual vs. cash cues', 'Review missed practice questions by domain'] },
        ],
      },
    ],
    questions: [
      { domain: 'Company Setup', difficulty: 'easy', q: 'Accrual accounting records revenue when:', choices: ['Cash arrives', 'It is earned, regardless of payment timing', 'The year ends', 'An invoice prints'], answer: 1, why: 'Accrual recognizes economic events when they happen, not when cash moves.' },
      { domain: 'Company Setup', difficulty: 'medium', q: 'Why verify opening balances before entering transactions?', choices: ['It is faster', 'Errors in opening balances corrupt every report from day one', 'It is legally required weekly', 'To speed the software'], answer: 1, why: 'Starting positions anchor all future balances; wrong starts stay wrong.' },
      { domain: 'Chart of Accounts', difficulty: 'easy', q: 'Which are the five account families?', choices: ['Checking, savings, credit, cash, loans', 'Assets, liabilities, equity, income, expense', 'Sales, marketing, payroll, rent, tax', 'Debit, credit, memo, hold, post'], answer: 1, why: 'The accounting equation structures accounts into these five types.' },
      { domain: 'Chart of Accounts', difficulty: 'medium', q: 'Every bookkeeping transaction must post to:', choices: ['One account', 'At least two accounts', 'The bank only', 'Income accounts only'], answer: 1, why: 'Double-entry bookkeeping keeps debits equal to credits.' },
      { domain: 'Sales and Invoicing', difficulty: 'easy', q: 'A credit memo is used to:', choices: ['Charge more', 'Reduce what a customer owes without deleting history', 'Pay vendors', 'Reconcile banks'], answer: 1, why: 'Credit memos document reductions properly instead of erasing transactions.' },
      { domain: 'Sales and Invoicing', difficulty: 'medium', q: 'Undeposited funds exist to:', choices: ['Hide income', 'Group received payments until they are deposited at the bank together', 'Pay bills', 'Track loans'], answer: 1, why: 'Grouping receipts matches the single bank deposit line on the statement.' },
      { domain: 'Expenses and Bills', difficulty: 'easy', q: 'Entering a bill vs. paying a bill are:', choices: ['The same action', 'Two steps — recording the obligation, then settling it', 'Both optional', 'Only for large vendors'], answer: 1, why: 'Accrual workflow records the liability first and payment later.' },
      { domain: 'Expenses and Bills', difficulty: 'medium', q: 'Why attach receipts to transactions?', choices: ['It fills storage', 'Audit trail and deduction documentation', 'It speeds entry', 'To share publicly'], answer: 1, why: 'Source documents prove the expense if questioned.' },
      { domain: 'Banking and Reconciliation', difficulty: 'easy', q: 'Reconciliation succeeds when:', choices: ['All transactions are new', 'Book records match the bank statement exactly after accounting for timing items', 'The account shows profit', 'Feeds are connected'], answer: 1, why: 'The reconciliation proves the books equal the bank, adjusted for outstanding items.' },
      { domain: 'Banking and Reconciliation', difficulty: 'medium', type: 'scenario', q: 'A bank feed shows a transaction already entered manually. Adding it again would:', choices: ['Be harmless', 'Double-count it — match to the existing entry instead', 'Speed up the books', 'Fix categorization'], answer: 1, why: 'Duplicates corrupt balances; always match feed items to existing entries.' },
      { domain: 'Reports', difficulty: 'easy', q: 'Which report shows performance over a period of time?', choices: ['Balance sheet', 'Profit & loss', 'A/R aging', 'Chart of accounts'], answer: 1, why: 'The P&L covers a date range; the balance sheet is a point-in-time snapshot.' },
      { domain: 'Reports', difficulty: 'medium', q: 'Which report tells you which customers owe money and how late they are?', choices: ['P&L', 'A/R aging', 'Balance sheet', 'Sales tax liability'], answer: 1, why: 'Aging reports bucket open invoices by days outstanding.' },
      { domain: 'Customers and Vendors', difficulty: 'easy', q: 'Before paying a new contractor, collect:', choices: ['Their social media', 'A W-9 with their tax identification', 'A personal check', 'A photo ID'], answer: 1, why: 'W-9 data supports required 1099 reporting.' },
      { domain: 'Customers and Vendors', difficulty: 'medium', q: 'Duplicate customer records should be:', choices: ['Left alone', 'Merged to preserve history under one record', 'Deleted both', 'Renamed randomly'], answer: 1, why: 'Merging consolidates history; deleting destroys it.' },
      { domain: 'Period-End Workflow', difficulty: 'easy', q: 'The monthly close always includes:', choices: ['Deleting old data', 'Reconciling all bank and credit accounts', 'Changing passwords', 'Buying new software'], answer: 1, why: 'Reconciliation anchors the month\'s accuracy before reports are trusted.' },
      { domain: 'Period-End Workflow', difficulty: 'medium', q: 'Why lock a period after review?', choices: ['For fun', 'To prevent silent changes to reviewed, reported numbers', 'To speed up entry', 'To hide mistakes'], answer: 1, why: 'Period locks protect the integrity of reported results.' },
    ],
  },
  {
    id: 'track_bookkeep',
    name: 'Bookkeeping Professional Readiness',
    shortName: 'Bookkeeping',
    category: 'finance',
    weeks: 12,
    description:
      'Double-entry bookkeeping from journals to financial statements: debits and credits, adjusting entries, payroll basics, and the accounting cycle.',
    credentialFocus: 'Mapped to accounting and bookkeeping foundations competency domains',
    schoolOverview:
      'A rigorous bookkeeping foundation with journal-entry drills and reconciliation practice — readiness evidence for accounting pathways.',
    studentOverview:
      'Master the language of business: debits and credits, the accounting cycle, payroll basics, and how transactions become financial statements.',
    prerequisites: 'None. Comfort with basic arithmetic is expected.',
    alignmentNotes:
      'Mapped to accounting and bookkeeping foundations: the accounting equation, double-entry recording, the accounting cycle, adjusting entries, payroll, and financial statements.',
    domains: [
      'Accounting Equation', 'Debits and Credits', 'Journals and Ledgers', 'The Accounting Cycle',
      'Adjusting Entries', 'Payroll Basics', 'Financial Statements', 'Ethics and Controls',
    ],
    modules: [
      {
        title: 'Accounting Equation', description: 'Assets = Liabilities + Equity — the framework for everything.',
        lessons: [
          { title: 'The Equation in Action', points: ['Assets are what the business owns', 'Liabilities are what it owes', 'Equity is the residual claim of owners', 'Every transaction keeps the equation in balance', 'Revenue increases equity; expenses decrease it', 'Reading transactions as equation movements builds intuition'] },
          { title: 'Accounts and Classification', points: ['Accounts subdivide the equation into trackable buckets', 'Current vs. long-term splits by one year', 'Contra accounts reduce their parent (accumulated depreciation)', 'Owner draws differ from expenses', 'Retained earnings accumulate profits over time', 'Classification determines where items appear in reports'] },
        ],
      },
      {
        title: 'Debits and Credits', description: 'The mechanics of double-entry recording.',
        lessons: [
          { title: 'Debit and Credit Rules', points: ['Debit means left, credit means right — no more, no less', 'Assets and expenses increase with debits', 'Liabilities, equity, and revenue increase with credits', 'Every entry has equal debits and credits', 'T-accounts visualize account movements', 'DEALER mnemonics keep the rules straight'] },
          { title: 'Recording Common Transactions', points: ['Cash sale: debit cash, credit revenue', 'Sale on account: debit receivable, credit revenue', 'Paying expense: debit expense, credit cash', 'Buying equipment on credit: debit asset, credit payable', 'Owner investment: debit cash, credit equity', 'Practice entries until the rules are reflex'] },
        ],
      },
      {
        title: 'Journals and Ledgers', description: 'From source documents to posted accounts.',
        lessons: [
          { title: 'Journal Entries', points: ['Source documents (receipts, invoices) trigger entries', 'Journals record transactions chronologically', 'Each entry shows date, accounts, amounts, and explanation', 'Compound entries touch more than two accounts', 'Explanations make entries auditable later', 'Correcting entries fix errors without erasing them'] },
          { title: 'Posting to the Ledger', points: ['Posting moves journal amounts into account ledgers', 'The ledger shows each account\'s running balance', 'Trial balance lists all accounts to check equality', 'Equality proves mechanics, not correctness', 'Posting references link journal and ledger', 'Software automates posting, but the logic still matters'] },
        ],
      },
      {
        title: 'The Accounting Cycle', description: 'The repeatable monthly rhythm of the books.',
        lessons: [
          { title: 'Cycle Steps', points: ['Analyze documents and record journal entries', 'Post to the ledger', 'Prepare the unadjusted trial balance', 'Record and post adjusting entries', 'Prepare the adjusted trial balance', 'Build statements, close temporary accounts, and verify'] },
          { title: 'Cycle Discipline', points: ['Checklists make the cycle reliable', 'Cutoff rules assign transactions to the right period', 'Working papers document judgments', 'Reversing entries simplify next-period bookkeeping', 'Closing zeroes revenue and expense into equity', 'The cycle repeats identically every period'] },
        ],
      },
      {
        title: 'Adjusting Entries', description: 'Accruals, deferrals, depreciation, and estimates.',
        lessons: [
          { title: 'Accruals and Deferrals', points: ['Accrued expenses: incurred but not yet billed or paid', 'Accrued revenue: earned but not yet collected', 'Deferred revenue: collected before earned — a liability', 'Prepaid expenses: paid before used — an asset', 'Adjustments align the books with economic reality', 'Every adjustment affects one balance sheet and one income statement account'] },
          { title: 'Depreciation and Estimates', points: ['Depreciation spreads asset cost over useful life', 'Straight-line: equal expense each period', 'Accumulated depreciation is a contra-asset', 'Bad debt estimates match expense to the period of sale', 'Adjusting entries never involve cash', 'Documentation of assumptions supports every estimate'] },
        ],
      },
      {
        title: 'Payroll Basics', description: 'Wages, withholdings, and employer obligations.',
        lessons: [
          { title: 'Gross to Net', points: ['Gross pay minus withholdings equals net pay', 'Employee withholdings: income tax, Social Security, Medicare', 'Employer taxes add on top of gross pay', 'Benefits and garnishments also reduce net', 'Timesheets and authorization anchor gross pay', 'Payroll registers summarize each run'] },
          { title: 'Payroll Accounting and Compliance', points: ['Wage expense records gross; liabilities record withholdings', 'Employer remits withheld taxes on schedule', 'W-2s report annual wages to employees', 'Contractors differ from employees — misclassification is costly', 'Payroll records are retained for years', 'Late tax deposits carry penalties'] },
        ],
      },
      {
        title: 'Financial Statements', description: 'Income statement, balance sheet, and how they connect.',
        lessons: [
          { title: 'Income Statement and Balance Sheet', points: ['Income statement: revenue minus expenses over a period', 'Gross profit, operating income, net income descend the statement', 'Balance sheet: assets = liabilities + equity at a moment', 'Net income flows into equity', 'Current sections split items by one-year horizon', 'Read statements top to bottom, asking what changed and why'] },
          { title: 'Cash Flow and Statement Links', points: ['Profit is not cash — accruals and timing differ', 'Operating, investing, and financing sections explain cash', 'Statements articulate: each connects to the others', 'Ratios (margin, current ratio) standardize comparison', 'Notes disclose methods and commitments', 'Statements tell a story — read them together'] },
        ],
      },
      {
        title: 'Ethics and Controls', description: 'Honesty and safeguards in financial record-keeping.',
        lessons: [
          { title: 'Bookkeeping Ethics', points: ['Accuracy and honesty are the profession\'s foundation', 'Pressure to manipulate numbers must be refused and reported', 'Confidentiality protects client and employer data', 'Competence: know your limits and get help', 'Documentation defends honest work', 'Small "adjustments" become big frauds — never start'] },
          { title: 'Internal Controls', points: ['Separation of duties: no one person controls a transaction end-to-end', 'Approvals precede spending', 'Reconciliations verify records independently', 'Physical controls protect cash and inventory', 'Audit trails preserve history', 'Controls protect honest employees from suspicion'] },
        ],
      },
      {
        title: 'Month-End and Year-End Close', description: 'The closing process that produces trustworthy financial statements.',
        lessons: [
          { title: 'The Closing Checklist', points: ['Close follows a checklist: reconcile, adjust, review, report', 'All bank and credit card accounts reconciled before reports run', 'Adjusting entries record accruals, deferrals, and depreciation', 'Review the trial balance for anomalies before closing', 'Locking prior periods prevents silent changes', 'Document unusual items for the accountant or auditor'] },
          { title: 'Supporting the Accountant at Year-End', points: ['Year-end adds 1099 prep, asset schedules, and loan statements', 'Clean books reduce accountant fees and tax prep time', 'Record retention: keep receipts and statements per policy', 'Inventory counts and fixed asset lists are verified annually', 'Answer accountant questions with documents, not memory', 'The bookkeeper owns accuracy; the accountant owns tax and assurance'] },
        ],
      },
      {
        title: 'Final Readiness Review', description: 'Consolidated bookkeeping review and exam preparation.',
        lessons: [
          { title: 'Bookkeeping Knowledge Map', points: ['Equation: A = L + E, always balanced', 'Rules: debit/credit by account type', 'Cycle: journal → post → trial balance → adjust → statements → close', 'Adjustments: accruals, deferrals, depreciation', 'Payroll: gross to net, employer obligations', 'Statements: income, balance sheet, cash flow links'] },
          { title: 'Exam-Day Strategy', points: ['Entry questions: classify accounts first, then apply the rules', 'Adjustment questions: which period earned/incurred it?', 'Statement questions: period vs. point-in-time', 'Compute carefully — arithmetic slips cost points', 'Trial balance equality proves mechanics only', 'Review missed practice questions by domain'] },
        ],
      },
    ],
    questions: [
      { domain: 'Accounting Equation', difficulty: 'easy', q: 'The accounting equation is:', choices: ['Revenue − expenses', 'Assets = Liabilities + Equity', 'Debits = credits only in January', 'Cash = profit'], answer: 1, why: 'Assets always equal the claims on them: liabilities plus equity.' },
      { domain: 'Accounting Equation', difficulty: 'medium', q: 'Buying equipment with cash changes:', choices: ['Total assets', 'Only the composition of assets — one asset swaps for another', 'Liabilities', 'Equity'], answer: 1, why: 'Cash down, equipment up — total assets unchanged.' },
      { domain: 'Debits and Credits', difficulty: 'easy', q: 'Which accounts increase with a debit?', choices: ['Liabilities and revenue', 'Assets and expenses', 'Equity and revenue', 'Liabilities and equity'], answer: 1, why: 'Assets and expenses have debit normal balances.' },
      { domain: 'Debits and Credits', difficulty: 'medium', q: 'Recording a sale on account requires:', choices: ['Debit cash, credit revenue', 'Debit accounts receivable, credit revenue', 'Debit revenue, credit cash', 'Debit expense, credit payable'], answer: 1, why: 'No cash yet — the receivable (asset) increases, and revenue is earned.' },
      { domain: 'Journals and Ledgers', difficulty: 'easy', q: 'The trial balance checks:', choices: ['That the business is profitable', 'That total debits equal total credits', 'That taxes are filed', 'That invoices are sent'], answer: 1, why: 'It verifies mechanical equality, though not the correctness of entries.' },
      { domain: 'Journals and Ledgers', difficulty: 'medium', q: 'Errors in posted entries are corrected by:', choices: ['Erasing the original', 'A correcting entry that preserves the audit trail', 'Deleting the account', 'Restarting the ledger'], answer: 1, why: 'Audit trails require additions that offset errors, never deletion.' },
      { domain: 'The Accounting Cycle', difficulty: 'easy', q: 'Which comes first in the accounting cycle?', choices: ['Financial statements', 'Analyzing documents and recording journal entries', 'Closing entries', 'Adjusting entries'], answer: 1, why: 'Recording transactions initiates the cycle each period.' },
      { domain: 'The Accounting Cycle', difficulty: 'medium', q: 'Closing entries zero out:', choices: ['Assets', 'Temporary accounts — revenues and expenses — into equity', 'Liabilities', 'Cash'], answer: 1, why: 'Temporary accounts reset each period; permanent accounts carry forward.' },
      { domain: 'Adjusting Entries', difficulty: 'easy', q: 'Customer prepaid $1,200 for a year of service. At receipt, the business records:', choices: ['Revenue', 'A liability (deferred revenue)', 'An expense', 'Equity'], answer: 1, why: 'Unearned cash is an obligation until the service is delivered.' },
      { domain: 'Adjusting Entries', difficulty: 'medium', q: 'Straight-line depreciation spreads asset cost:', choices: ['All in year one', 'Evenly over useful life', 'Only when sold', 'Randomly'], answer: 1, why: 'Matching expense to the periods benefiting from the asset.' },
      { domain: 'Payroll Basics', difficulty: 'easy', q: 'Net pay equals:', choices: ['Gross pay plus taxes', 'Gross pay minus withholdings', 'Salary times 12', 'Hours only'], answer: 1, why: 'Withholdings (taxes, benefits) reduce gross to take-home pay.' },
      { domain: 'Payroll Basics', difficulty: 'medium', q: 'Misclassifying an employee as a contractor is risky because:', choices: ['It is cheaper anyway', 'It avoids required tax withholding and benefits obligations illegally', 'Contractors dislike it', 'It speeds payment'], answer: 1, why: 'Classification drives tax and benefit duties; misclassification triggers penalties.' },
      { domain: 'Financial Statements', difficulty: 'easy', q: 'The balance sheet shows:', choices: ['A period of performance', 'Financial position at a single moment', 'Cash only', 'Budget vs. actual'], answer: 1, why: 'Balance sheets snapshot assets, liabilities, and equity at a date.' },
      { domain: 'Financial Statements', difficulty: 'medium', q: 'Profit and cash can differ because:', choices: ['They cannot', 'Accrual recognition and timing of receipts/payments differ', 'Banks make errors', 'Reports are wrong'], answer: 1, why: 'Revenue earned ≠ cash received; expenses incurred ≠ cash paid.' },
      { domain: 'Ethics and Controls', difficulty: 'easy', q: 'Separation of duties prevents fraud by:', choices: ['Doubling staff', 'Ensuring no single person controls a transaction end-to-end', 'Rotating offices', 'Slowing payments'], answer: 1, why: 'Fraud requires both opportunity and concealment; split duties remove both.' },
      { domain: 'Ethics and Controls', difficulty: 'medium', type: 'scenario', q: 'A manager asks you to "move this expense to next quarter to hit targets." The correct response is:', choices: ['Comply — it is small', 'Refuse and report through proper channels; period manipulation is fraud', 'Quit immediately without reporting', 'Do it once only'], answer: 1, why: 'Misstating periods is financial statement fraud regardless of size.' },
    ],
  },
  {
    id: 'track_perfin',
    name: 'Personal Finance and Financial Literacy Readiness',
    shortName: 'Personal Finance',
    category: 'finance',
    weeks: 10,
    description:
      'Money skills for life and work: budgeting, banking, credit, saving, investing basics, insurance, and taxes — mapped to financial literacy competency domains.',
    credentialFocus: 'Mapped to national financial literacy–style competency domains',
    schoolOverview:
      'A complete personal finance pathway that builds decision-making skills around real paychecks, real credit, and real trade-offs — with readiness evidence per domain.',
    studentOverview:
      'Learn to budget, bank, borrow, save, and protect your money. Every lesson uses realistic numbers and decisions you will face in your first job and beyond.',
    prerequisites: 'Basic arithmetic and percentages.',
    alignmentNotes:
      'Mapped to financial literacy–style competency domains: earning, budgeting, banking, credit and debt, saving and investing, risk and insurance, and taxes.',
    domains: [
      'Earning and Income', 'Budgeting and Money Management', 'Banking and Payments', 'Credit and Debt',
      'Saving and Investing', 'Risk and Insurance', 'Taxes and Withholding', 'Financial Decisions and Consumer Skills',
    ],
    modules: [
      {
        title: 'Earning and Income', description: 'How pay works: wages, salaries, benefits, and net pay.',
        lessons: [
          { title: 'Understanding Your Paycheck', points: ['Gross pay is earnings before deductions; net pay is what you take home', 'Hourly wages vs. salary: overtime rules differ', 'Pay stubs itemize hours, rates, taxes, and deductions', 'Benefits — health insurance, retirement match — are part of total compensation', 'A 401(k) match is free money; contribute at least to the match', 'Compare job offers on total compensation, not just salary'] },
          { title: 'Careers, Education, and Earning Power', points: ['Income rises with skills, credentials, and experience', 'Compare cost of training against realistic salary gains', 'Certifications can raise pay without a four-year degree', 'Side income diversifies earnings but adds tax obligations', 'Negotiating pay compounds over a career', 'Lifelong learning protects earning power'] },
        ],
      },
      {
        title: 'Budgeting and Money Management', description: 'Building and keeping a workable budget.',
        lessons: [
          { title: 'Building a Budget', points: ['A budget is a plan that assigns every dollar a job', 'Start with net income, then list fixed and variable expenses', 'The 50/30/20 rule splits needs, wants, and savings', 'Zero-based budgeting forces intentional trade-offs', 'Budgets fail when they ignore irregular expenses like car repairs', 'Review and adjust monthly — a budget is a living document'] },
          { title: 'Tracking and Sticking to the Plan', points: ['Track spending for one month to find leaks', 'Cash envelopes and app categories both enforce limits', 'Automate savings transfers on payday', 'An emergency fund of 3–6 months of expenses is the first savings goal', 'Small recurring leaks beat big one-time splurges in damage', 'Accountability partners and apps raise follow-through'] },
        ],
      },
      {
        title: 'Banking and Payments', description: 'Accounts, fees, and payment systems.',
        lessons: [
          { title: 'Checking and Savings Accounts', points: ['Checking handles transactions; savings holds reserves and earns interest', 'Overdraft fees punish sloppy tracking — opt out or link savings', 'APY measures real interest earned; compare it when choosing accounts', 'FDIC insurance protects deposits up to $250,000 per depositor per bank', 'Online banks often pay higher interest with fewer fees', 'Reconcile your account monthly against the statement'] },
          { title: 'Payments and Transfers', points: ['Debit cards spend your money; credit cards borrow the bank’s', 'ACH transfers move money between banks in 1–3 days', 'Peer-to-peer apps are instant but hard to reverse — treat like cash', 'Wire transfers are fast, expensive, and favored by scammers', 'Autopay prevents late fees but requires monitoring', 'Never share PINs, codes, or full card numbers by text or email'] },
        ],
      },
      {
        title: 'Credit and Debt', description: 'Borrowing wisely and managing credit scores.',
        lessons: [
          { title: 'Credit Scores and Reports', points: ['A credit score summarizes how reliably you repay debt', 'Payment history and utilization drive most of the score', 'Utilization below 30% of limits supports a healthy score', 'Check reports annually at AnnualCreditReport.com', 'Errors on reports can be disputed and corrected', 'Length of history matters — keep old accounts open'] },
          { title: 'Borrowing and Repaying Debt', points: ['APR is the true annual cost of borrowing', 'Minimum payments keep you in debt for years', 'Pay high-interest debt first (avalanche) or smallest first (snowball)', 'Payday and title loans trap borrowers with extreme rates', 'Good debt finances appreciating assets; bad debt funds consumption', 'Debt-to-income ratio affects loan approvals and rates'] },
        ],
      },
      {
        title: 'Saving and Investing', description: 'Growing money over time with risk awareness.',
        lessons: [
          { title: 'Saving Strategies', points: ['Pay yourself first: automate savings before spending', 'Emergency fund first, then goals, then investing', 'Compound growth rewards starting early more than saving big', 'Savings accounts are safe but lose ground to inflation long-term', 'CDs lock money for higher rates', 'Set specific goals with amounts and dates'] },
          { title: 'Investing Fundamentals', points: ['Stocks are ownership; bonds are loans', 'Diversification spreads risk across many holdings', 'Index funds offer low-cost, diversified exposure', 'Risk and return are linked — guaranteed high returns are scams', 'Time in the market beats timing the market', 'Retirement accounts (401(k), IRA) add tax advantages'] },
        ],
      },
      {
        title: 'Risk and Insurance', description: 'Protecting income, health, and property.',
        lessons: [
          { title: 'Insurance Basics', points: ['Insurance transfers large, rare risks you cannot self-fund', 'Premiums are what you pay; deductibles are what you pay first', 'Higher deductibles lower premiums but raise out-of-pocket risk', 'Health, auto, renters, and life insurance cover different needs', 'Liability coverage protects you from harming others', 'Read exclusions — they define what is not covered'] },
          { title: 'Choosing Coverage', points: ['Match coverage to the size of the risk, not the price of the premium', 'Term life insurance is usually the right choice for income protection', 'Renters insurance is cheap and covers belongings and liability', 'Compare at least three quotes for major policies', 'Employer benefits often beat individual plans', 'Review coverage yearly as life changes'] },
        ],
      },
      {
        title: 'Taxes and Withholding', description: 'Income tax fundamentals and filing basics.',
        lessons: [
          { title: 'How Income Tax Works', points: ['The W-4 tells your employer how much to withhold', 'Federal income tax is progressive — higher slices are taxed higher', 'Marginal rate vs. effective rate: raises never reduce take-home pay', 'State taxes vary; some states have none', 'FICA funds Social Security and Medicare', 'Withholding is an estimate; filing settles the difference'] },
          { title: 'Filing and Refunds', points: ['W-2s report wages; 1099s report contractor and other income', 'The standard deduction covers most new filers', 'Credits reduce tax dollar-for-dollar; deductions reduce taxable income', 'File on time even if you cannot pay in full', 'A big refund means you overpaid all year — adjust withholding', 'Free filing options exist for most simple returns'] },
        ],
      },
      {
        title: 'Financial Decisions and Consumer Skills', description: 'Big decisions: cars, housing, and avoiding fraud.',
        lessons: [
          { title: 'Major Purchases and Housing', points: ['Total cost of ownership beats sticker price: insurance, fuel, maintenance', 'Leasing vs. buying a car trades flexibility against equity', 'Rent vs. buy depends on time horizon and local prices', 'Housing costs should stay near 30% of gross income', 'Read contracts before signing; verbal promises do not count', 'Depreciation makes new cars expensive — consider used'] },
          { title: 'Fraud and Consumer Protection', points: ['Urgency and secrecy are the hallmarks of a scam', 'No legitimate agency demands gift cards or crypto payment', 'Freeze credit to block new-account fraud', 'Check statements monthly for unauthorized charges', 'Report fraud to your bank immediately — speed limits losses', 'If it sounds too good to be true, it is'] },
        ],
      },
      {
        title: 'Money in the Workplace', description: 'Using employer benefits and workplace financial programs.',
        lessons: [
          { title: 'Employer Benefits Decoded', points: ['Open enrollment is your annual chance to adjust benefits', 'HSAs pair with high-deductible plans and offer triple tax advantages', 'FSAs are use-it-or-lose-it — estimate conservatively', 'Retirement matches are part of your pay — never leave them', 'Life and disability insurance through work is usually cheapest', 'Ask HR for the benefits summary and read it'] },
          { title: 'Paychecks to Plans', points: ['Set up direct deposit split between checking and savings', 'Increase retirement contributions with every raise', 'Use workplace financial wellness tools and counseling', 'Understand vesting schedules before leaving a job', 'Stock purchase plans can be valuable but concentrate risk', 'Benefits decisions are financial decisions'] },
        ],
      },
      {
        title: 'Final Readiness Review', description: 'Consolidated personal finance review and exam preparation.',
        lessons: [
          { title: 'Personal Finance Knowledge Map', points: ['Income: gross vs. net, total compensation', 'Budget: 50/30/20, automation, emergency fund', 'Credit: utilization, payment history, APR', 'Saving: compound growth, diversification, retirement accounts', 'Insurance: premiums, deductibles, matching coverage to risk', 'Taxes: W-4, progressive brackets, credits vs. deductions'] },
          { title: 'Exam-Day Strategy', points: ['Compute net pay and APR-style problems carefully', 'Scenario stems reward long-term, low-risk choices', 'Know the difference between saving and investing products', 'Watch for scam indicators in scenario questions', 'Vocabulary precision: deductible vs. premium vs. copay', 'Review missed practice questions by domain'] },
        ],
      },
    ],
    questions: [
      { domain: 'Earning and Income', difficulty: 'easy', q: 'Net pay is:', choices: ['Total earnings before deductions', 'Take-home pay after taxes and deductions', 'Your hourly rate', 'Annual salary'], answer: 1, why: 'Net pay is what remains after all withholdings and deductions.' },
      { domain: 'Earning and Income', difficulty: 'medium', q: 'An employer 401(k) match is best described as:', choices: ['A loan', 'Free compensation you should capture by contributing at least the matched amount', 'A tax penalty', 'A bonus taxed twice'], answer: 1, why: 'The match is additional pay available only if you contribute.' },
      { domain: 'Budgeting and Money Management', difficulty: 'easy', q: 'The first savings priority for most people is:', choices: ['Stocks', 'An emergency fund of 3–6 months of expenses', 'Vacation savings', 'Cryptocurrency'], answer: 1, why: 'An emergency fund prevents debt when surprises hit.' },
      { domain: 'Budgeting and Money Management', difficulty: 'medium', q: 'The 50/30/20 budget allocates 20% to:', choices: ['Housing', 'Wants', 'Savings and debt payoff', 'Transportation'], answer: 2, why: '50% needs, 30% wants, 20% savings and extra debt payments.' },
      { domain: 'Banking and Payments', difficulty: 'easy', q: 'FDIC insurance protects:', choices: ['Stock investments', 'Bank deposits up to $250,000 per depositor per bank', 'Credit card purchases', 'Cryptocurrency wallets'], answer: 1, why: 'FDIC covers deposit accounts, not investments.' },
      { domain: 'Banking and Payments', difficulty: 'medium', type: 'scenario', q: 'A stranger overpays you by payment app and asks you to refund the difference. You should:', choices: ['Refund immediately', 'Refuse and report — this is a classic overpayment scam', 'Keep all the money', 'Send gift cards instead'], answer: 1, why: 'The original payment is typically reversed after you refund real money.' },
      { domain: 'Credit and Debt', difficulty: 'easy', q: 'The biggest factor in a credit score is:', choices: ['Income', 'Payment history', 'Age', 'Bank balance'], answer: 1, why: 'Paying on time drives roughly a third of the score.' },
      { domain: 'Credit and Debt', difficulty: 'medium', q: 'Credit utilization means:', choices: ['How many cards you own', 'The percentage of available credit you are using', 'Your annual fees', 'Your credit age'], answer: 1, why: 'Utilization = balances ÷ limits; lower is better.' },
      { domain: 'Saving and Investing', difficulty: 'easy', q: 'Compound growth means:', choices: ['Interest only on the original deposit', 'Earning returns on both principal and prior returns', 'Doubling money monthly', 'A bank fee'], answer: 1, why: 'Compounding reinvests earnings so growth accelerates.' },
      { domain: 'Saving and Investing', difficulty: 'medium', q: 'Diversification primarily reduces:', choices: ['Taxes', 'The risk of a single holding sinking your portfolio', 'Inflation', 'Account fees'], answer: 1, why: 'Spreading holdings smooths the impact of any one failure.' },
      { domain: 'Risk and Insurance', difficulty: 'easy', q: 'A deductible is:', choices: ['The monthly premium', 'What you pay out of pocket before insurance pays', 'The policy limit', 'A tax credit'], answer: 1, why: 'Higher deductibles mean lower premiums but more initial cost.' },
      { domain: 'Risk and Insurance', difficulty: 'medium', q: 'For most young workers needing income protection, the recommended life insurance is:', choices: ['Whole life', 'Term life for the needed coverage period', 'No insurance ever', 'Credit life from the lender'], answer: 1, why: 'Term provides large coverage cheaply during the years dependents rely on your income.' },
      { domain: 'Taxes and Withholding', difficulty: 'easy', q: 'The W-4 form determines:', choices: ['Your salary', 'How much tax your employer withholds from each paycheck', 'Your credit score', 'Overtime eligibility'], answer: 1, why: 'W-4 elections drive paycheck withholding.' },
      { domain: 'Taxes and Withholding', difficulty: 'medium', q: 'A tax credit differs from a deduction because a credit:', choices: ['Reduces taxable income', 'Reduces tax owed dollar-for-dollar', 'Only applies to businesses', 'Increases withholding'], answer: 1, why: 'Credits cut the tax bill directly; deductions cut the income taxed.' },
      { domain: 'Financial Decisions and Consumer Skills', difficulty: 'easy', q: 'The strongest warning sign of a scam is:', choices: ['Polite communication', 'Pressure to act urgently and secretly', 'A written contract', 'A business address'], answer: 1, why: 'Urgency and secrecy prevent verification — the scammer’s biggest threat.' },
      { domain: 'Financial Decisions and Consumer Skills', difficulty: 'medium', type: 'scenario', q: 'A caller claiming to be from the IRS demands immediate payment by gift card. You should:', choices: ['Pay to avoid arrest', 'Hang up — real agencies never demand gift cards', 'Ask for a discount', 'Provide your SSN to verify'], answer: 1, why: 'Gift card demands are always fraud; report the attempt.' },
    ],
  },
  {
    id: 'track_excelfin',
    name: 'Spreadsheet Skills for Finance and Business',
    shortName: 'Excel for Finance',
    category: 'finance',
    weeks: 10,
    description:
      'Job-ready spreadsheet skills: formulas, functions, charts, pivot tables, financial models, and data cleanup — mapped to spreadsheet certification–style domains.',
    credentialFocus: 'Mapped to spreadsheet specialist–style competency domains (MO-200 style)',
    schoolOverview:
      'A hands-on spreadsheet pathway built around finance and business scenarios — budgets, loans, dashboards — with readiness evidence per domain.',
    studentOverview:
      'Learn the spreadsheet skills employers actually test: formulas, functions, pivot tables, charts, and clean data — practiced on realistic finance scenarios.',
    prerequisites: 'Basic computer literacy and arithmetic.',
    alignmentNotes:
      'Mapped to spreadsheet specialist–style competency domains: worksheets and workbooks, data and formulas, functions, charts, and tables — applied to finance scenarios.',
    domains: [
      'Workbook and Worksheet Management', 'Data Entry and Formatting', 'Formulas and References', 'Core Functions',
      'Financial Functions and Models', 'Tables and Pivot Analysis', 'Charts and Visualization', 'Data Cleanup and Validation',
    ],
    modules: [
      {
        title: 'Workbook and Worksheet Management', description: 'Navigating, organizing, and protecting spreadsheets.',
        lessons: [
          { title: 'Workbook Basics', points: ['Workbooks contain worksheets; worksheets are grids of cells', 'Cell references use column letter + row number (B4)', 'Name sheets clearly: data, calculations, outputs', 'Freeze panes keep headers visible while scrolling', 'Save versions before major changes', 'Keyboard shortcuts double working speed'] },
          { title: 'Organizing and Protecting Work', points: ['Separate raw data, calculations, and presentation onto different sheets', 'Protect formulas by locking cells and protecting sheets', 'Comments and notes document assumptions', 'Print areas and page setup control exported reports', 'Named ranges make formulas readable', 'Backup discipline prevents catastrophic loss'] },
        ],
      },
      {
        title: 'Data Entry and Formatting', description: 'Getting data in cleanly and making it readable.',
        lessons: [
          { title: 'Data Types and Entry', points: ['Text, numbers, and dates behave differently in formulas', 'AutoFill extends series and copies formulas', 'Paste special transposes, pastes values, or keeps formats', 'Dates are numbers under the hood — format controls display', 'Leading zeros need text formatting (ZIP codes, IDs)', 'Consistent entry conventions prevent downstream errors'] },
          { title: 'Formatting for Readability', points: ['Number formats: currency, percent, comma separators', 'Conditional formatting flags outliers automatically', 'Cell styles keep formatting consistent', 'Merge cells sparingly — they break sorting and formulas', 'Column widths and alignment make tables scannable', 'Format for the reader, not for yourself'] },
        ],
      },
      {
        title: 'Formulas and References', description: 'The core mechanics: references, operators, and order.',
        lessons: [
          { title: 'Writing Formulas', points: ['Formulas start with = and follow math order of operations', 'Relative references (A1) shift when copied', 'Absolute references ($A$1) stay fixed — use for rates and constants', 'Mixed references lock row or column only', 'Reference other sheets with SheetName!A1', 'Error values (#DIV/0!, #REF!, #VALUE!) each signal a specific problem'] },
          { title: 'Formula Auditing', points: ['Trace precedents and dependents to follow logic', 'Evaluate formula steps through complex expressions', 'F9 previews a selected part of a formula', 'Check formulas by testing with known inputs', 'Hardcoded numbers inside formulas hide assumptions — use input cells', 'Document unusual formulas with comments'] },
        ],
      },
      {
        title: 'Core Functions', description: 'SUM, AVERAGE, COUNT, IF, and lookup functions.',
        lessons: [
          { title: 'Aggregate and Logic Functions', points: ['SUM, AVERAGE, COUNT, MIN, MAX cover most aggregation', 'IF builds conditional logic: IF(test, true_value, false_value)', 'SUMIF and COUNTIF aggregate rows matching a condition', 'Nested IFs handle multiple bands; keep them shallow', 'AND/OR combine conditions', 'IFS and SWITCH simplify long conditional chains'] },
          { title: 'Lookup Functions', points: ['XLOOKUP finds a value and returns a matching column', 'VLOOKUP searches the first column and returns rightward', 'INDEX/MATCH is the flexible classic combination', 'Exact match (FALSE) vs. approximate match (TRUE) changes behavior', 'Lookup errors (#N/A) mean the key was not found — handle with IFERROR', 'Text functions (LEFT, RIGHT, MID, TRIM, CONCAT) reshape strings'] },
        ],
      },
      {
        title: 'Financial Functions and Models', description: 'Loans, interest, and simple financial models.',
        lessons: [
          { title: 'Loan and Interest Functions', points: ['PMT computes a loan payment from rate, term, and principal', 'Rate must match the payment period (annual ÷ 12 for monthly)', 'IPMT and PPMT split a payment into interest and principal', 'FV projects future value of savings', 'NPV and IRR evaluate investment cash flows', 'Build an amortization table with running balances'] },
          { title: 'Building a Simple Model', points: ['Inputs, calculations, outputs — the three-zone layout', 'Drive the model from assumption cells, not hardcoded numbers', 'Scenario testing: change inputs and watch outputs', 'Sensitivity analysis varies one assumption at a time', 'Break-even models find the volume where profit is zero', 'A good model explains itself to a stranger'] },
        ],
      },
      {
        title: 'Tables and Pivot Analysis', description: 'Structured tables and pivot tables for summarizing data.',
        lessons: [
          { title: 'Structured Tables', points: ['Convert ranges to tables for automatic formatting and formulas', 'Table formulas use column names: =SUM(Table1[Amount])', 'Tables expand automatically as rows are added', 'Sorting and filtering are built in', 'Remove duplicates cleans lists in one step', 'Total rows add quick aggregates'] },
          { title: 'Pivot Tables', points: ['Pivot tables summarize thousands of rows by dragging fields', 'Rows, columns, values, and filters define the layout', 'Group dates by month or quarter for trend views', 'Value settings switch between sum, count, average, and % of total', 'Slicers give one-click filtering', 'Refresh pivots after source data changes'] },
        ],
      },
      {
        title: 'Charts and Visualization', description: 'Choosing and building the right chart.',
        lessons: [
          { title: 'Choosing Chart Types', points: ['Line charts show trends over time', 'Column and bar charts compare categories', 'Pie charts show composition — limit to few slices', 'Scatter plots reveal relationships between two measures', 'Combo charts pair measures on two axes', 'Choose the chart that answers the question fastest'] },
          { title: 'Professional Chart Formatting', points: ['Titles state the takeaway, not just the topic', 'Label axes and include units', 'Remove chartjunk: 3D effects, heavy gridlines, legends when direct labels work', 'Color highlights the key series; grey the context', 'Start value axes at zero for honest comparisons', 'A chart should be readable in five seconds'] },
        ],
      },
      {
        title: 'Data Cleanup and Validation', description: 'Fixing messy data and preventing bad entry.',
        lessons: [
          { title: 'Cleaning Messy Data', points: ['TRIM removes stray spaces that break lookups', 'Text to Columns splits combined fields', 'Find and replace fixes systematic errors', 'Flash Fill detects patterns and fills the rest', 'Standardize categories before analysis (USA vs. U.S.A.)', 'Work on a copy — cleaning is destructive'] },
          { title: 'Data Validation and Quality', points: ['Data validation restricts entry to lists, ranges, or dates', 'Dropdown lists eliminate typos in categories', 'Input messages guide users; error alerts block bad data', 'Duplicate checks catch double entries', 'Reconcile totals against source documents', 'Data quality is a process, not a one-time fix'] },
        ],
      },
      {
        title: 'Reporting and Dashboards', description: 'Assembling analysis into decision-ready outputs.',
        lessons: [
          { title: 'Building a Dashboard Sheet', points: ['Dashboards pull KPIs into one view', 'Link dashboard cells to calculation sheets', 'Conditional formatting turns numbers into signals', 'Sparklines embed mini-trends in a cell', 'Keep the layout to one screen', 'Design for the decision the reader must make'] },
          { title: 'Presenting Numbers to Others', points: ['Round for readability — show precision only where it matters', 'Annotate anomalies before someone asks', 'State the period, source, and currency on every report', 'PDF exports freeze the layout for distribution', 'A variance column (actual vs. budget) answers the first question', 'Reports end with a recommended action'] },
        ],
      },
      {
        title: 'Final Readiness Review', description: 'Consolidated spreadsheet review and exam preparation.',
        lessons: [
          { title: 'Spreadsheet Knowledge Map', points: ['References: relative, absolute, mixed', 'Functions: IF family, SUMIF, XLOOKUP', 'Finance: PMT, FV, amortization basics', 'Tables and pivots: summarize without formulas', 'Charts: match type to question', 'Validation: control input, protect formulas'] },
          { title: 'Exam-Day Strategy', points: ['Hands-on tasks reward exact steps — practice in the real software', 'Know where commands live on the ribbon', 'Read task wording twice: format vs. formula', 'XLOOKUP/VLOOKUP questions test match mode', 'Time management: skip and return to stuck tasks', 'Review error values and what causes each'] },
        ],
      },
    ],
    questions: [
      { domain: 'Workbook and Worksheet Management', difficulty: 'easy', q: 'The cell at column B, row 4 is referenced as:', choices: ['4B', 'B4', 'B:4', 'RowB4'], answer: 1, why: 'Column letter first, then row number.' },
      { domain: 'Workbook and Worksheet Management', difficulty: 'medium', q: 'Best practice for a multi-step analysis workbook is to:', choices: ['Put everything on one sheet', 'Separate raw data, calculations, and outputs onto different sheets', 'Hide all sheets', 'Use one giant merged cell'], answer: 1, why: 'Separation prevents accidental edits and makes logic auditable.' },
      { domain: 'Data Entry and Formatting', difficulty: 'easy', q: 'ZIP codes with leading zeros should be formatted as:', choices: ['Number', 'Text', 'Currency', 'Date'], answer: 1, why: 'Number format strips leading zeros; text preserves them.' },
      { domain: 'Data Entry and Formatting', difficulty: 'medium', q: 'Conditional formatting is used to:', choices: ['Lock cells', 'Automatically format cells that meet defined conditions', 'Merge cells', 'Print headers'], answer: 1, why: 'It applies formats dynamically as data changes.' },
      { domain: 'Formulas and References', difficulty: 'easy', q: 'The reference $A$1 is:', choices: ['Relative', 'Absolute — it does not change when copied', 'Mixed', 'Invalid'], answer: 1, why: 'Dollar signs lock both column and row.' },
      { domain: 'Formulas and References', difficulty: 'medium', q: 'A #DIV/0! error means:', choices: ['Missing file', 'A formula divided by zero or an empty cell', 'Wrong font', 'Circular colors'], answer: 1, why: 'Division by an empty or zero cell triggers this error.' },
      { domain: 'Core Functions', difficulty: 'easy', q: 'SUMIF(B2:B100, ">1000", C2:C100) does what?', choices: ['Counts all rows', 'Sums column C where column B exceeds 1000', 'Averages column B', 'Deletes rows under 1000'], answer: 1, why: 'SUMIF aggregates the sum range where the criteria range matches.' },
      { domain: 'Core Functions', difficulty: 'medium', q: 'XLOOKUP with exact match returns #N/A when:', choices: ['The workbook is protected', 'The lookup value is not found in the lookup array', 'The answer is zero', 'The sheet is hidden'], answer: 1, why: '#N/A signals no match; wrap in IFERROR for a friendly fallback.' },
      { domain: 'Financial Functions and Models', difficulty: 'easy', q: 'PMT calculates:', choices: ['Annual taxes', 'The periodic payment for a loan given rate, term, and principal', 'Portfolio return', 'Depreciation'], answer: 1, why: 'PMT is the standard loan payment function.' },
      { domain: 'Financial Functions and Models', difficulty: 'medium', q: 'For monthly payments on a 6% annual rate loan, the rate argument is:', choices: ['6%', '6% ÷ 12', '6% × 12', '6'], answer: 1, why: 'Rate must match the payment period: annual rate divided by 12.' },
      { domain: 'Tables and Pivot Analysis', difficulty: 'easy', q: 'The main advantage of converting a range to a table is:', choices: ['Faster printing', 'Automatic expansion, structured references, and built-in filtering', 'Smaller file size', 'Password protection'], answer: 1, why: 'Tables grow with data and make formulas readable.' },
      { domain: 'Tables and Pivot Analysis', difficulty: 'medium', type: 'scenario', q: 'Your pivot table shows stale numbers after the source data was updated. The fix is:', choices: ['Rebuild from scratch', 'Refresh the pivot table', 'Restart the computer', 'Convert to pie chart'], answer: 1, why: 'Pivots cache their data; Refresh pulls current values.' },
      { domain: 'Charts and Visualization', difficulty: 'easy', q: 'To show a trend over 24 months, use a:', choices: ['Pie chart', 'Line chart', 'Scatter plot', 'Treemap'], answer: 1, why: 'Line charts are the standard for time-series trends.' },
      { domain: 'Charts and Visualization', difficulty: 'medium', q: 'Why start a column chart’s value axis at zero?', choices: ['It looks nicer', 'Truncated axes exaggerate differences and mislead readers', 'It prints faster', 'It is required by Excel'], answer: 1, why: 'Bar length is read proportionally; cutting the axis distorts comparison.' },
      { domain: 'Data Cleanup and Validation', difficulty: 'easy', q: 'Data validation dropdowns primarily prevent:', choices: ['Viruses', 'Inconsistent or invalid entries', 'Slow recalculation', 'File corruption'], answer: 1, why: 'Restricting input to a list eliminates typos in categories.' },
      { domain: 'Data Cleanup and Validation', difficulty: 'medium', q: 'VLOOKUP fails intermittently on what look like identical values. A likely cause is:', choices: ['Too many rows', 'Trailing spaces — clean with TRIM', 'Wrong chart type', 'Frozen panes'], answer: 1, why: 'Invisible spaces make text values unequal; TRIM fixes it.' },
    ],
  },
  {
    id: 'track_digmkt',
    name: 'Digital Marketing Fundamentals',
    shortName: 'Digital Marketing',
    category: 'marketing',
    weeks: 10,
    description:
      'The complete digital marketing toolkit: strategy, content, SEO, email, social, and measurement — mapped to digital marketing certification–style domains.',
    credentialFocus: 'Mapped to digital marketing–style competency domains',
    schoolOverview:
      'A full-funnel digital marketing pathway connecting strategy, channels, and analytics — students build campaign plans and readiness evidence per domain.',
    studentOverview:
      'Learn how brands win attention online: strategy, search, content, email, social, and analytics — with practice building real campaign plans.',
    prerequisites: 'None.',
    alignmentNotes:
      'Mapped to digital marketing–style competency domains: marketing strategy, customer journey, content, SEO, email, social, paid media, and analytics.',
    domains: [
      'Marketing Strategy and Planning', 'Customer Journey and Personas', 'Content Marketing', 'Search Engine Optimization',
      'Email Marketing', 'Social Media Marketing', 'Paid Media Fundamentals', 'Analytics and Measurement',
    ],
    modules: [
      {
        title: 'Marketing Strategy and Planning', description: 'Goals, positioning, and the marketing plan.',
        lessons: [
          { title: 'Strategy Before Tactics', points: ['Marketing goals ladder to business goals: revenue, retention, growth', 'SMART goals: specific, measurable, achievable, relevant, time-bound', 'Positioning defines who you serve and why you are different', 'The 4 Ps — product, price, place, promotion — frame the mix', 'Budget follows strategy: fund what moves the goal', 'A one-page plan beats a forty-page document nobody reads'] },
          { title: 'Understanding the Market', points: ['Segment the market by needs, not just demographics', 'Competitor analysis finds gaps you can own', 'SWOT organizes strengths, weaknesses, opportunities, threats', 'Differentiation must matter to the customer, not just to you', 'Trends in search and social data reveal demand shifts', 'Small markets won completely beat large markets skimmed'] },
        ],
      },
      {
        title: 'Customer Journey and Personas', description: 'Mapping how strangers become customers.',
        lessons: [
          { title: 'The Customer Journey', points: ['Stages: awareness, consideration, decision, retention, advocacy', 'Different stages need different content and channels', 'Map touchpoints: where customers encounter the brand', 'Friction at any stage leaks revenue', 'Post-purchase experience drives reviews and referrals', 'Journey maps align teams around the customer, not departments'] },
          { title: 'Building Personas', points: ['Personas are research-based profiles of ideal customers', 'Include goals, pains, objections, and information habits', 'Interview real customers — do not invent personas from imagination', 'One primary persona focuses messaging', 'Personas guide channel choice and tone', 'Update personas as the market changes'] },
        ],
      },
      {
        title: 'Content Marketing', description: 'Attracting customers with useful content.',
        lessons: [
          { title: 'Content Strategy', points: ['Content answers the questions buyers actually ask', 'The hub-and-spoke model: pillar pages plus supporting articles', 'A content calendar turns ideas into consistent publishing', 'Quality beats quantity — one great piece outperforms ten thin ones', 'Repurpose: one webinar becomes clips, posts, and an article', 'Content compounds — organic traffic grows while you sleep'] },
          { title: 'Writing That Works', points: ['Headlines promise a specific benefit', 'Write for scanners: short paragraphs, subheadings, bullets', 'One idea per piece; one call to action', 'Voice and tone should match the persona', 'Edit ruthlessly — cut the first paragraph and see', 'Facts and examples beat adjectives'] },
        ],
      },
      {
        title: 'Search Engine Optimization', description: 'Earning visibility in search results.',
        lessons: [
          { title: 'SEO Fundamentals', points: ['Search engines crawl, index, and rank pages', 'Keyword research finds the phrases customers actually type', 'Search intent: informational, navigational, transactional', 'Title tags and headings signal topic to engines and humans', 'Internal links distribute authority across the site', 'Rankings follow usefulness — optimize for people first'] },
          { title: 'On-Page and Technical Basics', points: ['Each page targets one primary keyword and its variations', 'Fast, mobile-friendly pages rank and convert better', 'Descriptive URLs and alt text help engines understand content', 'Backlinks from reputable sites act as votes of confidence', 'Local SEO: consistent name, address, phone everywhere', 'SEO is a long game — expect months, not days'] },
        ],
      },
      {
        title: 'Email Marketing', description: 'Building lists and campaigns that convert.',
        lessons: [
          { title: 'List Building and Permission', points: ['Permission-based lists outperform purchased lists by miles', 'Lead magnets trade value for an email address', 'Signup forms set expectations: what and how often', 'Segment lists by interest and behavior', 'Clean inactive subscribers to protect deliverability', 'Compliance (CAN-SPAM, GDPR) is not optional'] },
          { title: 'Campaigns and Automation', points: ['Subject lines earn the open; content earns the click', 'One email, one goal, one call to action', 'Welcome sequences convert new subscribers while interest is hot', 'Automations — abandoned cart, re-engagement — work while you sleep', 'A/B test subject lines and CTAs', 'Watch open, click, and conversion rates — not list size'] },
        ],
      },
      {
        title: 'Social Media Marketing', description: 'Choosing platforms and building community.',
        lessons: [
          { title: 'Platform Strategy', points: ['Go where your persona already spends time', 'Each platform has a native content style — respect it', 'Organic social builds community; paid social buys reach', 'Consistency matters more than frequency', 'Engage: reply, ask, feature customers', 'Vanity metrics (followers) matter less than engagement and traffic'] },
          { title: 'Content for Social', points: ['Short video dominates reach on most platforms', 'Educate, entertain, or inspire — rarely just promote', 'Native content beats repurposed links', 'Trends are borrowed reach — use them on-brand or not at all', 'User-generated content is trusted more than brand content', 'A simple calendar keeps posting sustainable'] },
        ],
      },
      {
        title: 'Paid Media Fundamentals', description: 'Paid search and social advertising basics.',
        lessons: [
          { title: 'How Paid Media Works', points: ['Paid search captures existing demand; paid social creates it', 'Auctions price ads on bid plus quality', 'Targeting defines who sees the ad; creative decides if they care', 'CPC, CPM, and CPA are the core cost models', 'Start small, learn fast, scale what works', 'Landing pages convert the click — ads alone do not sell'] },
          { title: 'Budgets and Optimization', points: ['Set a test budget you can afford to learn with', 'Track conversions, not just clicks', 'Kill losing ads quickly; iterate on winners', 'Frequency and fatigue degrade performance over time', 'Retargeting re-engages warm audiences cheaply', 'Report on cost per result, never on impressions'] },
        ],
      },
      {
        title: 'Analytics and Measurement', description: 'Measuring what matters and proving impact.',
        lessons: [
          { title: 'Measurement Foundations', points: ['Define KPIs before launching anything', 'UTM parameters attribute traffic to campaigns', 'Conversion tracking connects clicks to outcomes', 'Funnels show where prospects drop off', 'Attribution is imperfect — directional truth beats false precision', 'Dashboards answer questions; they do not just display data'] },
          { title: 'From Data to Decisions', points: ['Compare against benchmarks and your own history', 'Segment data before concluding — averages hide stories', 'Correlation is not causation; test when it matters', 'Weekly review: what worked, what did not, what changes', 'Reports should end in decisions, not just numbers', 'Celebrate learning, not just wins'] },
        ],
      },
      {
        title: 'Campaign Capstone', description: 'Assembling a complete campaign plan.',
        lessons: [
          { title: 'Building the Campaign Plan', points: ['Brief first: objective, audience, message, channels, budget, timeline', 'Channel selection follows persona behavior', 'Creative briefs translate strategy into assets', 'Launch checklists prevent broken links and untracked campaigns', 'Assign owners for every deliverable', 'Plan the measurement before launch'] },
          { title: 'Presenting and Iterating', points: ['Present plans around the objective, not the tactics', 'Anticipate the budget question with expected returns', 'Pilot small, prove, then scale', 'Post-campaign reviews capture lessons while fresh', 'Document playbooks from what worked', 'Iteration is the strategy — no plan survives contact unchanged'] },
        ],
      },
      {
        title: 'Final Readiness Review', description: 'Consolidated digital marketing review and exam preparation.',
        lessons: [
          { title: 'Digital Marketing Knowledge Map', points: ['Strategy: goals, positioning, personas', 'Journey: awareness to advocacy', 'Content: hub-and-spoke, calendars, repurposing', 'SEO: intent, on-page, technical basics', 'Email and social: permission, engagement, native content', 'Paid and analytics: CPC/CPA, UTMs, funnels'] },
          { title: 'Exam-Day Strategy', points: ['Match funnel stage to appropriate channel questions', 'Know metric definitions: CTR, CPC, CPA, conversion rate', 'Scenario stems reward strategy-first reasoning', 'Distinguish organic vs. paid strengths', 'Vocabulary precision: reach vs. impressions vs. engagement', 'Review missed practice questions by domain'] },
        ],
      },
    ],
    questions: [
      { domain: 'Marketing Strategy and Planning', difficulty: 'easy', q: 'A SMART marketing goal must be:', choices: ['Vague but inspiring', 'Specific, measurable, achievable, relevant, and time-bound', 'Approved by legal', 'Expensive'], answer: 1, why: 'SMART criteria make goals testable and accountable.' },
      { domain: 'Marketing Strategy and Planning', difficulty: 'medium', q: 'Positioning primarily answers:', choices: ['What the logo looks like', 'Who you serve and why customers should choose you', 'What the budget is', 'Which office to rent'], answer: 1, why: 'Positioning defines the target and the differentiated promise.' },
      { domain: 'Customer Journey and Personas', difficulty: 'easy', q: 'The customer journey stage where prospects compare options is:', choices: ['Awareness', 'Consideration', 'Advocacy', 'Retention'], answer: 1, why: 'Consideration is the evaluation stage between awareness and decision.' },
      { domain: 'Customer Journey and Personas', difficulty: 'medium', q: 'The best source for building personas is:', choices: ['Imagination', 'Interviews and data from real customers', 'Competitor websites', 'Stock photos'], answer: 1, why: 'Personas built on real evidence predict real behavior.' },
      { domain: 'Content Marketing', difficulty: 'easy', q: 'Content marketing attracts customers by:', choices: ['Interrupting them with ads', 'Answering the questions they already ask', 'Buying email lists', 'Cold calling'], answer: 1, why: 'Useful content earns attention instead of buying it.' },
      { domain: 'Content Marketing', difficulty: 'medium', q: 'The hub-and-spoke model means:', choices: ['Random posting', 'A comprehensive pillar page supported by linked articles on subtopics', 'One long video only', 'Printing brochures'], answer: 1, why: 'Pillars plus supporting content build topical authority and internal links.' },
      { domain: 'Search Engine Optimization', difficulty: 'easy', q: 'Keyword research identifies:', choices: ['Employee passwords', 'The phrases customers actually type into search engines', 'Office locations', 'Ad budgets'], answer: 1, why: 'SEO starts from real search language, not internal jargon.' },
      { domain: 'Search Engine Optimization', difficulty: 'medium', q: 'A page should target:', choices: ['As many unrelated keywords as possible', 'One primary keyword and its close variations', 'No keywords', 'Competitor brand names'], answer: 1, why: 'Focused pages match intent clearly and rank more reliably.' },
      { domain: 'Email Marketing', difficulty: 'easy', q: 'Purchased email lists perform poorly mainly because:', choices: ['They are expensive', 'Recipients never gave permission, hurting engagement and deliverability', 'The fonts are wrong', 'They are too long'], answer: 1, why: 'Without consent, opens are low and spam complaints are high.' },
      { domain: 'Email Marketing', difficulty: 'medium', q: 'The metric that best shows email content effectiveness is:', choices: ['List size', 'Click-through rate', 'Send time', 'Font size'], answer: 1, why: 'Clicks show the content motivated action, not just an open.' },
      { domain: 'Social Media Marketing', difficulty: 'easy', q: 'Choosing platforms should be based on:', choices: ['Personal preference', 'Where your target persona already spends time', 'The newest app', 'What competitors ignore'], answer: 1, why: 'Go to the audience; do not expect them to come to you.' },
      { domain: 'Social Media Marketing', difficulty: 'medium', q: 'User-generated content is valuable because:', choices: ['It is free labor', 'Audiences trust customer voices more than brand claims', 'It needs no review', 'It trends automatically'], answer: 1, why: 'Peer proof outperforms self-promotion.' },
      { domain: 'Paid Media Fundamentals', difficulty: 'easy', q: 'CPA stands for:', choices: ['Cost per acquisition', 'Clicks per ad', 'Content placement area', 'Customer purchase analysis'], answer: 0, why: 'CPA measures the cost to acquire one conversion.' },
      { domain: 'Paid Media Fundamentals', difficulty: 'medium', type: 'scenario', q: 'An ad gets many clicks but zero sales. The first place to investigate is:', choices: ['The logo', 'The landing page and conversion tracking', 'The weather', 'The font'], answer: 1, why: 'Clicks without conversions point to the page or broken tracking, not the ad.' },
      { domain: 'Analytics and Measurement', difficulty: 'easy', q: 'UTM parameters are used to:', choices: ['Speed up websites', 'Attribute traffic to specific campaigns', 'Encrypt emails', 'Design logos'], answer: 1, why: 'UTM tags tell analytics which campaign sent each visitor.' },
      { domain: 'Analytics and Measurement', difficulty: 'medium', q: 'Before launching a campaign, you should first:', choices: ['Buy ads', 'Define KPIs and set up conversion tracking', 'Design merchandise', 'Hire influencers'], answer: 1, why: 'Measurement infrastructure must exist before data arrives.' },
    ],
  },
  {
    id: 'track_gads',
    name: 'Search Advertising Readiness',
    shortName: 'Search Ads',
    category: 'marketing',
    weeks: 8,
    description:
      'Paid search from account structure to optimization: keywords, bidding, ads, quality, and measurement — mapped to search advertising certification–style domains.',
    credentialFocus: 'Mapped to search advertising certification–style domains',
    schoolOverview:
      'A focused paid search pathway covering campaign structure, keyword strategy, bidding, and optimization — with readiness evidence per domain.',
    studentOverview:
      'Learn how search ads actually work: auctions, keywords, budgets, and writing ads that convert — the same skills agencies test for.',
    prerequisites: 'Digital marketing basics helpful but not required.',
    alignmentNotes:
      'Mapped to search advertising certification–style domains: campaign structure, keywords and match types, bidding, ad copy, quality, and measurement.',
    domains: [
      'How Search Ads Work', 'Account and Campaign Structure', 'Keywords and Match Types', 'Bidding and Budgets',
      'Writing Effective Ads', 'Quality and Relevance', 'Targeting and Audiences', 'Measurement and Optimization',
    ],
    modules: [
      {
        title: 'How Search Ads Work', description: 'The auction, ad rank, and where ads appear.',
        lessons: [
          { title: 'The Search Auction', points: ['Every search triggers a real-time auction among eligible ads', 'Ad rank combines bid and quality — the highest bid does not always win', 'You pay per click, typically just above the next competitor’s rank', 'Ads appear above or beside organic results, labeled as ads', 'Eligibility requires a matching keyword, approved ad, and valid landing page', 'Relevance is the business model: engines reward useful ads'] },
          { title: 'When Search Ads Make Sense', points: ['Search captures existing intent — people actively looking', 'Best for offerings people already search for', 'Local services and e-commerce are natural fits', 'New categories may need social or display to create demand first', 'Margins must support the cost per acquisition', 'Competitor bidding raises prices — differentiation matters'] },
        ],
      },
      {
        title: 'Account and Campaign Structure', description: 'Organizing accounts for control and clarity.',
        lessons: [
          { title: 'Campaigns and Ad Groups', points: ['Account → campaigns → ad groups → keywords and ads', 'Campaigns hold budget, location, and network settings', 'Ad groups cluster tightly related keywords with matching ads', 'Structure mirrors how you want to budget and report', 'One theme per ad group keeps ads relevant', 'Messy structure makes optimization impossible'] },
          { title: 'Settings That Matter', points: ['Location targeting limits ads to serviceable areas', 'Ad schedule aligns spend with business hours or peak times', 'Device bid adjustments reflect conversion differences', 'Search network vs. display network behave differently — separate them', 'Language targeting follows the customer, not the location', 'Start conservative; loosen settings with data'] },
        ],
      },
      {
        title: 'Keywords and Match Types', description: 'Choosing and controlling what triggers your ads.',
        lessons: [
          { title: 'Keyword Research for Ads', points: ['Start from the customer’s language, not your product names', 'Tools estimate volume and competition for each term', 'High-intent keywords (buy, near me, pricing) convert best', 'Long-tail keywords are cheaper and more specific', 'Group keywords by intent and theme', 'Competitor terms are allowed but convert differently'] },
          { title: 'Match Types and Negative Keywords', points: ['Broad match maximizes reach with loose matching', 'Phrase match keeps the meaning of the query', 'Exact match targets the specific term and close variants', 'Negative keywords block irrelevant traffic — the cheapest optimization', 'Search terms reports reveal what actually triggered ads', 'Review and prune search terms weekly'] },
        ],
      },
      {
        title: 'Bidding and Budgets', description: 'Controlling spend and choosing bid strategies.',
        lessons: [
          { title: 'Budget Fundamentals', points: ['Daily budgets cap spend at the campaign level', 'Expected daily spend can flex, monthly totals hold', 'Start with a test budget sized to generate statistically useful data', 'Shared budgets pool spend across campaigns', 'Underfunded campaigns starve learning', 'Budget follows performance — shift money to what converts'] },
          { title: 'Bid Strategies', points: ['Manual CPC gives full control for small accounts', 'Automated strategies (maximize conversions, target CPA) optimize toward goals', 'Automation needs conversion tracking and enough data to learn', 'Target ROAS optimizes for revenue value', 'Change strategies gradually — abrupt swings destabilize learning', 'Bid strategy serves the goal; define the goal first'] },
        ],
      },
      {
        title: 'Writing Effective Ads', description: 'Responsive search ads and copy that converts.',
        lessons: [
          { title: 'Responsive Search Ads', points: ['Provide multiple headlines and descriptions; the system tests combinations', 'Include the keyword theme in headlines', 'Lead with benefits, support with features', 'Pin critical elements (like disclaimers) when required', 'Variety in angles — price, trust, speed — lets the system learn', 'Assets (sitelinks, callouts) expand your ad’s footprint'] },
          { title: 'Copy Principles', points: ['Match the ad to the search intent — answer the query', 'Specific numbers beat vague claims', 'A clear call to action tells the clicker what happens next', 'Display paths reinforce relevance', 'Mirror the landing page promise', 'Test one variable at a time to learn what works'] },
        ],
      },
      {
        title: 'Quality and Relevance', description: 'Quality Score and the relevance chain.',
        lessons: [
          { title: 'Quality Score', points: ['Quality Score grades expected CTR, ad relevance, and landing page experience', 'Higher quality lowers cost per click and improves position', 'It is diagnostic — fix the components, not the number', 'Expected CTR improves with compelling, relevant ads', 'Ad relevance improves with tight keyword-to-ad matching', 'Landing experience rewards speed, mobile-friendliness, and honest content'] },
          { title: 'The Relevance Chain', points: ['Query → keyword → ad → landing page must tell one continuous story', 'Mismatches leak money: clicks without conversions', 'Ad groups exist to preserve this chain at scale', 'Message match on the landing page headline reassures clickers', 'Review the chain for your top spending keywords first', 'Relevance is respect for the searcher’s time'] },
        ],
      },
      {
        title: 'Targeting and Audiences', description: 'Layering audience signals onto keywords.',
        lessons: [
          { title: 'Audience Layers', points: ['Remarketing lists re-engage past visitors', 'In-market audiences signal active research', 'Observation mode collects data without restricting reach', 'Bid adjustments raise or lower bids per audience', 'Customer match uploads first-party lists', 'Audiences refine keywords — they rarely replace them in search'] },
          { title: 'Location and Demographic Control', points: ['Geo performance varies — bid by what converts', 'Exclude locations you cannot serve', 'Demographic data can inform bids even when not targeted', 'Store visits and call extensions matter for local businesses', 'Time-of-day patterns reveal when buyers search', 'Segment reports before making exclusions'] },
        ],
      },
      {
        title: 'Measurement and Optimization', description: 'Tracking conversions and improving performance.',
        lessons: [
          { title: 'Conversion Tracking', points: ['Define conversions that matter: purchases, leads, calls', 'Install tracking before spending — data cannot be recovered retroactively', 'Primary conversions drive bidding; secondary ones inform', 'Attribution models assign credit across touchpoints', 'Call and offline conversions can be imported', 'If it is not tracked, it did not happen'] },
          { title: 'The Optimization Routine', points: ['Weekly: search terms, negatives, budget pacing', 'Monthly: ad copy tests, bid strategy review, auction insights', 'Impression share shows how much available visibility you capture', 'Pause losers, iterate on winners', 'Document changes so results are interpretable', 'Optimization is a loop: measure, hypothesize, test, repeat'] },
        ],
      },
      {
        title: 'Campaign Build Lab', description: 'A guided end-to-end campaign build.',
        lessons: [
          { title: 'Planning the Build', points: ['Start from the business goal and target CPA', 'Keyword list grouped into tight themes', 'Draft ads per ad group before touching the platform', 'Landing pages confirmed for every ad group', 'Tracking tested with a real conversion', 'Naming conventions keep accounts navigable'] },
          { title: 'Launch and First Month', points: ['Launch with conservative bids and watch search terms daily', 'Add negatives aggressively in week one', 'Do not judge performance before enough clicks accumulate', 'Weeks two to four: reallocate budget toward converting ad groups', 'Keep a change log', 'End of month: report results against the original goal'] },
        ],
      },
      {
        title: 'Final Readiness Review', description: 'Consolidated search advertising review and exam preparation.',
        lessons: [
          { title: 'Search Ads Knowledge Map', points: ['Auction: bid × quality determines rank', 'Structure: campaigns hold settings; ad groups hold themes', 'Keywords: match types control reach; negatives block waste', 'Bidding: manual vs. automated, goals first', 'Ads: responsive formats, relevance chain', 'Measurement: conversions, impression share, optimization loop'] },
          { title: 'Exam-Day Strategy', points: ['Ad rank questions combine bid and quality — memorize the logic', 'Match type scenarios test reach vs. control trade-offs', 'Quality Score components: CTR, relevance, landing experience', 'Budget questions favor reallocating to proven performance', 'Vocabulary precision: CPC vs. CPA vs. ROAS', 'Review missed practice questions by domain'] },
        ],
      },
    ],
    questions: [
      { domain: 'How Search Ads Work', difficulty: 'easy', q: 'In the search ad auction, ad rank is determined by:', choices: ['Bid alone', 'Bid combined with quality factors', 'Account age', 'Company size'], answer: 1, why: 'Ad rank blends bid with expected CTR, relevance, and landing experience.' },
      { domain: 'How Search Ads Work', difficulty: 'medium', q: 'Search advertising works best when:', choices: ['Nobody has heard of the category', 'People are already searching for what you offer', 'You want brand awareness only', 'The product has no margins'], answer: 1, why: 'Search captures existing intent rather than creating it.' },
      { domain: 'Account and Campaign Structure', difficulty: 'easy', q: 'Budgets are set at which level?', choices: ['Keyword', 'Campaign', 'Ad', 'Account'], answer: 1, why: 'Campaigns own daily budget and network/location settings.' },
      { domain: 'Account and Campaign Structure', difficulty: 'medium', q: 'Ad groups should be organized around:', choices: ['Random keywords', 'Tightly related keyword themes with matching ads', 'Alphabetical order', 'One keyword per account'], answer: 1, why: 'Tight themes preserve the keyword-to-ad relevance chain.' },
      { domain: 'Keywords and Match Types', difficulty: 'easy', q: 'Negative keywords are used to:', choices: ['Rank higher', 'Block irrelevant searches from triggering ads', 'Write ads faster', 'Lower quality scores'], answer: 1, why: 'Negatives stop wasted spend on queries that will never convert.' },
      { domain: 'Keywords and Match Types', difficulty: 'medium', q: 'The search terms report shows:', choices: ['Your ads’ headlines', 'The actual queries that triggered your ads', 'Competitor budgets', 'Keyword ideas only'], answer: 1, why: 'It reveals real matching behavior — the source for negatives and new keywords.' },
      { domain: 'Bidding and Budgets', difficulty: 'easy', q: 'Automated bid strategies require:', choices: ['Nothing', 'Conversion tracking and sufficient conversion data', 'A designer', 'Daily budgets over $1,000'], answer: 1, why: 'Automation optimizes toward conversions it can observe.' },
      { domain: 'Bidding and Budgets', difficulty: 'medium', type: 'scenario', q: 'One campaign converts at half the CPA of another but is limited by budget. The best move is:', choices: ['Raise all budgets equally', 'Shift budget toward the efficient campaign', 'Pause the efficient campaign', 'Change the logo'], answer: 1, why: 'Budget follows performance toward the overall goal.' },
      { domain: 'Writing Effective Ads', difficulty: 'easy', q: 'Responsive search ads work by:', choices: ['Showing one fixed headline', 'Combining multiple provided headlines and descriptions and testing combinations', 'Sending emails', 'Posting to social media'], answer: 1, why: 'The system assembles and learns the best-performing combinations.' },
      { domain: 'Writing Effective Ads', difficulty: 'medium', q: 'The most important copy principle for search ads is:', choices: ['Use all caps', 'Match the ad to the searcher’s intent', 'Hide the price always', 'Use maximum characters'], answer: 1, why: 'Intent match drives both quality and conversion.' },
      { domain: 'Quality and Relevance', difficulty: 'easy', q: 'Quality Score’s three components are:', choices: ['Budget, bid, brand', 'Expected CTR, ad relevance, landing page experience', 'Age, size, color', 'Clicks, cost, conversions'], answer: 1, why: 'These are the documented quality components.' },
      { domain: 'Quality and Relevance', difficulty: 'medium', q: 'Improving Quality Score generally causes:', choices: ['Higher CPCs', 'Lower CPCs and better positions', 'Fewer impressions always', 'Account suspension'], answer: 1, why: 'Quality discounts the price of a given rank.' },
      { domain: 'Targeting and Audiences', difficulty: 'easy', q: 'Observation mode for audiences:', choices: ['Restricts ads to that audience', 'Collects performance data without restricting reach', 'Pauses the campaign', 'Changes the budget'], answer: 1, why: 'Observation lets you learn before committing bid changes.' },
      { domain: 'Targeting and Audiences', difficulty: 'medium', q: 'Remarketing lists for search ads allow you to:', choices: ['Email past customers', 'Adjust bids or ads for people who previously visited your site', 'Block competitors', 'Skip auctions'], answer: 1, why: 'Past visitors are warmer; treat their clicks accordingly.' },
      { domain: 'Measurement and Optimization', difficulty: 'easy', q: 'Conversion tracking should be installed:', choices: ['After the first month', 'Before spending begins', 'Only for large budgets', 'Never'], answer: 1, why: 'Historical data cannot be recovered without prior tracking.' },
      { domain: 'Measurement and Optimization', difficulty: 'medium', q: 'Impression share tells you:', choices: ['Your profit margin', 'The percentage of eligible impressions your ads actually received', 'Your click-through rate', 'Your follower count'], answer: 1, why: 'It shows lost visibility from budget or rank.' },
    ],
  },
  {
    id: 'track_ganalytics',
    name: 'Marketing Analytics Readiness',
    shortName: 'Marketing Analytics',
    category: 'marketing',
    weeks: 8,
    description:
      'Web and marketing analytics: events, conversions, reports, funnels, and attribution — mapped to digital analytics certification–style domains.',
    credentialFocus: 'Mapped to digital analytics certification–style domains (GA4 style)',
    schoolOverview:
      'A practical analytics pathway: students learn to instrument, read, and report marketing data — with readiness evidence per domain.',
    studentOverview:
      'Learn to answer the questions every marketing team asks: where do visitors come from, what do they do, and what makes them convert.',
    prerequisites: 'Digital marketing basics helpful but not required.',
    alignmentNotes:
      'Mapped to digital analytics certification–style domains: measurement planning, data collection, events and conversions, reporting, funnels, and attribution.',
    domains: [
      'Measurement Strategy', 'Data Collection and Setup', 'Events and Conversions', 'Reports and Exploration',
      'Audience and Acquisition Analysis', 'Funnels and Behavior', 'Attribution Basics', 'Communicating Insights',
    ],
    modules: [
      {
        title: 'Measurement Strategy', description: 'Deciding what to measure before touching tools.',
        lessons: [
          { title: 'From Business Goals to KPIs', points: ['Measurement starts with business questions, not dashboards', 'KPIs are the few numbers tied directly to objectives', 'Supporting metrics explain KPI movement', 'A measurement plan documents events, owners, and definitions', 'Define success thresholds before launch', 'If everything is a KPI, nothing is'] },
          { title: 'Metrics vs. Dimensions', points: ['Metrics are numbers: sessions, conversions, revenue', 'Dimensions are labels: source, device, page', 'Every report combines metrics sliced by dimensions', 'Rates beat raw counts for comparison', 'Ratios like conversion rate normalize volume differences', 'Choosing the right denominator is half the analysis'] },
        ],
      },
      {
        title: 'Data Collection and Setup', description: 'How analytics data is captured and configured.',
        lessons: [
          { title: 'How Collection Works', points: ['A tag on each page or screen sends events to the platform', 'Page views, scrolls, and clicks can be collected automatically', 'Consent settings control what may be collected', 'Data streams separate web and app collection', 'Filters exclude internal and bot traffic', 'Data retention settings govern how long detail is kept'] },
          { title: 'Account Structure and Governance', points: ['Account → property → data stream mirrors organization needs', 'Access levels: administrator, editor, analyst, viewer', 'Naming conventions keep events interpretable', 'Document what each event and parameter means', 'Change control prevents silent measurement breaks', 'Privacy review is part of setup, not an afterthought'] },
        ],
      },
      {
        title: 'Events and Conversions', description: 'The building blocks of behavioral measurement.',
        lessons: [
          { title: 'Events and Parameters', points: ['Events are interactions: page_view, click, sign_up, purchase', 'Parameters add context: item, value, method', 'Recommended event names keep reporting consistent', 'Custom events fill gaps automatic collection misses', 'Test events in debug views before trusting them', 'Collect only what you will actually use'] },
          { title: 'Defining Conversions', points: ['Key events (conversions) mark the actions that matter', 'Purchases, leads, and signups are typical conversions', 'Assign values to conversions to enable ROI analysis', 'Micro-conversions (video views, scrolls) diagnose the journey', 'Too many conversions dilute focus — keep the list short', 'Align conversion definitions with the ad platforms'] },
        ],
      },
      {
        title: 'Reports and Exploration', description: 'Reading standard reports and building custom analyses.',
        lessons: [
          { title: 'Standard Reports', points: ['Acquisition reports show where users come from', 'Engagement reports show what users do', 'Monetization reports track revenue events', 'Retention reports show whether users return', 'Date comparisons reveal trends and campaign effects', 'Real-time reports verify tracking, not performance'] },
          { title: 'Custom Explorations', points: ['Explorations allow drag-and-drop custom analysis', 'Segments isolate groups: new users, mobile, campaign traffic', 'Filters focus the data; segments compare groups', 'Breakdowns by dimension answer "which one" questions', 'Save and share analyses with clear names', 'Every exploration should answer a stated question'] },
        ],
      },
      {
        title: 'Audience and Acquisition Analysis', description: 'Understanding who visits and how they arrive.',
        lessons: [
          { title: 'Channel and Source Analysis', points: ['Default channel groups: organic, paid, direct, referral, social, email', 'Source/medium gives the precise origin (google / organic)', 'UTM tags attribute campaigns accurately', 'Direct traffic often hides untagged campaigns', 'Compare channels on conversion quality, not just volume', 'New vs. returning splits reveal growth vs. loyalty'] },
          { title: 'Demographics and Technology', points: ['Device splits expose mobile experience problems', 'Geography informs localization and ad targeting', 'Browser and OS data guide technical priorities', 'Audience interests are modeled — treat as directional', 'Small sample sizes make detailed slices unreliable', 'Watch for bot and spam referral artifacts'] },
        ],
      },
      {
        title: 'Funnels and Behavior', description: 'Following users through multi-step journeys.',
        lessons: [
          { title: 'Funnel Analysis', points: ['Funnels count users completing ordered steps', 'Drop-off between steps locates friction', 'Segment funnels to find who struggles', 'Open vs. closed funnels differ in entry rules', 'Small UX fixes at the biggest drop-off pay best', 'Funnels measure what happens, not why — pair with qualitative data'] },
          { title: 'Path and Behavior Analysis', points: ['Path exploration shows actual navigation sequences', 'Landing pages shape first impressions and bounce risk', 'Engagement rate replaces bounce rate as the quality signal', 'Scroll depth indicates content consumption', 'Internal search terms reveal unmet needs', 'Behavior data prioritizes content and UX work'] },
        ],
      },
      {
        title: 'Attribution Basics', description: 'Assigning credit across touchpoints.',
        lessons: [
          { title: 'Attribution Models', points: ['Last click gives all credit to the final touchpoint', 'Data-driven attribution distributes credit by measured contribution', 'First click credits the discovery touch', 'Position-based splits credit between first and last', 'No model is "true" — each answers a different question', 'Compare models before cutting upper-funnel spend'] },
          { title: 'Attribution in Practice', points: ['Cross-device journeys blur any model', 'Offline and word-of-mouth remain invisible', 'Triangulate: analytics, surveys, and experiments together', 'Branded search often harvests demand created elsewhere', 'Report model choice alongside results', 'Directional confidence beats false precision'] },
        ],
      },
      {
        title: 'Communicating Insights', description: 'Turning analysis into decisions people act on.',
        lessons: [
          { title: 'Reporting That Gets Read', points: ['Lead with the answer, then show evidence', 'One page for executives; detail in appendix', 'Annotate launches, campaigns, and anomalies', 'Trends matter more than point values', 'Every report ends in a recommended action', 'Automate recurring reports to spend time analyzing'] },
          { title: 'Data Storytelling', points: ['Context turns numbers into meaning: vs. goal, vs. last period', 'Charts chosen for the question, not the tool default', 'Name the decision the data informs', 'Acknowledge uncertainty and sample limits', 'Tie insights to money whenever possible', 'The best analysis is the one that changes a decision'] },
        ],
      },
      {
        title: 'Analytics Audit Lab', description: 'A guided review of a complete analytics setup.',
        lessons: [
          { title: 'Auditing a Property', points: ['Verify base tag fires on every page', 'Check internal traffic filters and bot exclusions', 'Review event names against the measurement plan', 'Confirm conversions fire once per action', 'Test purchase values and parameters', 'Document gaps and prioritize fixes'] },
          { title: 'Delivering the Audit', points: ['Findings ordered by impact, not by discovery order', 'Each issue: what, why it matters, how to fix', 'Screenshots prove the problem', 'Quick wins first, structural fixes scheduled', 'Re-audit after fixes to confirm', 'An audit is a service to future decisions'] },
        ],
      },
      {
        title: 'Final Readiness Review', description: 'Consolidated analytics review and exam preparation.',
        lessons: [
          { title: 'Analytics Knowledge Map', points: ['Strategy: KPIs, metrics vs. dimensions', 'Collection: tags, events, parameters, consent', 'Conversions: key events, values, micro-conversions', 'Reports: acquisition, engagement, retention', 'Funnels: steps, drop-off, segmentation', 'Attribution: models, limits, triangulation'] },
          { title: 'Exam-Day Strategy', points: ['Know what each standard report answers', 'Event vs. conversion vs. parameter distinctions are heavily tested', 'Attribution model scenarios: match model to question', 'Channel grouping definitions (source/medium) appear often', 'Vocabulary precision: users vs. sessions vs. engaged sessions', 'Review missed practice questions by domain'] },
        ],
      },
    ],
    questions: [
      { domain: 'Measurement Strategy', difficulty: 'easy', q: 'A KPI is:', choices: ['Any number in a dashboard', 'A metric tied directly to a business objective', 'A type of chart', 'A software license'], answer: 1, why: 'KPIs are the few measures that define success.' },
      { domain: 'Measurement Strategy', difficulty: 'medium', q: '“Country” and “Device” are examples of:', choices: ['Metrics', 'Dimensions', 'Conversions', 'Filters'], answer: 1, why: 'Dimensions are descriptive labels; metrics are countable numbers.' },
      { domain: 'Data Collection and Setup', difficulty: 'easy', q: 'Analytics data is collected primarily by:', choices: ['Surveys', 'A tag on pages that sends events to the platform', 'Phone calls', 'Spreadsheets'], answer: 1, why: 'The measurement tag fires events on each page or screen.' },
      { domain: 'Data Collection and Setup', difficulty: 'medium', q: 'Internal traffic filters exist to:', choices: ['Speed up the site', 'Prevent employee visits from polluting analytics data', 'Block competitors', 'Reduce hosting costs'], answer: 1, why: 'Internal activity distorts behavior metrics if not excluded.' },
      { domain: 'Events and Conversions', difficulty: 'easy', q: 'An event represents:', choices: ['A holiday sale', 'A single measured interaction like a page view or click', 'A budget meeting', 'An ad campaign'], answer: 1, why: 'Events are the atomic units of behavioral data.' },
      { domain: 'Events and Conversions', difficulty: 'medium', q: 'Parameters attached to events provide:', choices: ['Security', 'Context such as item name or value', 'Faster loading', 'Legal compliance'], answer: 1, why: 'Parameters describe the event’s details for analysis.' },
      { domain: 'Reports and Exploration', difficulty: 'easy', q: 'Acquisition reports primarily answer:', choices: ['What users bought last year', 'Where users come from', 'Server uptime', 'Employee performance'], answer: 1, why: 'Acquisition covers traffic sources and channels.' },
      { domain: 'Reports and Exploration', difficulty: 'medium', q: 'Segments differ from filters because segments:', choices: ['Delete data', 'Compare groups within the same analysis without removing data', 'Only work on mobile', 'Cost extra'], answer: 1, why: 'Segments isolate and compare populations; filters narrow the dataset.' },
      { domain: 'Audience and Acquisition Analysis', difficulty: 'easy', q: '“google / organic” describes:', choices: ['A paid campaign', 'Source and medium — traffic from unpaid Google search', 'A browser plugin', 'An email list'], answer: 1, why: 'Source/medium precisely identifies the traffic origin.' },
      { domain: 'Audience and Acquisition Analysis', difficulty: 'medium', type: 'scenario', q: 'A campaign’s traffic shows up as “direct” instead of its channel. The likely cause is:', choices: ['Too many visitors', 'Missing UTM parameters on campaign links', 'Slow servers', 'Ad blockers'], answer: 1, why: 'Untagged links lose their source and fall into direct.' },
      { domain: 'Funnels and Behavior', difficulty: 'easy', q: 'Funnel analysis is used to:', choices: ['Choose fonts', 'Find where users drop out of a multi-step process', 'Send emails', 'Buy ads'], answer: 1, why: 'Step-by-step completion exposes friction points.' },
      { domain: 'Funnels and Behavior', difficulty: 'medium', q: 'Engagement rate measures:', choices: ['Ad clicks only', 'The share of sessions that were meaningfully engaged', 'Email opens', 'Server speed'], answer: 1, why: 'Engaged sessions last beyond thresholds or include conversions/views.' },
      { domain: 'Attribution Basics', difficulty: 'easy', q: 'Last-click attribution assigns conversion credit to:', choices: ['The first touchpoint', 'The final touchpoint before conversion', 'All touchpoints equally', 'The most expensive channel'], answer: 1, why: 'It credits only the last interaction.' },
      { domain: 'Attribution Basics', difficulty: 'medium', q: 'The safest way to treat attribution results is:', choices: ['As exact truth', 'As directional, triangulated with experiments and other evidence', 'Ignore them entirely', 'As legal proof'], answer: 1, why: 'All models simplify messy journeys; corroborate before big budget shifts.' },
      { domain: 'Communicating Insights', difficulty: 'easy', q: 'An effective analytics report should end with:', choices: ['More charts', 'A recommended action', 'A password', 'Raw data dumps'], answer: 1, why: 'Analysis exists to inform decisions.' },
      { domain: 'Communicating Insights', difficulty: 'medium', q: 'Annotating campaigns and site changes on reports matters because:', choices: ['It looks professional', 'It lets readers interpret spikes and drops correctly', 'It is required by law', 'It speeds up loading'], answer: 1, why: 'Context prevents misreading cause and effect.' },
    ],
  },
  {
    id: 'track_adobe',
    name: 'Visual Design for Marketing',
    shortName: 'Visual Design',
    category: 'marketing',
    weeks: 10,
    description:
      'Design fundamentals for marketers: layout, typography, color, imagery, branding, and export for print and digital — mapped to visual design certification–style domains.',
    credentialFocus: 'Mapped to visual design certification–style domains',
    schoolOverview:
      'A project-based visual design pathway where students produce campaign-ready assets — with readiness evidence per domain.',
    studentOverview:
      'Learn to design like a professional: layout, type, color, and brand consistency — building real marketing assets as you go.',
    prerequisites: 'Basic computer skills.',
    alignmentNotes:
      'Mapped to visual design certification–style domains: design principles, typography, color, imagery, layout, branding, and production for print and digital.',
    domains: [
      'Design Principles and Purpose', 'Layout and Composition', 'Typography', 'Color Theory',
      'Imagery and Graphics', 'Branding and Identity', 'Design for Digital Channels', 'Print and Production Basics',
    ],
    modules: [
      {
        title: 'Design Principles and Purpose', description: 'Why design exists: communication before decoration.',
        lessons: [
          { title: 'Design with Intent', points: ['Every design answers: who is this for, and what should they do?', 'Contrast, repetition, alignment, proximity — the four working principles', 'Good design is invisible; confusion is visible', 'Constraints (size, brand, budget) shape solutions', 'Design is judged by results, not by effort', 'Start every project with the brief, not the canvas'] },
          { title: 'Reading a Creative Brief', points: ['Objective: the single thing this asset must achieve', 'Audience: their context, not just demographics', 'Message hierarchy: what they must remember if nothing else', 'Mandatories: logo, legal lines, brand colors', 'Deliverables and specs: sizes, formats, deadlines', 'Ask questions before designing — rework is expensive'] },
        ],
      },
      {
        title: 'Layout and Composition', description: 'Grids, hierarchy, and white space.',
        lessons: [
          { title: 'Grids and Alignment', points: ['Grids create order and speed up decisions', 'Margins frame the content; gutters separate columns', 'Alignment creates invisible connections between elements', 'Break the grid deliberately, never accidentally', 'Consistent spacing scales (8pt systems) look professional', 'Squint test: structure should read even blurred'] },
          { title: 'Hierarchy and White Space', points: ['Size, weight, and color signal importance', 'One dominant element per layout', 'White space is a design element, not empty waste', 'The eye follows Z or F patterns — place key content accordingly', 'Group related items; separate unrelated ones', 'If everything shouts, nothing is heard'] },
        ],
      },
      {
        title: 'Typography', description: 'Choosing and setting type that communicates.',
        lessons: [
          { title: 'Type Fundamentals', points: ['Serif, sans-serif, script, display — know their voices', 'Two typefaces per project is usually enough', 'Hierarchy: headline, subhead, body, caption', 'Body text: 9–12pt print, 16px+ digital, comfortable line length (45–75 characters)', 'Line spacing (leading) affects readability more than font choice', 'Never stretch or letterspace lowercase body text'] },
          { title: 'Pairing and Practical Rules', points: ['Pair contrast: serif headline with sans body, or vice versa', 'Weights within one family can build a whole system', 'All caps for short labels only', 'Left-align body text; justify sparingly', 'Check legibility at final size, not zoomed in', 'Licensing matters — use fonts you may legally embed'] },
        ],
      },
      {
        title: 'Color Theory', description: 'Color systems, psychology, and accessibility.',
        lessons: [
          { title: 'Working with Color', points: ['RGB for screens, CMYK for print', 'The 60-30-10 rule balances dominant, secondary, accent', 'Complementary colors create energy; analogous create calm', 'Tints, shades, and tones extend one hue into a palette', 'Brand colors come first; build palettes around them', 'Limit the palette — restraint reads as premium'] },
          { title: 'Color and Accessibility', points: ['Contrast ratios: 4.5:1 for body text, 3:1 for large text', 'Never encode meaning in color alone', 'Test designs in grayscale', 'Color-blind simulators reveal confusion pairs', 'Warm colors advance; cool colors recede', 'Cultural color meanings differ — know the audience'] },
        ],
      },
      {
        title: 'Imagery and Graphics', description: 'Photos, icons, and illustrations that earn their place.',
        lessons: [
          { title: 'Choosing Images', points: ['Images must serve the message, not fill space', 'Authentic beats stocky — real people, real contexts', 'Resolution: 72ppi screens, 300ppi print', 'Crop for focus — remove what adds nothing', 'Consistent treatment (color grade, style) unifies a campaign', 'Rights and licenses: use only what you may use'] },
          { title: 'Icons and Simple Graphics', points: ['Icons speed scanning — use a consistent family', 'Stroke weights and corner radii should match across a set', 'Charts simplify: one message per graphic', 'Logos need clear space and minimum sizes', 'Vector for logos and icons; raster for photos', 'Every graphic needs alt text in digital use'] },
        ],
      },
      {
        title: 'Branding and Identity', description: 'Applying brand systems consistently.',
        lessons: [
          { title: 'Brand Systems', points: ['A brand is the sum of every touchpoint, not just a logo', 'Style guides define logo use, colors, type, and voice', 'Consistency compounds: repetition builds recognition', 'Co-branding rules govern partner logo placement', 'Templates keep non-designers on-brand', 'Audit assets quarterly against the guide'] },
          { title: 'Campaign Consistency', points: ['A campaign is a system: same idea, many formats', 'Key visuals adapt across sizes without losing identity', 'Tone of voice is a design decision too', 'Test the smallest format first — if it works there, it works anywhere', 'Version control prevents outdated assets shipping', 'Archive final files where the team can find them'] },
        ],
      },
      {
        title: 'Design for Digital Channels', description: 'Social, display, email, and web assets.',
        lessons: [
          { title: 'Social and Display Specs', points: ['Each platform has native sizes — design to the placement', 'Safe zones keep text clear of interface overlays', 'Motion and static versions serve different placements', 'Thumb-stopping happens in the first second', 'Text on image: keep under 20% for readability and reach', 'Export sRGB, compressed but crisp'] },
          { title: 'Email and Web Assets', points: ['Email width: ~600px standard, single column works everywhere', 'Bulletproof buttons survive image blocking', 'Web banners: clear hierarchy in under two seconds', 'Hero images need contrast-safe text zones', 'File weight affects load and conversions', 'Dark mode testing is now standard'] },
        ],
      },
      {
        title: 'Print and Production Basics', description: 'Preparing files that print correctly.',
        lessons: [
          { title: 'Print Essentials', points: ['Bleed extends artwork past the trim line (typically 3mm/0.125in)', 'CMYK color and 300ppi resolution are the print baseline', 'Rich black vs. single black matters for text and solids', 'Outline fonts or embed them in final PDFs', 'Proof colors before committing to a run', 'Paper choice changes how colors print'] },
          { title: 'Handoff and File Management', points: ['Package files: fonts, links, and document together', 'Name files with project, version, and date', 'Preflight checks catch missing links and low-res images', 'Print-ready PDFs follow the printer’s spec sheet', 'Keep working files separate from final releases', 'Confirm quantities and deadlines in writing'] },
        ],
      },
      {
        title: 'Portfolio Project', description: 'A complete campaign asset set from brief to delivery.',
        lessons: [
          { title: 'Executing the Brief', points: ['Research the brand and audience before sketching', 'Moodboards align direction before detailed work', 'Thumbnail layouts explore many options fast', 'Develop the strongest concept across all formats', 'Self-critique against the brief, not personal taste', 'Present work with rationale — design decisions are business decisions'] },
          { title: 'Receiving and Using Feedback', points: ['Feedback targets the work, not the designer', 'Clarify vague notes: what specifically is not working?', 'Distinguish preferences from problems', 'Revise in rounds; show progress, not whiplash', 'Document final approvals', 'A portfolio case study shows process, not just results'] },
        ],
      },
      {
        title: 'Final Readiness Review', description: 'Consolidated visual design review and exam preparation.',
        lessons: [
          { title: 'Visual Design Knowledge Map', points: ['Principles: contrast, repetition, alignment, proximity', 'Layout: grids, hierarchy, white space', 'Type: pairing, hierarchy, legibility rules', 'Color: RGB/CMYK, 60-30-10, accessibility ratios', 'Imagery: resolution, licensing, consistency', 'Production: bleed, preflight, handoff discipline'] },
          { title: 'Exam-Day Strategy', points: ['Principle identification questions use example images — practice naming them', 'Know print specs cold: bleed, CMYK, 300ppi', 'Accessibility numbers (4.5:1) appear frequently', 'Scenario stems reward audience-first reasoning', 'Vocabulary precision: leading vs. kerning vs. tracking', 'Review missed practice questions by domain'] },
        ],
      },
    ],
    questions: [
      { domain: 'Design Principles and Purpose', difficulty: 'easy', q: 'The first question any design project must answer is:', choices: ['Which font to use', 'Who is this for and what should it make them do?', 'What colors are trendy', 'How big the budget is'], answer: 1, why: 'Purpose and audience drive every other decision.' },
      { domain: 'Design Principles and Purpose', difficulty: 'medium', q: 'Contrast, repetition, alignment, and proximity are:', choices: ['File formats', 'The four core layout principles', 'Print inks', 'Social platforms'], answer: 1, why: 'These principles organize any visual composition.' },
      { domain: 'Layout and Composition', difficulty: 'easy', q: 'White space in a layout:', choices: ['Is wasted area', 'Is an active design element that creates focus and breathing room', 'Should always be filled', 'Only appears in print'], answer: 1, why: 'Space directs attention and signals quality.' },
      { domain: 'Layout and Composition', difficulty: 'medium', q: 'Visual hierarchy is controlled mainly by:', choices: ['File size', 'Size, weight, color, and placement of elements', 'Page count', 'Software version'], answer: 1, why: 'These variables signal what the eye should see first.' },
      { domain: 'Typography', difficulty: 'easy', q: 'A safe rule for typefaces per project is:', choices: ['At least six', 'Usually no more than two', 'Exactly one always', 'As many as possible'], answer: 1, why: 'Restraint keeps hierarchy clear and design cohesive.' },
      { domain: 'Typography', difficulty: 'medium', q: 'Leading refers to:', choices: ['First paragraph', 'Vertical space between lines of text', 'Bold weight', 'Letter width'], answer: 1, why: 'Line spacing strongly affects readability.' },
      { domain: 'Color Theory', difficulty: 'easy', q: 'Print design uses which color mode?', choices: ['RGB', 'CMYK', 'Hex', 'Grayscale only'], answer: 1, why: 'Print inks are cyan, magenta, yellow, and black.' },
      { domain: 'Color Theory', difficulty: 'medium', q: 'The minimum contrast ratio for body text accessibility is:', choices: ['1:1', '4.5:1', '100:1', '2:2'], answer: 1, why: 'WCAG requires 4.5:1 for normal text.' },
      { domain: 'Imagery and Graphics', difficulty: 'easy', q: 'Print images should be at least:', choices: ['72ppi', '300ppi', '10ppi', '1000ppi'], answer: 1, why: '300ppi is the standard print resolution baseline.' },
      { domain: 'Imagery and Graphics', difficulty: 'medium', q: 'Logos and icons should be created as:', choices: ['Raster images', 'Vector graphics', 'Screenshots', 'GIFs'], answer: 1, why: 'Vectors scale infinitely without quality loss.' },
      { domain: 'Branding and Identity', difficulty: 'easy', q: 'A style guide primarily ensures:', choices: ['Faster computers', 'Consistent application of logo, color, type, and voice', 'Lower salaries', 'More meetings'], answer: 1, why: 'Consistency across touchpoints builds brand recognition.' },
      { domain: 'Branding and Identity', difficulty: 'medium', q: 'When adapting a campaign across formats, the priority is:', choices: ['Using identical dimensions', 'Preserving the key visual identity while fitting each format', 'Changing the message per format', 'Removing the logo'], answer: 1, why: 'Recognition depends on consistent core elements.' },
      { domain: 'Design for Digital Channels', difficulty: 'easy', q: 'Safe zones in social design protect against:', choices: ['Viruses', 'Platform interface elements covering your content', 'Copyright claims', 'Slow wifi'], answer: 1, why: 'Overlays and crop areas vary by platform and device.' },
      { domain: 'Design for Digital Channels', difficulty: 'medium', q: 'A “bulletproof button” in email design is:', choices: ['An image of a button', 'A button built with code so it works even when images are blocked', 'A legal disclaimer', 'A spam filter'], answer: 1, why: 'Many clients block images by default; coded buttons still render.' },
      { domain: 'Print and Production Basics', difficulty: 'easy', q: 'Bleed is:', choices: ['A printing error', 'Artwork extending past the trim line to avoid white edges', 'Ink spillage', 'A font style'], answer: 1, why: 'Trim tolerance requires artwork to extend beyond the cut line.' },
      { domain: 'Print and Production Basics', difficulty: 'medium', q: 'Preflighting a file checks for:', choices: ['Spelling only', 'Missing links, fonts, and low-resolution images before print', 'Email addresses', 'Budget approval'], answer: 1, why: 'Preflight catches production problems before they cost money.' },
    ],
  },
  {
    id: 'track_social',
    name: 'Social Media Marketing Readiness',
    shortName: 'Social Media',
    category: 'marketing',
    weeks: 8,
    description:
      'Social strategy, content, community, paid social, and measurement — mapped to social media marketing certification–style domains.',
    credentialFocus: 'Mapped to social media marketing certification–style domains',
    schoolOverview:
      'A hands-on social media pathway: students plan content calendars, manage communities, and measure results — with readiness evidence per domain.',
    studentOverview:
      'Learn to run social media like a professional: strategy, content, community management, paid campaigns, and the analytics that prove it works.',
    prerequisites: 'None.',
    alignmentNotes:
      'Mapped to social media marketing certification–style domains: strategy, content, community, paid social, influencer partnerships, and measurement.',
    domains: [
      'Social Strategy', 'Platform Fundamentals', 'Content Creation and Curation', 'Community Management',
      'Paid Social', 'Influencer and Partnership Marketing', 'Social Analytics', 'Reputation and Crisis Response',
    ],
    modules: [
      {
        title: 'Social Strategy', description: 'Goals, audiences, and channel choices.',
        lessons: [
          { title: 'Setting Social Goals', points: ['Social goals ladder to business goals: awareness, traffic, leads, loyalty', 'Choose one primary objective per campaign', 'Vanity metrics (follower counts) rarely pay bills', 'Set baselines before setting targets', 'Resource reality: two channels done well beat six done poorly', 'Document the strategy — memory is not a plan'] },
          { title: 'Audience and Channel Fit', points: ['Different platforms host different demographics and intents', 'B2B audiences cluster on professional networks; consumers spread wider', 'Study where competitors succeed — and where they are absent', 'Native behavior defines what content works on each platform', 'Test small before committing resources', 'Your website and email list are the only audiences you own'] },
        ],
      },
      {
        title: 'Platform Fundamentals', description: 'How the major platforms work and reward content.',
        lessons: [
          { title: 'How Algorithms Distribute Content', points: ['Feeds rank content by predicted relevance, not chronology', 'Early engagement signals expand distribution', 'Watch time and completion drive video reach', 'Comments weigh more than likes in most ranking systems', 'Consistency teaches the algorithm who to show you to', 'Chasing algorithm hacks ages poorly; serving the audience does not'] },
          { title: 'Platform Profiles and Features', points: ['Complete profiles: photo, bio, link, contact path', 'Each platform offers native formats — stories, reels, shorts, live', 'Pinned posts control first impressions', 'Link strategy: bio links, stories, and link-in-bio tools', 'Verification and business tools unlock analytics', 'Platform policies change — follow official announcements'] },
        ],
      },
      {
        title: 'Content Creation and Curation', description: 'Producing a sustainable content engine.',
        lessons: [
          { title: 'Content Pillars and Calendars', points: ['Define 3–5 content pillars aligned to audience interests', 'Balance: educate, entertain, inspire, promote — in that order', 'A calendar maps pillars to dates and formats', 'Batch production keeps quality up and stress down', 'Leave room for timely, reactive content', 'Repurpose top performers into new formats'] },
          { title: 'Crafting Posts That Perform', points: ['Hooks earn the first second: question, bold claim, or visual surprise', 'Captions add context and a call to action', 'Hashtags aid discovery modestly — relevance beats volume', 'Native formats outperform links off-platform', 'Accessibility: captions on video, alt text on images', 'Brand voice stays consistent even when formats change'] },
        ],
      },
      {
        title: 'Community Management', description: 'Engaging audiences and building belonging.',
        lessons: [
          { title: 'Day-to-Day Engagement', points: ['Reply to comments quickly — responsiveness builds community', 'Ask questions that invite real answers', 'Feature customer stories and user content with permission', 'Handle complaints publicly with empathy, resolve privately', 'Set response-time standards and meet them', 'Community guidelines keep spaces safe and on-brand'] },
          { title: 'Growing an Engaged Following', points: ['Engagement begets reach — conversations are the growth engine', 'Collaborate with adjacent accounts for shared audiences', 'Consistency outperforms viral chasing', 'Give followers a reason to return: series, rituals, insider access', 'Employee advocacy multiplies authentic reach', 'Follower quality (right people) beats quantity'] },
        ],
      },
      {
        title: 'Paid Social', description: 'Buying reach and conversions on social platforms.',
        lessons: [
          { title: 'Paid Social Basics', points: ['Paid social creates demand by interrupting with relevance', 'Objectives: awareness, traffic, engagement, leads, sales', 'Audiences: core (targeting), custom (your data), lookalike (modeled)', 'Creative is the biggest performance lever', 'Boosting posts is simple but limited; ads managers give control', 'Pixel/SDK tracking connects ads to website outcomes'] },
          { title: 'Campaign Craft', points: ['Hook in the first frame — sound-off viewing is the default', 'UGC-style creative often outperforms polished brand ads', 'Test audiences and creative separately to learn cleanly', 'Frequency caps prevent fatigue', 'Retargeting warm audiences converts cheapest', 'Judge by cost per result, not CPM'] },
        ],
      },
      {
        title: 'Influencer and Partnership Marketing', description: 'Borrowing trust from voices audiences follow.',
        lessons: [
          { title: 'Working with Creators', points: ['Micro-creators often deliver better engagement per dollar than celebrities', 'Audience fit matters more than follower count', 'Review engagement quality — comments vs. bots', 'Briefs set deliverables, timelines, usage rights, and disclosure', 'FTC rules require clear #ad disclosure', 'Long-term partnerships outperform one-off posts'] },
          { title: 'Measuring Partnerships', points: ['Track with unique links and codes', 'Watch engagement rate, traffic quality, and conversions', 'Content usage rights extend the value beyond the post', 'Whitelisting runs ads through the creator’s handle', 'Compare creator CPMs and CPAs against paid social benchmarks', 'Post-campaign reviews decide renewals'] },
        ],
      },
      {
        title: 'Social Analytics', description: 'Measuring performance and proving value.',
        lessons: [
          { title: 'Metrics That Matter', points: ['Reach and impressions measure visibility', 'Engagement rate normalizes interaction by audience size', 'Click-throughs connect content to site traffic', 'Follower growth rate beats raw counts for momentum', 'Share of voice benchmarks against competitors', 'Save and share rates signal content value'] },
          { title: 'Reporting and Iteration', points: ['Weekly: content performance review', 'Monthly: channel-level trends vs. goals', 'Attribute traffic with UTM parameters', 'Double down on formats and pillars that outperform', 'Kill recurring content that consistently underperforms', 'Report insights and next actions, not just screenshots'] },
        ],
      },
      {
        title: 'Reputation and Crisis Response', description: 'Protecting the brand when things go wrong.',
        lessons: [
          { title: 'Listening and Monitoring', points: ['Social listening tracks brand mentions beyond your channels', 'Alerts catch spikes before they become stories', 'Sentiment trends reveal brewing issues', 'Respond to reviews — silence reads as indifference', 'Feedback patterns feed product and service teams', 'Document incidents and responses for learning'] },
          { title: 'Crisis Playbook', points: ['Prepare escalation paths before you need them', 'Acknowledge fast, investigate, follow up with facts', 'Never delete genuine criticism — address it', 'One spokesperson, one consistent message', 'Pause scheduled promotional content during a crisis', 'Post-crisis: review, apologize where due, show what changed'] },
        ],
      },
      {
        title: 'Social Campaign Lab', description: 'A guided month-long campaign simulation.',
        lessons: [
          { title: 'Planning the Month', points: ['Brief: objective, audience, key dates, offers', 'Content calendar across pillars and formats', 'Asset production checklist with owners', 'Paid budget allocated to support top organic content', 'Tracking links and codes prepared', 'Approval workflow agreed before launch'] },
          { title: 'Running and Reviewing', points: ['Publish on schedule; engage daily', 'Mid-month review: shift effort toward what works', 'Capture screenshots of top performers for the report', 'End-of-month: results vs. goals, learnings, next-month changes', 'Build a swipe file of proven formats', 'Every month should start smarter than the last'] },
        ],
      },
      {
        title: 'Final Readiness Review', description: 'Consolidated social media review and exam preparation.',
        lessons: [
          { title: 'Social Media Knowledge Map', points: ['Strategy: goals, audience fit, owned vs. rented audiences', 'Platforms: algorithms reward relevance and engagement', 'Content: pillars, calendars, hooks, accessibility', 'Community: responsiveness, UGC, guidelines', 'Paid: objectives, audiences, creative as the lever', 'Analytics: engagement rate, UTMs, iteration'] },
          { title: 'Exam-Day Strategy', points: ['Know metric definitions: reach vs. impressions vs. engagement rate', 'Scenario stems reward audience-first, platform-native thinking', 'Disclosure rules (FTC) appear in partnership questions', 'Crisis questions favor acknowledge-then-act sequences', 'Vocabulary precision: organic vs. paid vs. earned', 'Review missed practice questions by domain'] },
        ],
      },
    ],
    questions: [
      { domain: 'Social Strategy', difficulty: 'easy', q: 'The strongest basis for choosing social platforms is:', choices: ['Personal preference', 'Where your target audience is active', 'The newest platform', 'Where ads are cheapest'], answer: 1, why: 'Channel choice follows audience behavior.' },
      { domain: 'Social Strategy', difficulty: 'medium', q: 'Which is an owned audience channel?', choices: ['A social platform', 'Your email list', 'A trending hashtag', 'A creator’s following'], answer: 1, why: 'Owned channels are not subject to algorithm or platform risk.' },
      { domain: 'Platform Fundamentals', difficulty: 'easy', q: 'Feed algorithms primarily rank content by:', choices: ['Posting time only', 'Predicted relevance and engagement signals', 'Account age', 'Follower count'], answer: 1, why: 'Ranking systems optimize for predicted user interest.' },
      { domain: 'Platform Fundamentals', difficulty: 'medium', q: 'For video reach, the most important signal is usually:', choices: ['Video length', 'Watch time and completion', 'Upload hour', 'Thumbnail color'], answer: 1, why: 'Retention signals content quality to ranking systems.' },
      { domain: 'Content Creation and Curation', difficulty: 'easy', q: 'Content pillars are:', choices: ['Hashtag lists', '3–5 recurring themes aligned to audience interests', 'Paid ad formats', 'Profile photos'], answer: 1, why: 'Pillars keep content strategic and production sustainable.' },
      { domain: 'Content Creation and Curation', difficulty: 'medium', q: 'The healthy promotional balance for content is roughly:', choices: ['All promotional', 'Mostly educational/entertaining with occasional promotion', 'No promotion ever', 'Promotion only on holidays'], answer: 1, why: 'Value-first content earns the attention that promotion spends.' },
      { domain: 'Community Management', difficulty: 'easy', q: 'A public complaint on your page should be:', choices: ['Deleted immediately', 'Acknowledged publicly with empathy, then resolved privately', 'Ignored', 'Reported as spam'], answer: 1, why: 'Visible, respectful responses build trust with everyone watching.' },
      { domain: 'Community Management', difficulty: 'medium', q: 'User-generated content should be reshared:', choices: ['Without asking', 'With the creator’s permission and credit', 'Only if anonymous', 'Never'], answer: 1, why: 'Permission and credit are both ethical and legally prudent.' },
      { domain: 'Paid Social', difficulty: 'easy', q: 'Lookalike audiences are built from:', choices: ['Random users', 'Your existing customer or audience data', 'Competitor employees', 'Bot accounts'], answer: 1, why: 'Platforms model new audiences that resemble your proven ones.' },
      { domain: 'Paid Social', difficulty: 'medium', q: 'The biggest performance lever in paid social is:', choices: ['Bid caps', 'Creative quality', 'Account age', 'Posting time'], answer: 1, why: 'Creative determines whether the target audience stops and acts.' },
      { domain: 'Influencer and Partnership Marketing', difficulty: 'easy', q: 'Paid partnerships must be disclosed:', choices: ['Only if asked', 'Clearly, per FTC disclosure rules', 'Never', 'Only for large creators'], answer: 1, why: 'Material connections require clear disclosure.' },
      { domain: 'Influencer and Partnership Marketing', difficulty: 'medium', q: 'When choosing a creator partner, prioritize:', choices: ['Follower count', 'Audience fit and genuine engagement', 'Lowest price', 'Verification badge'], answer: 1, why: 'Fit and trust determine whether the audience will act.' },
      { domain: 'Social Analytics', difficulty: 'easy', q: 'Engagement rate is calculated as:', choices: ['Followers ÷ posts', 'Interactions relative to audience size or reach', 'Likes only', 'Ads ÷ spend'], answer: 1, why: 'Normalizing by reach or followers makes accounts comparable.' },
      { domain: 'Social Analytics', difficulty: 'medium', type: 'scenario', q: 'A post has high reach but near-zero clicks. The best interpretation is:', choices: ['Delete the account', 'The content earned attention but the call to action or link failed', 'Reach metrics are broken', 'Post more of the same'], answer: 1, why: 'Attention without action points to the conversion path, not the content.' },
      { domain: 'Reputation and Crisis Response', difficulty: 'easy', q: 'Social listening monitors:', choices: ['Only your own posts', 'Brand mentions and conversations across platforms', 'Employee phones', 'Competitor passwords'], answer: 1, why: 'Listening captures what people say beyond your channels.' },
      { domain: 'Reputation and Crisis Response', difficulty: 'medium', q: 'During a brand crisis, the correct first move is:', choices: ['Delete negative comments', 'Acknowledge quickly, pause scheduled promos, investigate, then respond with facts', 'Stay silent for weeks', 'Argue with critics'], answer: 1, why: 'Speed plus honesty limits damage; silence and deletion amplify it.' },
    ],
  },
]
