import React from "react";
import SvgIconWrapper from "../SvgIconWrapper";

const GitIcon: React.FC<IconContainerProps> = ({color = "#F05133", ...rest}) => {

  return (
    <SvgIconWrapper
      className="environment-icon javascript"
      viewBox="0 0 30 30"
      title="Git"
      color={color}
      {...rest}
    >
      <path
        className="st0"
        d="M29.4,13.7L16.3,0.6c-0.8-0.8-2-0.8-2.7,0l-2.7,2.7l3.5,3.5c0.8-0.3,1.7-0.1,2.4,0.6c0.6,0.6,0.8,1.6,0.5,2.4
        l3.3,3.3c0.8-0.3,1.7-0.1,2.4,0.5c0.9,0.9,0.9,2.4,0,3.3c-0.9,0.9-2.4,0.9-3.3,0c-0.7-0.7-0.8-1.7-0.5-2.5l-3.1-3.1v8.2
        c0.2,0.1,0.4,0.3,0.6,0.4c0.9,0.9,0.9,2.4,0,3.3c-0.9,0.9-2.4,0.9-3.3,0c-0.9-0.9-0.9-2.4,0-3.3c0.2-0.2,0.5-0.4,0.8-0.5V11
        c-0.3-0.1-0.5-0.3-0.8-0.5c-0.7-0.7-0.8-1.7-0.5-2.5L9.5,4.6l-9,9c-0.8,0.8-0.8,2,0,2.7l13.1,13.1c0.8,0.8,2,0.8,2.7,0l13-13
        C30.2,15.6,30.2,14.4,29.4,13.7z"
      />
    </SvgIconWrapper>
  )
}

export default GitIcon;