import React from "react";
import UiService from "../../global/UiService";

interface ContainerProps {
  tags: Nullable<string>;
  className?: string;
}

const TagsList: React.FC<ContainerProps> = ({tags, className = ""}) => {

  if (!tags) return null;

  const items = UiService.getTagsList(tags).map((tag) =>
    <li key={tag}>
      {decodeURI(tag)}
    </li>
  );

  return (
    <ul className={`list-wrap tags ${className}`}>
      {items}
    </ul>
  )
}

export default TagsList;