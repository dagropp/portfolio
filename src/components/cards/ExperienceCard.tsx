import React from "react";
import AppCard from "./AppCard";
import UiService from "../../global/UiService";
import LinksList from "../lists/LinksList";
import ToolsList from "../lists/ToolsList";

interface ContainerProps {
  item: RestExperience;
}

const ExperienceCard: React.FC<ContainerProps> = ({item}) => {
  const {app_link, app_section, company, description, link, position, tags, tools, year_start, year_end, id} = item;
  const year = UiService.parseYears(year_start, year_end);

  return (
    <AppCard className={`experience-card ${app_section}`} id={id} metaTitle={`${position}, ${company}`}>
      <h2>{position}</h2>
      <h3>{company}</h3>
      <p>{year}</p>
      {description && <p>{description}</p>}
      <ToolsList tools={tools}/>
      <LinksList
        site_link={link}
        app_link={app_link}
      />
      <div className="tags-wrap">
        {tags?.split(",").map((tag: string) => <span className="tag" key={tag}># {tag}</span>)}
      </div>
    </AppCard>
  )
}

export default ExperienceCard;