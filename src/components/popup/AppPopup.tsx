import React, {Dispatch, SetStateAction} from "react";
import AppOverlay from "./AppOverlay";

interface ContainerProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  className?: string;
}

const AppPopup: React.FC<ContainerProps> = ({children, isOpen, setIsOpen, className = ""}) => {

  return (
    <AppOverlay isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className={`app-popup ${className}`}>
        {children}
      </div>
    </AppOverlay>
  )
}

export default AppPopup;