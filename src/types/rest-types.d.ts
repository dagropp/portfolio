interface RestEducation {
  app_section: AppSection;
  degree: "certificate" | "ba" | "ma" | "none";
  description: string | null;
  id: string;
  institution: string;
  tags: string | null;
  title: string;
  tools: string | null;
  year_end: string | null;
  year_start: string;
}

interface RestExperience {
  app_link: Nullable<string>;
  app_section: AppSection;
  company: string;
  description: Nullable<string>;
  id: string;
  link: Nullable<string>;
  position: string;
  tags: Nullable<string>;
  tools: Nullable<string>;
  year_end: Nullable<string>;
  year_start: string;
}

interface RestProject {
  app_section: AppSection | string;
  date_end: Nullable<string>;
  date_start: string;
  description: Nullable<string>;
  download_link: Nullable<string>;
  github: Nullable<string>;
  id: string;
  npm: Nullable<string>;
  relation: Nullable<string>;
  site_link: Nullable<string>;
  tags: Nullable<string>;
  title: string;
  tools: Nullable<string>;
  skills: Nullable<string>;
  type: string;
}

interface RestDataRequest {
  app_section?: AppSection;
}

interface RestDataResponse {
  education: RestEducation[];
  projects: RestProject[];
  experience: RestExperience[];
  other: any[];
}

interface RestDataListResponse {
  id: string;
  section: string;
  title: string;
}

type DataBaseSectionTable = "education" | "projects" | "experience" | "other";