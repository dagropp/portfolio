import React from "react";
import UiService from "../../global/UiService";

interface ContainerProps {
  description: Nullable<string>;
}

const CardDescription: React.FC<ContainerProps> = ({description}) => {

  if (!description) return <></>;

  return (
    <div>
      <p dangerouslySetInnerHTML={UiService.parseRichTextToHtml(description)}/>
    </div>
  )
}

export default CardDescription;