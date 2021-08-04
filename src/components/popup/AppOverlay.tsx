import React, {Dispatch, MouseEventHandler, SetStateAction, useEffect} from "react";

interface ContainerProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const AppOverlay: React.FC<ContainerProps> = ({children, isOpen, setIsOpen}) => {

  useEffect(() => {
    document.body.classList.toggle("disable-scroll", isOpen);
  }, [isOpen])

  const overlayClick: MouseEventHandler<HTMLElement> = (event) => {
    if ((event.target as HTMLElement).id === "app_overlay") setIsOpen(false);
  }

  return (
    <div
      id="app_overlay"
      onClick={overlayClick}
      className={`app-overlay flex-row-centered ${isOpen ? "is-open" : ""}`}
    >{children}</div>
  )
}

export default AppOverlay;