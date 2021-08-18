import React, {useEffect, useRef, useState} from "react";
import AppCard from "./AppCard";
import UiService from "../../global/UiService";
import ToolsList from "../lists/ToolsList";
import CardDescription from "./CardDescription";
import AppOverlay from "../popup/AppOverlay";
import ProjectCodeExamples from "../content-sections/ProjectCodeExamples";
import BackIcon from "../../icons/button/BackIcon";
import NpmCounter from "../add-ons/NpmCounter";

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
  const [expandStyle, setExpandStyle] = useState<any>({});
  const cardRef = useRef<HTMLDivElement>(null);
  const expandRef = useRef<HTMLDivElement>(null);
  const date = UiService.parseMonths(date_start, date_end);

  useEffect(() => {
    if (npm) UiService.getTotalNpmDownloads(npm).then(setNpmDownloads);
  }, [npm])

  useEffect(() => {
    if (expandRef.current) {

    }
  }, [expandRef.current])

  useEffect(() => {
    if (expand) {
      const rect = cardRef.current?.getBoundingClientRect();
      if (rect && expandRef.current) {
        const top = rect.top + "px";
        const bottom = (window.innerHeight - rect.bottom) + "px";
        let left, right, borderRadius, start: Keyframe;

        if (UiService.isMobile()) {
          left = right = "15px";
          borderRadius = "10px";
          const scaleX = (window.innerWidth - 30) / window.innerWidth;
          const scaleY = 218 / window.innerHeight;
          start = {transform: `scaleX(${scaleX}) scaleY(${scaleY})`, borderRadius, opacity: "0"}
          // expandRef.current.style.transform = `scaleX(${scaleX}) scaleY(${scaleY})`;
          expandRef.current.style.transformOrigin = `center ${rect.bottom - (218)}px`;
        } else {
          left = rect.left + "px";
          right = (window.innerWidth - 15 - rect.right) + "px";
          borderRadius = "";
          start = {top, left, bottom, right, pointerEvents: "none", borderRadius};
        }
        const end: Keyframe = {};

        expandRef.current.animate?.([start, start, end], {duration: 500, easing: "ease-in-out"});
      }
    }
  }, [expand])

  return (
    <>
      <AppOverlay
        isOpen={expand}
        setIsOpen={setExpand}
        hideOverlay
      />
      <AppCard
        className={`project-card ${expand ? "hide" : ""}`}
        id={id}
        onClick={() => setExpand(true)}
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
      {expand
      &&
      <AppCard
        className="project-card expand"
        id={id}
        style={expandStyle}
        cardRef={expandRef}
      >
        <div className="project-head">
          <button
            className="app-button transparent back-button"
            type="button"
            onClick={() => setExpand(false)}
          ><BackIcon/></button>
          <h2 className="title">{title}</h2>
        </div>
        <div className="project-body">
          <p className="date">{date}</p>
          <ToolsList
            tools={tools}
          />
          <CardDescription
            description={description}
          />
          {npm && <NpmCounter packageName={npm}/>}
          <ProjectCodeExamples
            projectId={item.id}
          />
        </div>
      </AppCard>
      }
    </>
  )
}

export default ProjectCard;