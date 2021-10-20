type AppSection = "dashboard" | "about" | "admin" | "education_page" | "experience_page" | "project_page";
type AdminSection = "edit_project" | "edit_code_snippet" | "edit_experience" | "edit_education";

interface MenuItemData<T> {
  id: T;
  title?: string;
  path: string;
  component?: React.FC;
  hidden?: boolean;
  redirect?: string;
}

type Nullable<T> = T | null;

type Optional<T> = T | undefined;

type RestCollection<T, U = string> = {
  [id in U]: T;
}

interface DevTool {
  display: string;
}

interface FormListProps<T> {
  id: string;
  title?: string;
  defaultValue: Nullable<string>;
  options: any[];
  defaultOption?: string;
  className?: string;
  itemMap?: { value: string; display: string; }
  required?: boolean;
  onChange?: EventHandler<ChangeEvent<T>>;
}

type ProgrammingLanguage = "css" | "html" | "java" | "js" | "jsx" | "php" | "py" | "sql" | "tsx" | "ts";

type AppTheme = "light" | "dark";