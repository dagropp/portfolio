class TypeUtils {
  public static strToUnderscore(str: string): string {
    return str
      .toLowerCase()
      .replace(/[-\s]/g, "_");
  }

  public static idToTitle(str: string): string {
    return str
      .toLowerCase()
      .replace(/_/, " ")
      .split(" ")
      .map((word) => word.substring(0, 1).toUpperCase() + word.substring(1))
      .join(" ");
  }
}

export default TypeUtils;