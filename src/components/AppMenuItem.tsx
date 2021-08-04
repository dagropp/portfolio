import React from "react";
import {Link, useHistory} from "react-router-dom";
import {navService} from "../global/NavService";

interface ContainerProps {
  item: MenuItemData<AppSection>;
}

const AppMenuItem: React.FC<ContainerProps> = ({item}) => {

  const {location} = useHistory();
  const {id, path, title} = item;
  const customClass = navService.isPage(location.pathname, id) ? "active-page" : "";

  return (
    <li className={`menu-list-item ${customClass}`}>
      <Link to={path}>{title}</Link>
    </li>
  );
}

export default AppMenuItem;