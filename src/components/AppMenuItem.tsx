import React from "react";
import {Link, useLocation} from "react-router-dom";
import {navService} from "../global/NavService";

interface ContainerProps {
  item: MenuItemData<AppSection>;
}

const AppMenuItem: React.FC<ContainerProps> = ({item}) => {

  const {pathname} = useLocation();
  const {id, path, title} = item;
  const customClass = navService.isPage(pathname, id) ? "active-page" : "";

  return (
    <li className={`menu-list-item ${customClass}`}>
      <Link to={path}>{title}</Link>
    </li>
  );
}

export default AppMenuItem;