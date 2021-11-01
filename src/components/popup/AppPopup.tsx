import React, {RefObject} from "react";
import AppOverlay from "./AppOverlay";

interface ContainerProps {
  isOpen: boolean;
  closePopup(): void;
  hideOverlay?: boolean;
  className?: string;
  popupRef?: RefObject<HTMLDivElement>;
}

const AppPopup: React.FC<ContainerProps> = ({children, isOpen, closePopup, hideOverlay, popupRef, className = ""}) => {

  return (
    <AppOverlay
      isOpen={isOpen}
      closePopup={closePopup}
      hideOverlay={hideOverlay}
    >
      <div className={`app-popup ${className}`} ref={popupRef}>
        {children}
      </div>
    </AppOverlay>
  )
}

export default AppPopup;