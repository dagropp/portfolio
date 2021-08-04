class UiService {
  public static parseYears(start: string, end: Nullable<string>): string {
    return end ? end === start ? start : `${start}-${end}` : `${start}-`;
  }

  public static parseMonths(start: string, end: Nullable<string>) {
    const dateStart = new Date(start);
    const monthStart = this.getMonthString(dateStart);
    if (end) {
      const dateEnd = new Date(end);
      if ((dateStart.getMonth() < dateEnd.getMonth()) || (dateStart.getFullYear() < dateEnd.getFullYear())) {
        const monthEnd = this.getMonthString(dateEnd);
        if (dateStart.getFullYear() < dateEnd.getFullYear()) {
          return `${monthStart}/${dateStart.getFullYear()}-${monthEnd}/${dateEnd.getFullYear()}`;
        }
        return `${monthStart}-${monthEnd}/${dateStart.getFullYear()}`;
      }
      return `${monthStart}/${dateStart.getFullYear()}`;
    }
    return `${monthStart}-${dateStart.getFullYear()}`;
  }

  public static async getTotalNpmDownloads(packageName: string): Promise<number> {
    const from = this.getFullDateString(new Date(0));
    const to = this.getFullDateString(new Date());
    const api = `https://api.npmjs.org/downloads/point/${from}:${to}/${packageName}`;
    const response = await fetch(api);
    const json = await response.json();
    return json?.downloads ?? 0;
  }

  public static sortByField<T>(array: T[], field: keyof T) {
    return array.sort((a, b) => a[field] > b[field] ? -1 : 1)
  }

  public static getFullDateString(date: Date): string {
    const year = date.getFullYear();
    const month = this.getMonthString(date);
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  private static getMonthString(date: Date): string {
    return (date.getMonth() + 1).toString().padStart(2, "0")
  }
}

export default UiService;