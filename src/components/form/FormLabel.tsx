import React from "react";

interface ContainerProps {
  htmlFor: string;
  className?: string;
  title?: string;
  required?: boolean;
  readOnly?: boolean;
}

const FormLabel: React.FC<ContainerProps> = ({htmlFor, className = "", title, required, readOnly, children}) => {

  return (
    <label
      htmlFor={htmlFor}
      className={`${className} ${required ? "required" : ""} ${readOnly ? "readonly" : ""}`}
    >
      {title && <span>{title}</span>}
      {children}
    </label>
  )
}

export default FormLabel;