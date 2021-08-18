import React, {HTMLProps, RefObject} from "react";

interface ContainerProps extends HTMLProps<HTMLDivElement> {
  metaTitle?: string;
  cardRef?: RefObject<HTMLDivElement>;
}

const AppCard: React.FC<ContainerProps> = ({children, metaTitle, className = "", cardRef, ...rest}) => {

  return (
    <div
      className={`app-card ${className}`}
      data-meta_title={metaTitle}
      ref={cardRef}
      {...rest}
    >
      <div className="app-card-inner">
        {children}
      </div>
    </div>
  )
}

export default AppCard;