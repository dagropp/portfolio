import React, {Dispatch, SetStateAction, useEffect, useRef} from "react";
import AppPopup from "./AppPopup";

interface ContainerProps {
  project: RestProject;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ContentCardPopup: React.FC<ContainerProps> = ({project, isOpen, setIsOpen}) => {

  return (
    <AppPopup
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      hideOverlay
      className="content-popup">
      {/*<ProjectCard item={project}/>*/}
      {/*{project.title}*/}
    </AppPopup>
  )
}

export default ContentCardPopup;