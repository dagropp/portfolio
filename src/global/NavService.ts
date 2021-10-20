import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Admin from "../pages/admin";
import EditProject from "../pages/admin/EditProject";
import EditCodeSnippet from "../pages/admin/EditCodeSnippet";
import ProjectPage from "../pages/ProjectPage";
import EducationPage from "../pages/EducationPage";
import ExperiencePage from "../pages/ExperiencePage";

class NavService {

  public getMenuItems(): MenuItemData<AppSection>[] {
    return [
      {id: "dashboard", path: "/", redirect: "/dashboard", hidden: true},
      {id: "dashboard", title: "Dashboard", path: "/dashboard", component: Dashboard},
      {id: "about", title: "About", path: "/about", component: About},
      {id: "admin", path: "/admin", component: Admin, hidden: true},
      {id: "project_page", path: "/project_page/:id", component: ProjectPage, hidden: true},
      {id: "education_page", path: "/education_page/:id", component: EducationPage, hidden: true},
      {id: "experience_page", path: "/experience_page/:id", component: ExperiencePage, hidden: true}
      // {id: "admin", path: "/admin", redirect: "/admin", hidden: true},
    ];
  }

  public get adminMenuItems(): MenuItemData<AdminSection | AppSection>[] {
    return [
      {id: "edit_project", path: "/admin/edit_project", title: "Edit Project", component: EditProject},
      {id: "edit_code_snippet", path: "/admin/edit_code_snippet", title: "Edit Code Snippet", component: EditCodeSnippet}
    ]
  }

  public getPageKey(path: string): AppSection | null {
    const item = this.getMenuItems().find(item => item.path === path);
    return item?.id ?? null;
  }

  public isPage(pathname: string, page: AppSection): boolean {
    return this.getPageKey(pathname) === page;
  }
}

export const navService = new NavService();