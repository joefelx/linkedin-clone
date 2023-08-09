type JobType =
  | "Full-time"
  | "Part-time"
  | "Self-employed"
  | "Freelance"
  | "Internship"
  | "Trainee";

type LocationType = "On-site" | "Hybrid" | "Remote";

type ProficiencyType =
  | "Elementary proficiency"
  | "Limited working proficiency"
  | "Professional working proficiency"
  | "Full professional proficiency"
  | "Native or bilingual proficiency";

interface Experience {
  title: string;
  company: string;
  type: JobType;
  location?: LocationType;
  startDate?: Date;
  endDate?: Date;
  industry: string;
  description?: string;
  profileHeadline?: string;
  skills?: Array<string>;
  media?: Array<string>;
}

interface Education {
  name: string;
  degree: string;
  field: string;
  startDate?: Date;
  endDate?: Date;
  grade?: string;
  activites?: string;
  description?: string;
  skills?: Array<string>;
  media?: Array<string>;
}

interface Certification {
  name: string;
  organization: string;
  issueDate?: Date;
  expirationDate?: Date;
  credentialId?: string;
  credentialURL?: string;
  skills?: Array<string>;
}

interface Project {
  name: string;
  description?: string;
  skills?: Array<string>;
  media?: Array<string>;
  currentlyWorking: Boolean;
  startDate?: Date;
  endDate?: Date;
  contributors?: Array<User>;
  associatedWith?: Education | Experience;
}

interface Language {
  language: string;
  proficiency?: ProficiencyType;
}

interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  followers: Array<User>;
  following: Array<User>;
  connections: Array<User>;
  headline: string;
  city: string;
  profileImg?: string;
  about: string;
  experience: Array<Experience>;
  education: Array<Education>;
  certifications: Array<Certification>;
  projects: Array<Project>;
  skills: Array<string>;
  languages: Array<Language>;
}

export default User;
export type { Experience, Education, Certification, Project, Language };
