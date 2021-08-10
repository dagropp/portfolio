import React from "react";
import SvgIconWrapper from "../SvgIconWrapper";

const JavaScriptIcon: React.FC<IconContainerProps> = ({color = "#f6df33", ...rest}) => {

  return (
    <SvgIconWrapper
      className="environment-icon javascript"
      viewBox="0 0 30 30"
      title="JavaScript"
      color={color}
      {...rest}
    >
      <path
        className="icon-fill"
        d="M0,0v30h30V0H0z M16.3,23.3c0,2.9-1.7,4.2-4.2,4.2c-2.2,0.1-3.5-1-4.2-2.4l2.3-1.4c0.4,0.8,0.8,1.4,1.8,1.4
        c0.9,0,1.5-0.4,1.5-1.8v-9.6h2.8V23.3z M22.9,27.7c-2.5-0.1-4.2-1.3-5-2.9l2.3-1.3c0.6,1,1.4,1.7,2.8,1.7c1.2,0,1.9-0.6,1.9-1.4
        c0-1-0.8-1.3-2.1-1.9l-0.7-0.3c-2-0.9-3.4-2-3.4-4.2c0-2.1,1.6-3.7,4.1-3.7c1.8,0,3.1,0.6,4,2.3l-2.2,1.4c-0.5-0.9-1-1.2-1.8-1.2
        s-1.3,0.5-1.3,1.2c0,0.8,0.5,1.2,1.7,1.7l0.7,0.3c2.4,1,3.7,2.1,3.7,4.4C27.6,26.3,25.6,27.7,22.9,27.7z"
      />
    </SvgIconWrapper>
  )
}

export default JavaScriptIcon;