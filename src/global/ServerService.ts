class ServerService {
  private static readonly SERVER_PATH = "http://localhost/portfolio/modules/";
  private static readonly CONTROLLER_PATH = ServerService.SERVER_PATH + "controllers/";

  public static async post<T, U = any>(path: string, data: T): Promise<U> {
    const response: Response = await fetch(
      this.controller(path), {
        method: "POST",
        body: JSON.stringify(data)
      }
    );
    return await response.json();
  }

  public static async get<T, U = any>(path: string, queries?: T): Promise<U> {
    const queryString = queries ? "?" + Object.entries(queries).map(([key, value]) => `${key}=${value}`).join("&") : "";
    const response: Response = await fetch(this.controller(path) + queryString);
    return await response.json()
  }

  public static beacon<T>(path: string, data: T): boolean {
    return navigator.sendBeacon(
      this.controller(path),
      JSON.stringify(data)
    );
  }

  public static async getSectionData(section?: AppSection) {
    let app_section;
    if (section) app_section = {app_section: section};
    return this.get<RestDataRequest, RestDataResponse>("fetch_data", app_section);
  }

  public static async getTable<T>(table: DataBaseSectionTable) {
    return this.get<{ table: string }, T[]>("fetch_table", {table})
  }

  public static async getRelationDataList() {
    return this.get<null, RestDataListResponse[]>("fetch_data_list");
  }

  private static controller = (path: string) => ServerService.CONTROLLER_PATH + path + ".php";
}

export default ServerService;