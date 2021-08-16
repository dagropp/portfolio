import React, {Dispatch, SetStateAction} from "react";
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
      className="contact-popup">
      {/*<ProjectCard item={project}/>*/}
      {project.title}
    </AppPopup>
  )
}

export default ContentCardPopup;