import React, {ChangeEventHandler, useEffect, useState} from "react";
import {storageService} from "../../global/StorageService";

interface ContainerProps {
}

const ThemeToggle: React.FC<ContainerProps> = () => {

  const isChecked = (value: AppTheme) => value === "light";

  const [theme, setTheme] = useState<AppTheme>(storageService.get("theme") ?? "light");
  const [checked, setChecked] = useState(isChecked(theme));

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const theme: AppTheme = event.target.checked ? "light" : "dark";
    storageService.set("theme", theme);
    setChecked(isChecked(theme));
    setTheme(theme);
  }

  return (
    <label
      htmlFor="themeToggle"
      className={`app-toggle theme-toggle ${checked ? "checked" : ""}`}
    >
      <input
        type="checkbox"
        defaultChecked={checked}
        id="themeToggle"
        onChange={handleChange}
      />
      <span className="inner-circle"/>
      <span className="icon">{theme === "light" ? "☀️" : "🌜"}</span>
    </label>
  )
}

export default ThemeToggle;