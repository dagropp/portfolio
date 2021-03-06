import React, {MouseEventHandler, useEffect} from "react";

interface ContainerProps {
  isOpen: boolean;
  closePopup(): void;
  hideOverlay?: boolean;
}

const AppOverlay: React.FC<ContainerProps> = ({children, isOpen, closePopup, hideOverlay}) => {

  useEffect(() => {
    document.body.classList.toggle("disable-scroll", isOpen);
  }, [isOpen])

  const overlayClick: MouseEventHandler<HTMLElement> = (event) => {
    if ((event.target as HTMLElement).id === "app_overlay") closePopup();
  }

  return (
    <div
      id="app_overlay"
      onClick={overlayClick}
      className={`app-overlay ${isOpen ? "is-open" : ""} ${hideOverlay ? "transparent" : ""}`}
    >{children}</div>
  )
}

export default AppOverlay;