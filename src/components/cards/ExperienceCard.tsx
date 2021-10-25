import React from "react";
import AppCard from "./AppCard";
import UiService from "../../global/UiService";
import ToolsList from "../lists/ToolsList";
import CardDescription from "./CardDescription";

interface ContainerProps {
  item: RestExperience;
}

const ExperienceCard: React.FC<ContainerProps> = ({item}) => {
  const {company, description, title, tools, date_start, date_end, id} = item;
  const date = UiService.parseYears(date_start, date_end);

  return (
    <AppCard
      className="experience-card"
      id={id}
      metaTitle={`${title}, ${company}`}
      href={"/experience_page/" + id}
    >
      <h2 className="title">{title}</h2>
      <p className="date">{date}</p>
      <ToolsList
        className="minified"
        tools={tools}
      />
      <CardDescription
        className="minified"
        description={description}
      />
    </AppCard>
  )
}

export default ExperienceCard;