class StorageService {
  public registerEntrance() {
    const {
      user_id = `${Date.now()}:${btoa(Math.random().toString())}`,
      enable_contact_popup = true,
      theme = "light"
    } = StorageService.getFields("user_id", "enable_contact_popup", "theme");

    const data: AppUserData = {
      user_id,
      enable_contact_popup,
      theme,
      session_timestamp: Date.now(),
      session_referrer: document.referrer || "",
    };

    StorageService.setAppData(data);
    return data;
  }

  private static setAppData(data: AppUserData) {
    localStorage.setItem("app_data", JSON.stringify(data));
  }

  private static getAppData(): AppUserData | null {
    const entry = localStorage.getItem("app_data");
    return entry ? JSON.parse(entry) as AppUserData : null;
  }

  public set<T>(key: keyof AppUserData, item: T): void {
    const data: any = StorageService.getAppData();
    data[key] = item;
    StorageService.setAppData(data);
  }

  public get<T>(key: keyof AppUserData): T | null {
    const data: any = StorageService.getAppData();
    return data ? data[key] : null;
  }

  private static getFields(...keys: (keyof AppUserData)[]): Partial<AppUserData> {
    const data: any = this.getAppData();
    if (data) {
      const result: Partial<AppUserData> = {};
      keys.forEach((key) => result[key] = data[key]);
      return result;
    }
    return {};
  }
}

export const storageService = new StorageService();