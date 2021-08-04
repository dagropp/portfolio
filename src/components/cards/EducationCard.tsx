import React from "react";
import AppCard from "./AppCard";
import UiService from "../../global/UiService";
import AppIcon from "../AppIcon";

interface ContainerProps {
  item: RestEducation;
}

const EducationCard: React.FC<ContainerProps> = ({item}) => {
  const {title, app_section, degree, description, institution, tools, year_end, year_start, id} = item;
  const year = UiService.parseYears(year_start, year_end);

  return (
    <AppCard className={`education-card ${app_section}`} id={id} metaTitle={`${title}, ${institution}`}>
      <AppIcon name={degree}/>
      <h2>{title}</h2>
      <h3>{institution}</h3>
      <p>{year}</p>
      {description && <p>{description}</p>}
      <p>{tools?.split(",").join(" | ")}</p>
    </AppCard>
  )
}

export default EducationCard;