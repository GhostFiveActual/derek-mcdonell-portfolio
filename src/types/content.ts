export type Disclosure =
  | 'PUBLIC'
  | 'CASE STUDY / SANITIZED'
  | 'LAB / RESEARCH'
  | 'HIGH-LEVEL ONLY'

export interface Project {
  id: string
  name: string
  category: string
  description: string
  evidence: string[]
  disclosure: Disclosure
  accent: 'red' | 'teal' | 'silver'
}

export interface Experience {
  organization: string
  role: string
  period: string
  summary: string
  evidence: string[]
}

export interface CredentialGroup {
  category: string
  items: string[]
}
