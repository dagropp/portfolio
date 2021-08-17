import React, {Dispatch, RefObject, SetStateAction} from "react";
import AppOverlay from "./AppOverlay";

interface ContainerProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  hideOverlay?: boolean;
  className?: string;
  popupRef?: RefObject<HTMLDivElement>;
}

const AppPopup: React.FC<ContainerProps> = ({children, isOpen, setIsOpen, hideOverlay, popupRef, className = ""}) => {

  return (
    <AppOverlay
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      hideOverlay={hideOverlay}
    >
      <div className={`app-popup ${className}`} ref={popupRef}>
        {children}
      </div>
    </AppOverlay>
  )
}

export default AppPopup;