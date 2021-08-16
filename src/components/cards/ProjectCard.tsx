import React, {useEffect, useState} from "react";
import AppCard from "./AppCard";
import UiService from "../../global/UiService";
import {useHistory} from "react-router-dom";
import AppIcon from "../../icons/AppIcon";
import ToolsList from "../lists/ToolsList";
import LinkListItem from "../lists/LinkListItem";
import LinksList from "../lists/LinksList";
import NpmCounter from "../add-ons/NpmCounter";
import CardDescription from "./CardDescription";
import CodeSnippet from "../content-sections/CodeSnippet";
import ContentCardPopup from "../popup/ContentCardPopup";

interface ContainerProps {
  item: RestProject;
}

const ProjectCard: React.FC<ContainerProps> = ({item}) => {

  const {
    app_section, date_start, date_end, description, download_link, id, title, npm, site_link, tags, tools, type,
    github, skills, relation
  } = item;
  const [npmDownloads, setNpmDownloads] = useState(0);
  const [relationCard, setRelationCard] = useState<HTMLElement>();
  const [expand, setExpand] = useState(false);
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
    <>
      <AppCard
        className={`project-card ${app_section}`}
        id={id}
        onClick={() => setExpand(true)}
      >
        <h2>{title}</h2>
        <p>{year}</p>
        <CardDescription description={description}/>
        {npm && <NpmCounter packageName={npm}/>}
        <ToolsList tools={tools}/>
        <LinksList
          site_link={site_link}
          download_link={download_link}
          github={github}
          npm={npm}
        />
        <div className="tags-wrap">
          {tags?.split(",").map((tag: string) => <span className="tag" key={tag}># {decodeURI(tag)}</span>)}
        </div>
        {relationCard && relationCard.dataset.meta_title &&
        <div
          className=""
          onClick={highlightRelationCard}
        >As a part of: <span className="italic">{relationCard.dataset.meta_title}</span></div>}
        <CodeSnippet
          fileName="LinkedList.js"
          github="hadasim/blob/master/src/react-component/admin/gallery/DraggableImage.jsx"
        />
      </AppCard>
      <ContentCardPopup
        project={item}
        isOpen={expand}
        setIsOpen={setExpand}
      />
    </>
  )
}

export default ProjectCard;