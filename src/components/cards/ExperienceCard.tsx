import React from "react";
import AppCard from "./AppCard";
import UiService from "../../global/UiService";
import AppIcon from "../AppIcon";

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
      <p>{tools?.split(",").join(" | ")}</p>
      <div className="links-wrap" hidden={!link && !app_link}>
        {link && <a href={link} target="_blank" rel="noreferrer noopener">Company Site</a>}
        {app_link && <a href={app_link} target="_blank" rel="noreferrer noopener">Company App</a>}
      </div>
      <div className="tags-wrap">
        {tags?.split(",").map((tag: string) => <span className="tag" key={tag}>#<AppIcon name={tag}/> {tag}</span>)}
      </div>
    </AppCard>
  )
}

export default ExperienceCard;