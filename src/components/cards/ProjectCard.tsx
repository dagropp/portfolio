import React, {useEffect, useRef, useState} from "react";
import AppCard from "./AppCard";
import UiService from "../../global/UiService";
import ToolsList from "../lists/ToolsList";
import CardDescription from "./CardDescription";
import AppOverlay from "../popup/AppOverlay";
import ProjectCodeExamples from "../content-sections/ProjectCodeExamples";
import BackIcon from "../../icons/button/BackIcon";
import NpmCounter from "../add-ons/NpmCounter";
import SkillsList from "../lists/SkillsList";
import LinksList from "../lists/LinksList";
import TagsList from "../lists/TagsList";

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
    if (expand) {
      const rect = cardRef.current?.getBoundingClientRect();
      if (rect && expandRef.current) {

        let {bottom, top, left} = rect;

        if (UiService.isMobile()) {
          const vertical = top / window.innerHeight * 100 * 1.37;
          expandRef.current.style.transformOrigin = `center ${vertical}%`;
        } else {
          top = top - 80;
          left = left - ((window.innerWidth - 1080) / 2);
          const horizontal = Math.floor((left + 175) / 1080 * 3);
          const vertical = Math.floor((top + 109) / 684 * 3);
          const parts: any = {0: "0", 1: "50%", 2: "100%"}
          expandRef.current.style.transformOrigin = `${parts[horizontal]} ${parts[vertical]}`;
        }
      }
    }
  }, [expand])

  return (
    <>
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
      <AppOverlay
        isOpen={expand}
        setIsOpen={setExpand}
        hideOverlay
      >
        {expand &&
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
            <TagsList
              tags={tags}
            />
            <ProjectCodeExamples
              project={item}
            />
          </div>
          <footer className="project-footer">
            <LinksList
              download_link={download_link}
              github={github}
              npm={npm}
              site_link={site_link}
            />
          </footer>
        </AppCard>
        }
      </AppOverlay>
    </>
  )
}

export default ProjectCard;