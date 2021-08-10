import React from "react";
import AppCard from "./AppCard";
import UiService from "../../global/UiService";
import ToolsList from "../lists/ToolsList";

interface ContainerProps {
  item: RestEducation;
}

const EducationCard: React.FC<ContainerProps> = ({item}) => {

  const {title, app_section, description, institution, tools, year_end, year_start, id} = item;
  const year = UiService.parseYears(year_start, year_end);

  return (
    <AppCard className={`education-card ${app_section}`} id={id} metaTitle={`${title}, ${institution}`}>
      <h2>{title}</h2>
      <h3>🎓 {institution}</h3>
      <p>{year}</p>
      {description && <p>{description}</p>}
      <ToolsList tools={tools}/>
    </AppCard>
  )
}

export default EducationCard;