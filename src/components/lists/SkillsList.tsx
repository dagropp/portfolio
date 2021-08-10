import React from "react";

interface ContainerProps {
  skills: Nullable<string>;
}

const SkillsList: React.FC<ContainerProps> = ({skills}) => {

  if (!skills) return <></>;

  skills.split('')

  return (
    <ul>d</ul>
  )
}

export default SkillsList;