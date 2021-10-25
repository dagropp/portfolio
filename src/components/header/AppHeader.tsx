import React from "react";
import "../../style/main-menu.scss";
import ThemeToggle from "./ThemeToggle";

const AppHeader: React.FC = () => {

  return (
    <header className="main-header">
      <ThemeToggle/>
    </header>
  )
}

export default AppHeader;