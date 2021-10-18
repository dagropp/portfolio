import Stuff from "../pages/Stuff";
import About from "../pages/About";
import Admin from "../pages/admin";
import EditProject from "../pages/admin/EditProject";
import EditCodeSnippet from "../pages/admin/EditCodeSnippet";
import Project from "../pages/Project";

class NavService {

  private menuItems: MenuItemData<AppSection>[] = [
    {id: "stuff", path: "/", redirect: "/stuff", hidden: true},
    {id: "stuff", title: "Stuff", path: "/stuff", component: Stuff},
    {id: "about", title: "About", path: "/about", component: About},
    {id: "inner", title: "R", path: "/project/:id", component: Project, hidden: true},
    {id: "admin", path: "/admin", component: Admin, hidden: true},
  ];

  public getMenuItems(): MenuItemData<AppSection>[] {
    return this.menuItems;
  }

  public get adminMenuItems(): MenuItemData<AdminSection | AppSection>[] {
    return [
      {id: "edit_project", path: "/admin/edit_project", title: "Edit Project", component: EditProject},
      {id: "edit_code_snippet", path: "/admin/edit_code_snippet", title: "Edit Code Snippet", component: EditCodeSnippet}
    ]
  }

  public getPageKey(path: string): AppSection | null {
    const item = this.menuItems.find(item => item.path === path);
    return item?.id ?? null;
  }

  public isPage(pathname: string, page: AppSection): boolean {
    return this.getPageKey(pathname) === page;
  }
}

export const navService = new NavService();