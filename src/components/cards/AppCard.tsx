import React, {MouseEventHandler} from "react";

interface ContainerProps {
  id: string;
  className?: string;
  metaTitle?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const AppCard: React.FC<ContainerProps> = ({children, id, metaTitle, className = "", onClick}) => {

  return (
    <div
      className={`app-card ${className}`}
      id={id}
      data-meta_title={metaTitle}
      onClick={onClick}
    >
      <div className="app-card-inner">
        {children}
      </div>
    </div>
  )
}

export default AppCard;