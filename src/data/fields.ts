// The eight IRC (industry-recognized credential) fields EduSphere USA covers.
import type { Field, FieldId } from '@/lib/types'

export const FIELDS: Field[] = [
  {
    id: 'healthcare',
    slug: 'health-sciences',
    name: 'Health Sciences',
    shortName: 'Health',
    tagline: 'Clinical and allied-health credential readiness',
    description:
      'Readiness tracks for clinical and administrative healthcare credentials — from medical assisting and phlebotomy to billing, coding, and health records.',
    color: '#0e7490',
  },
  {
    id: 'it',
    slug: 'information-technology',
    name: 'Information Technology',
    shortName: 'IT',
    tagline: 'Support, networking, and cloud foundations',
    description:
      'Readiness tracks covering digital productivity, IT support, networking, cloud fundamentals, and database and web foundations.',
    color: '#2563eb',
  },
  {
    id: 'cybersecurity',
    slug: 'cybersecurity',
    name: 'Cybersecurity',
    shortName: 'Cyber',
    tagline: 'Security operations and network defense',
    description:
      'Readiness tracks for cybersecurity foundations, security operations, network defense, and incident response workflows.',
    color: '#7c3aed',
  },
  {
    id: 'business',
    slug: 'business',
    name: 'Business',
    shortName: 'Business',
    tagline: 'Entrepreneurship, management, and workplace skills',
    description:
      'Readiness tracks for entrepreneurship, project management, business communication, customer service, and team operations.',
    color: '#b45309',
  },
  {
    id: 'finance',
    slug: 'finance',
    name: 'Finance',
    shortName: 'Finance',
    tagline: 'Bookkeeping, accounting software, and financial literacy',
    description:
      'Readiness tracks for accounting software, professional bookkeeping, personal finance, and spreadsheet-based financial analysis.',
    color: '#047857',
  },
  {
    id: 'marketing',
    slug: 'marketing',
    name: 'Marketing',
    shortName: 'Marketing',
    tagline: 'Digital marketing, ads, analytics, and design',
    description:
      'Readiness tracks for digital marketing, search and display advertising, analytics, visual design, and social media campaigns.',
    color: '#db2777',
  },
  {
    id: 'aviation',
    slug: 'aviation-uas',
    name: 'Aviation & UAS',
    shortName: 'Aviation',
    tagline: 'Remote pilot, maintenance, and electronics readiness',
    description:
      'Readiness tracks for remote pilot certification, aviation maintenance knowledge (General, Airframe, Powerplant), aircraft electronics, and drone operations safety.',
    color: '#4d7c0f',
  },
  {
    id: 'engineering',
    slug: 'engineering-robotics-safety',
    name: 'Engineering, Robotics & Safety',
    shortName: 'Engineering',
    tagline: 'Pre-engineering, robotics, CAD, and OSHA safety',
    description:
      'Readiness tracks for pre-engineering, robotics, manufacturing fundamentals, CAD design, OSHA 10 safety, and the engineering design process.',
    color: '#dc2626',
  },
]

export function getField(id: FieldId): Field {
  return FIELDS.find((f) => f.id === id)!
}

export function fieldBySlug(slug: string): Field | undefined {
  return FIELDS.find((f) => f.slug === slug)
}
