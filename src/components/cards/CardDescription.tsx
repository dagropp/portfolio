import React from "react";
import UiService from "../../global/UiService";

interface ContainerProps {
  description: Nullable<string>;
  className?: string;
}

const CardDescription: React.FC<ContainerProps> = ({description, className = ""}) => {

  if (!description) return <></>;

  return (
    <p
      className={`description ${className}`}
      dangerouslySetInnerHTML={UiService.parseRichTextToHtml(description)}
    />
  )
}

export default CardDescription;