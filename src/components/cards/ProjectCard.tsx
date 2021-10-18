import React, {useRef} from "react";
import AppCard from "./AppCard";
import UiService from "../../global/UiService";
import ToolsList from "../lists/ToolsList";
import CardDescription from "./CardDescription";
import {useHistory} from "react-router-dom";

interface ContainerProps {
  item: RestProject;
}

const ProjectCard: React.FC<ContainerProps> = ({item}) => {

  const {
    app_section, date_start, date_end, description, download_link, id, title, npm, site_link, tags, tools, type,
    github, skills, relation
  } = item;
  const cardRef = useRef<HTMLDivElement>(null);
  const date = UiService.parseMonths(date_start, date_end);
  const history = useHistory();

  const goToProject = () => {
    history.push({pathname: "/project/" + id, state: {item}});
  }

  return (
    <AppCard
      className="project-card"
      id={id}
      onClick={goToProject}
      cardRef={cardRef}
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
      >Show More...
      </button>
    </AppCard>
  )
}

export default ProjectCard;