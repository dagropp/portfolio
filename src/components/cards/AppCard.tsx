import React, {HTMLProps, MouseEventHandler} from "react";

interface ContainerProps extends HTMLProps<HTMLDivElement> {
  metaTitle?: string;
}

const AppCard: React.FC<ContainerProps> = ({children, metaTitle, className = "", ...rest}) => {

  return (
    <div
      className={`app-card ${className}`}
      data-meta_title={metaTitle}
      {...rest}
    >
      <div className="app-card-inner">
        {children}
      </div>
    </div>
  )
}

export default AppCard;