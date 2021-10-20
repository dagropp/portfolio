import React from "react";
import UiService from "../../global/UiService";
import AppIcon from "../../icons/AppIcon";

interface ContainerProps {
  tools: Nullable<string>;
  className?: string;
}

const ToolsList: React.FC<ContainerProps> = ({tools, className = ""}) => {

  if (!tools) return null;

  const items = UiService.getToolsList(tools).map((tool) =>
    <li key={tool}>
      <AppIcon name={tool}/>
    </li>
  );

  return (
    <ul className={`list-wrap tools ${className}`}>
      {items}
    </ul>
  )
}

export default ToolsList;