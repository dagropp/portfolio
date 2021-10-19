import React from "react";
import AppCard from "./AppCard";
import UiService from "../../global/UiService";
import ToolsList from "../lists/ToolsList";
import CardDescription from "./CardDescription";

interface ContainerProps {
  item: RestProject;
}

const ProjectCard: React.FC<ContainerProps> = ({item}) => {

  const {date_start, date_end, description, id, title, tools} = item;
  const date = UiService.parseMonths(date_start, date_end);

  return (
    <AppCard
      className="project-card"
      id={id}
      href={"/project_page/" + id}
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
      <button
        className="app-button clear"
        type="button"
      >Show More...</button>
    </AppCard>
  )
}

export default ProjectCard;