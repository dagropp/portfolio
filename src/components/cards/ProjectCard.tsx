import React, {useEffect, useState} from "react";
import AppCard from "./AppCard";
import UiService from "../../global/UiService";
import ToolsList from "../lists/ToolsList";
import CardDescription from "./CardDescription";
import AppOverlay from "../popup/AppOverlay";
import ProjectCodeExamples from "../content-sections/ProjectCodeExamples";

interface ContainerProps {
  item: RestProject;
  index: number;
  totalProjects: number;
}

const ProjectCard: React.FC<ContainerProps> = ({item, index, totalProjects}) => {

  const {
    app_section, date_start, date_end, description, download_link, id, title, npm, site_link, tags, tools, type,
    github, skills, relation
  } = item;
  const [npmDownloads, setNpmDownloads] = useState(0);
  const [relationCard, setRelationCard] = useState<HTMLElement>();
  const [expand, setExpand] = useState(false);
  const date = UiService.parseMonths(date_start, date_end);

  const parsePosition = () => {
    const setProjectsHeight = (total: number) => {
      const rows = Math.ceil(total / 3);
      return rows * 218 + (rows - 1) * 15;
    }

    const COLUMNS = 3;
    const ROW_HEIGHT = 218 + 15;
    const COL_WIDTH = 350 + 15;
    const CONTAINER_WIDTH = 1080;
    const CONTAINER_HEIGHT = setProjectsHeight(totalProjects);

    const col = index % COLUMNS;
    const row = Math.floor(index / COLUMNS);

    const top = row * ROW_HEIGHT;
    const left = col * COL_WIDTH;
    const right = CONTAINER_WIDTH - 350 - left;
    const bottom = CONTAINER_HEIGHT - 218 - top;

    return {top, left, right, bottom}
  }

  useEffect(() => {
    if (npm) UiService.getTotalNpmDownloads(npm).then(setNpmDownloads);
  }, [npm])

  return (
    <>
      <AppOverlay
        isOpen={expand}
        setIsOpen={setExpand}
      />
      <AppCard
        className={`project-card ${app_section} ${expand ? "expand" : ""}`}
        id={id}
        onClick={() => setExpand(true)}
        style={{...parsePosition()}}
      >
        <div className="scroll-container">
          <h2 className="title">{title}</h2>
          <p className="date">{date}</p>
          <ToolsList
            className={expand ? "" : "minified"}
            tools={tools}
          />
          <CardDescription
            className={expand ? "" : "minified"}
            description={description}
          />
          {
            expand
              ? <>
                <ProjectCodeExamples projectId={item.id}/>
              </>
              : <button type="button">Show More...</button>
          }
        </div>
      </AppCard>
    </>
  )
}

export default ProjectCard;