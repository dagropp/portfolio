import React, {useEffect, useRef, useState} from "react";
import AppIcon from "../../icons/AppIcon";
import {useRecoilValue} from "recoil";
import {appDataState} from "../../global/recoil/atoms";
import {useHistory, useParams} from "react-router-dom";
import UiService from "../../global/UiService";

interface ContainerProps {
  tool: AppIconType;
}

const ToolsListItem: React.FC<ContainerProps> = ({tool}) => {

  const [active, setActive] = useState(false);
  const {education, experience, projects} = useRecoilValue(appDataState);
  const activeWrapper = useRef<HTMLDivElement>(null);
  const icons: RestCollection<string, RestItemType> = {education: "👨‍🎓", experience: "👷‍♂️", project: "📜"};
  const {id: pageId} = useParams<{ id: string }>();
  const history = useHistory();

  const goToPage = (path: string) => {
    setActive(false);
    history.push(path);
  }

  useEffect(() => {
    if (active) document.onmousedown = (event: Event) => {
      if (!activeWrapper.current?.contains(event.target as Node)) setActive(false);
    }
  }, [active]);

  const relatedProjects = [...education, ...experience, ...projects]
    .filter(({tools, id}) => UiService.getToolsList(tools ?? "").includes(tool) && id !== pageId)
    .map(({title, id, item_type}) =>
      <li className={item_type} key={id}>
        <button
          className="app-button list-button"
          onMouseDown={() => goToPage(`/${item_type}_page/${id}`)}
        >{icons[item_type]} {title}</button>
      </li>
    )

  return <li onClick={() => setActive(true)}>
    <AppIcon
      name={tool}
    />
    {active &&
    <div
        ref={activeWrapper}
        className="active-wrapper absolute"
    >
        <AppIcon
            name={tool}
            className="active"
        />
        <ul className="tool-projects-list">
          {relatedProjects}
        </ul>
    </div>}

  </li>
}

export default ToolsListItem;