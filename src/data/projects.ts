export interface Project {
  id: string;
  title: string;
  date: string;
  tags: string[];
  status: 'active' | 'archived';
  description: string;
}