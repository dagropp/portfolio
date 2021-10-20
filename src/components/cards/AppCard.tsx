import React, {HTMLProps} from "react";
import {Link} from "react-router-dom";

interface ContainerProps {
  metaTitle?: string;
  href: string;
  id: string;
  className?: string;
}

const AppCard: React.FC<ContainerProps> = ({children, metaTitle, id, href, className = ""}) => {

  return (
    <Link
      to={href}
      id={id}
      className={`app-card ${className}`}
      data-meta_title={metaTitle}
    >
      <div className="app-card-inner">
        {children}
      </div>
    </Link>
  )
}

export default AppCard;