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

type RestCollection<T, U = string> = {
  [id in U]: T;
}

interface DevTool {
  display: string;
}