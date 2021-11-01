import AdminService from "./AdminService";
import React from "react";

class UiService {
  public static parseYears(start: string, end: Nullable<string>): string {
    const yearStart = new Date(start).getFullYear().toString();
    const yearEnd = end ? new Date(end).getFullYear().toString() : 0;
    return yearEnd ? yearEnd === yearStart ? yearStart : `${yearStart}-${yearEnd}` : `${yearStart}-`;
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
    return `${monthStart}/${dateStart.getFullYear()} -`;
  }

  public static async getTotalNpmDownloads(packageName: string): Promise<number> {
    const from = this.getFullDateString(new Date(0));
    const to = this.getFullDateString(new Date());
    const api = `https://api.npmjs.org/downloads/point/${from}:${to}/${packageName}`;
    const response = await fetch(api);
    const json = await response.json();
    return json?.downloads ?? 0;
  }

  public static sortByField<T>(array: T[], field: keyof T, descending?: boolean) {
    const direction = descending ? -1 : 1;
    return array.sort((a, b) => a[field] > b[field] ? -1 * direction : 1 * direction)
  }

  public static getFullDateString(date: Date): string {
    const util = date.toLocaleDateString.bind(date, navigator.language);
    return [
      util({year: "numeric"}),
      util({month: "2-digit"}),
      util({day: "2-digit"})
    ].join("-");
  }

  public static getToolsList(tools: Nullable<string>): AppIconType[] {
    const list = (tools ?? "").split(",") as AppDevToolKey[];
    return list.filter((item) => item in AdminService.toolsList);
  }

  public static getTagsList(tags: string): string[] {
    return tags.split(",");
  }

  public static getDevToolsList(tools: string): AppIconType[] {
    const list = tools.split(",") as AppDevToolKey[];
    return list.filter((item) => item in AdminService.toolsList);
  }

  public static formatNumber(number: number): string {
    number = Math.round(number);
    if (number < 1_000) {
      return number.toString();
    } else if (number < 1_000_000) {
      return (number / 1_000).toFixed(1) + "k";
    } else {
      return (number / 1_000_000).toFixed(1) + "m";
    }
  }

  public static parseRichTextToHtml(data: string) {
    data = data.replace(/\*.*?\*/mg, (match: string) =>
      `<strong>${match.substring(1, match.length - 1)}</strong>`)
    data = data.replace(/_.*?_/mg, (match: string) =>
      `<span class="italic">${match.substring(1, match.length - 1)}</span>`)

    return {__html: data}
  }

  public static isMobile(): boolean {
    return window.matchMedia('(max-width: 600px)').matches;
  }

  public static setQueryString(obj: RestCollection<any>): string {
    const query = Object.entries(obj)
      .map((pair) => {
        if (typeof pair[1] === "undefined") return;
        pair[1] = "" + pair[1];
        return pair.join("=");
      })
      .filter(entry => entry)
      .join("&");
    return "?" + query;
  }

  public static parseQueryString(query: string): RestCollection<any> {
    return Object.fromEntries(
      query
        .substring(query.startsWith("?") ? 1 : 0)
        .split("&")
        .map((pair) => {
          let [key, value] = pair.split("=");
          try {
            value = JSON.parse(decodeURI(value));
          } catch {
            value = decodeURI(value);
          }
          return [key, value];
        })
    );
  }

  public static validateComponent(values: any[], component: any): Nullable<React.ReactElement> {
    if (values.some((val: any) => !!val)) {
      return null
    }
    return component;
  }

  private static getMonthString(date: Date): string {
    return (date.getMonth() + 1).toString().padStart(2, "0")
  }
}

export default UiService;