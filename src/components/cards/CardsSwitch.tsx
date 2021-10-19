import React from "react";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";
import ProjectCard from "./ProjectCard";

interface ContainerProps {
  item: RestCommon;
}

const CardsSwitch: React.FC<ContainerProps> = ({item}) => {

  switch (item.item_type) {
    case "education":
      return <EducationCard item={item as RestEducation}/>;
    case "experience":
      return <ExperienceCard item={item as RestExperience}/>;
    case "project":
      return <ProjectCard item={item as RestProject}/>;
    default:
      return null;
  }

}

export default CardsSwitch;