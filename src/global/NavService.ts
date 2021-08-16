import Dev from "../pages/Dev";
import Design from "../pages/Design";
import Misc from "../pages/Misc";
import About from "../pages/About";
import Admin from "../pages/admin";
import EditProject from "../pages/admin/EditProject";
import EditCodeSnippet from "../pages/admin/EditCodeSnippet";

class NavService {

  public get menuItems(): MenuItemData<AppSection>[] {
    return [
      {id: "dev", path: "/", redirect: "/dev", hidden: true},
      {id: "dev", title: "Dev", path: "/dev", component: Dev},
      {id: "design", title: "Design", path: "/design", component: Design},
      {id: "misc", title: "Misc.", path: "/misc", component: Misc},
      {id: "about", title: "About", path: "/about", component: About},
      {id: "admin", path: "/admin", component: Admin, hidden: true},
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
    const item = this.menuItems.find(item => item.path === path);
    return item?.id ?? null;
  }

  public isPage(pathname: string, page: AppSection): boolean {
    return this.getPageKey(pathname) === page;
  }
}

export const navService = new NavService();