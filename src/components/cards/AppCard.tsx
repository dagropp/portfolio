import React from "react";

interface ContainerProps {
  id: string;
  className?: string;
  metaTitle?: string;
}

const AppCard: React.FC<ContainerProps> = ({children, id, metaTitle, className = ""}) => {
  return (
    <div className={`app-card ${className}`} id={id} data-meta_title={metaTitle}>
      <div className="app-card-inner">
        {children}
      </div>
    </div>
  )
}

export default AppCard;