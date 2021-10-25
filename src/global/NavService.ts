import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Admin from "../pages/admin";
import EditProject from "../pages/admin/EditProject";
import EditCodeSnippet from "../pages/admin/EditCodeSnippet";
import ProjectPage from "../pages/ProjectPage";
import EducationPage from "../pages/EducationPage";
import ExperiencePage from "../pages/ExperiencePage";
import {Location as HistoryLocation} from "history";

class NavService {

  private location?: HistoryLocation;
  private menuItems: MenuItemData<AppSection>[] = [
    {id: "dashboard", path: "/", redirect: "/dashboard", hidden: true},
    {id: "dashboard", title: "Dashboard", path: "/dashboard", component: Dashboard},
    {id: "about", title: "About", path: "/about", component: About},
    {id: "admin", path: "/admin", component: Admin, hidden: true},
    {id: "admin", path: "/admin", redirect: "/admin", hidden: true},
    {id: "project_page", path: "/project_page/:id", component: ProjectPage, hidden: true},
    {id: "education_page", path: "/education_page/:id", component: EducationPage, hidden: true},
    {id: "experience_page", path: "/experience_page/:id", component: ExperiencePage, hidden: true},
  ];
  private adminMenuItems: MenuItemData<AdminSection | AppSection>[] = [
    {id: "edit_project", path: "/admin/edit_project", title: "Edit Project", component: EditProject},
    {id: "edit_code_snippet", path: "/admin/edit_code_snippet", title: "Edit Code Snippet", component: EditCodeSnippet}
  ]

  public setLocation(location: HistoryLocation): void {
    this.location = location;
  }

  public getMenuItems(): MenuItemData<AppSection>[] {
    return this.menuItems;
  }

  public getAdminMenuItems(): MenuItemData<AdminSection | AppSection>[] {
    return this.adminMenuItems;
  }

  public getPageKey(pathname?: string): AppSection | null {
    const item = this.getMenuItems().find(item => item.path === pathname);
    return item?.id ?? null;
  }

  public isPage(page: AppSection, pathname?: string): boolean {
    const thisPathname = pathname ?? this.location?.pathname ?? "";
    return this.getPageKey(thisPathname) === page;
  }
}

export const navService = new NavService();