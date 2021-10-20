interface RestCommon {
  description: Nullable<string>;
  id: string;
  tags: Nullable<string>;
  title: string;
  tools: Nullable<string>;
  date_end: Nullable<string>;
  date_start: string;
  item_type: "education" | "project" | "experience";
}

interface RestEducation extends RestCommon {
  degree: "certificate" | "ba" | "ma" | "none";
  description: string | null;
  id: string;
  institution: string;
  tags: string | null;
  title: string;
  item_type: "education";
}

interface RestExperience extends RestCommon {
  app_link: Nullable<string>;
  item_type: "experience";
  company: string;
  link: Nullable<string>;
}

interface RestProject extends RestCommon {
  download_link: Nullable<string>;
  github: Nullable<string>;
  npm: Nullable<string>;
  relation: Nullable<string>;
  site_link: Nullable<string>;
  skills: Nullable<string>;
  type: string;
  item_type: "project";
}

interface RestDataResponse {
  education: RestEducation[];
  projects: RestProject[];
  experience: RestExperience[];
  code_snippets: RestCodeSnippet[];
}

interface RestCodeSnippet {
  description: Nullable<string>;
  github: string;
  id: string;
  name: string;
  relation: string;
}

interface RestDataListResponse {
  id: string;
  title: string;
}

interface RestDbUpdate {
  id: string;
  timestamp: string;
  tables: string;
}

type DataBaseSectionTable = "education" | "projects" | "experience" | "other" | "code_snippets" | "db_updates";