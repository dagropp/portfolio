import React, {useEffect, useState} from "react";
import {navService} from "../global/NavService";
import "../style/main-menu.scss";
import AppMenuItem from "./AppMenuItem";
import {useLocation} from "react-router-dom";

const AppMenu: React.FC = () => {

  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.pageYOffset > 0);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [])

  const items = navService.menuItems
    .filter((item) => !item.hidden)
    .map((item) =>
      <AppMenuItem
        key={item.id}
        item={item}
      />
    )

  return (
    location.pathname.includes("admin")
      ?
      <></>
      :
      <header className={`main-header ${scrolled ? "scrolled" : ""}`}>
        <nav className="menu-wrapper">
          <ul className="menu-list">
            {items}
          </ul>
        </nav>
      </header>
  )
}

export default AppMenu;