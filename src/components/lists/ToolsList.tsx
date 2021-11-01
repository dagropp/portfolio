import React from "react";
import UiService from "../../global/UiService";
import ToolsListItem from "./ToolsListItem";

interface ContainerProps {
  tools: Nullable<string>;
  className?: string;
}

const ToolsList: React.FC<ContainerProps> = ({tools, className = ""}) => {

  if (!tools) return null;

  const items = UiService.getToolsList(tools).map((tool) =>
    <ToolsListItem
      key={tool}
      tool={tool}
    />
  );

  return (
    <ul className={`list-wrap tools ${className}`}>
      {items}
    </ul>
  )
}

export default ToolsList;