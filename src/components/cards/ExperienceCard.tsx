import React from "react";
import AppCard from "./AppCard";
import {parseMonths} from "../../global/DateService";
import ToolsList from "../lists/ToolsList";
import CardDescription from "./CardDescription";

interface ContainerProps {
  item: RestExperience;
}

const ExperienceCard: React.FC<ContainerProps> = ({item}) => {
  const {company, description, title, tools, date_start, date_end, id, logo} = item;
  const date = parseMonths(date_start, date_end);

  return (
    <AppCard
      className="experience-card"
      id={id}
      metaTitle={`${title}, ${company}`}
      href={"/experience_page/" + id}
    >
      <h3 className="title">{title}</h3>
      <h4 className="company">{company}</h4>
      <p className="date">{date}</p>
      <ToolsList
        className="minified"
        tools={tools}
      />
      <CardDescription
        description={description}
      />
      <div
        className="logo"
        style={{backgroundImage: `url("${logo}")`}}
      />
    </AppCard>
  )
}

export default ExperienceCard;