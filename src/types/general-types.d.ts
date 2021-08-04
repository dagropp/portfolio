type AppSection = "dev" | "design" | "about" | "misc" | "admin";
type AdminSection = "edit_project" | "edit_experience" | "edit_education";

interface MenuItemData<T> {
  id: T;
  title?: string;
  path: string;
  component?: React.FC;
  hidden?: boolean;
  redirect?: string;
}

type Nullable<T> = T | null;

interface RestCollection<T> {
  [id: string]: T;
}

interface DevTool {
  display: string;
  icon: string;
}