import Dev from "../pages/Dev";
import Design from "../pages/Design";
import Misc from "../pages/Misc";
import About from "../pages/About";
import Admin from "../pages/admin";
import EditProject from "../pages/admin/EditProject";

class NavService {
  private readonly menuItems: MenuItemData<AppSection>[] = [
    {id: "dev", path: "/", redirect: "/dev", hidden: true},
    {id: "dev", title: "Dev", path: "/dev", component: Dev},
    {id: "design", title: "Design", path: "/design", component: Design},
    {id: "misc", title: "Misc.", path: "/misc", component: Misc},
    {id: "about", title: "About", path: "/about", component: About},
    {id: "admin", path: "/admin", component: Admin, hidden: true}
  ];

  private readonly adminMenuItems: MenuItemData<AdminSection>[] = [
    // {id: "edit_experience", path: "/edit_experience", title: "Edit Experience"},
    // {id: "edit_education", path: "/edit_education", title: "Edit Education"},
    {id: "edit_project", path: "/admin/edit_project", title: "Edit Project", component: EditProject}
  ]

  public getMenuItems() {
    return this.menuItems;
  }

  public getAdminMenuItems() {
    return this.adminMenuItems;
  }

  public getPageKey(path: string): AppSection | null {
    const item = this.menuItems.find(item => item.path === path);
    return item?.id ?? null;
  }

  public isPage(path: string, page: AppSection): boolean {
    return this.getPageKey(path) === page;
  }
}

export const navService = new NavService();