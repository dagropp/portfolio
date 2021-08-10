import React from "react";
import AppIcon from "../../icons/AppIcon";

interface ContainerProps {
  link: string;
  title: string;
  icon: AppIconType;
}

const LinkListItem: React.FC<ContainerProps> = ({link, title, icon}) => {

  return (
    <li>
      <a
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={title}
      >
        <AppIcon
          name={icon}
          color="#ffcc70"
        />
      </a>
    </li>
  )
}

export default LinkListItem;