import React, {useEffect, useState} from "react";
import AppCard from "./AppCard";
import UiService from "../../global/UiService";
import AppIcon from "../AppIcon";
import {useHistory} from "react-router-dom";

interface ContainerProps {
  item: RestProject;
}

const ProjectCard: React.FC<ContainerProps> = ({item}) => {

  const {
    app_section, date_start, date_end, description, download_link, id, title, npm, site_link, tags, tools, type, github,
    relation
  } = item;
  const [npmDownloads, setNpmDownloads] = useState(0);
  const [relationCard, setRelationCard] = useState<HTMLElement>();
  const year = UiService.parseMonths(date_start, date_end);
  const history = useHistory();

  const pulsateForwardAnimation: Keyframe[] = [
    {transform: "scale(1)"},
    {transform: "scale(1.1)"},
    {transform: "scale(1)"}
  ]

  useEffect(() => {
    if (npm) UiService.getTotalNpmDownloads(npm).then(setNpmDownloads);
  }, [npm])

  useEffect(() => {
    if (relation) {
      window.requestAnimationFrame(() => {
        const card = document.getElementById(relation) as HTMLElement;
        if (card) setRelationCard(card);
      })
    }
  }, [relation])

  const highlightRelationCard = () => {
    const card = relationCard as HTMLElement;
    history.push(history.location.pathname + "#" + relation)
    setTimeout(() => {
      console.log(card.getBoundingClientRect().top)
      window.scroll({top: window.pageYOffset - 100});
    })
    const animation = card.animate?.(pulsateForwardAnimation, {
      duration: 500, iterations: 3, fill: "both", easing: "ease-in-out"
    });
    // animation?.finished.then(() => window.location.hash = "")
  }


  return (
    <AppCard className={`project-card ${app_section}`} id={id}>
      <AppIcon name={type}/>
      <h2>{title}</h2>
      <p>{year}</p>
      {description && <p>{description}</p>}
      {npmDownloads > 100 && <p className="bold underline">Total npm downloads {npmDownloads}</p>}
      <p>{tools?.split(",").join(" | ")}</p>
      <div className="links-wrap" hidden={!site_link && !download_link && !npm && !github}>
        {site_link && <a href={site_link} target="_blank" rel="noreferrer noopener">Site</a>}
        {download_link && <a href={download_link} download target="_blank" rel="noreferrer noopener">Download</a>}
        {github &&
        <a href={`https://github.com/dagropp/${github}`} target="_blank" rel="noreferrer noopener">GitHub</a>}
        {npm && <a href={`https://www.npmjs.com/package/${npm}`} target="_blank" rel="noreferrer noopener">npm</a>}
      </div>
      <div className="tags-wrap">
        {tags?.split(",").map((tag: string) => <span className="tag" key={tag}>#<AppIcon name={tag}/> {tag}</span>)}
      </div>
      {relationCard && relationCard.dataset.meta_title &&
      <div
          className=""
          onClick={highlightRelationCard}
      >As a part of: <span className="italic">{relationCard.dataset.meta_title}</span></div>}
    </AppCard>
  )
}

export default ProjectCard;