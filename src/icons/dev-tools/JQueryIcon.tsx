import React from "react";
import SvgIconWrapper from "../SvgIconWrapper";

const JQueryIcon: React.FC<IconContainerProps> = ({color = "#1369a9", ...rest}) => {

  return (
    <SvgIconWrapper
      className="environment-icon jquery"
      viewBox="0 0 31.1 30"
      title="jQuery"
      color={color}
      {...rest}
    >
      <path
        className="icon-fill"
        d="M2,7c-2.8,4-2.4,9.1-0.3,13.3c0.1,0.1,0.1,0.2,0.2,0.3c0,0.1,0.1,0.1,0.1,0.2c0,0,0,0.1,0.1,0.1
      	c0,0.1,0.1,0.1,0.1,0.2c0.1,0.1,0.1,0.2,0.2,0.3c0,0.1,0.1,0.1,0.1,0.2c0.1,0.1,0.2,0.2,0.2,0.4c0,0.1,0.1,0.1,0.1,0.2
        c0.1,0.2,0.2,0.3,0.3,0.5c0,0,0,0,0,0c0,0,0,0.1,0.1,0.1c0.1,0.1,0.2,0.3,0.3,0.4c0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.2,0.2,0.3,0.3
        c0,0,0.1,0.1,0.1,0.1c0.1,0.2,0.3,0.3,0.4,0.5c0,0,0,0,0,0c0,0,0,0,0,0c0.1,0.1,0.3,0.3,0.4,0.4c0,0,0.1,0.1,0.1,0.1
        C5,25,5.1,25.1,5.2,25.2c0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.3,0.3,0.4,0.4c0,0,0,0,0,0c0,0,0.1,0,0.1,0.1C6,25.9,6.2,26,6.3,26.1
        c0.1,0,0.1,0.1,0.2,0.1c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0,0.1,0.1,0.2,0.1c0.1,0.1,0.2,0.2,0.4,0.3c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0
        c0.1,0.1,0.2,0.2,0.4,0.2c0.1,0,0.1,0.1,0.2,0.1c0.2,0.1,0.4,0.2,0.6,0.3c0.1,0,0.1,0.1,0.2,0.1c0.1,0.1,0.3,0.2,0.4,0.2
        c0.1,0,0.2,0.1,0.2,0.1c0.1,0.1,0.2,0.1,0.3,0.2c0,0,0,0,0.1,0c0,0,0.1,0,0.1,0.1c0.2,0.1,0.3,0.2,0.5,0.2c0,0,0.1,0,0.1,0
        c0.2,0.1,0.4,0.2,0.6,0.2c0,0,0.1,0,0.1,0.1c0.2,0.1,0.4,0.1,0.5,0.2c0,0,0,0,0.1,0c0.2,0.1,0.4,0.1,0.6,0.2c0,0,0.1,0,0.1,0
        c0.2,0.1,0.4,0.1,0.6,0.2c13.3,2.4,17.2-8,17.2-8c-3.3,4.2-9,5.4-14.5,4.1c-0.2,0-0.4-0.1-0.6-0.2c-0.1,0-0.1,0-0.2,0
        c-0.2-0.1-0.4-0.1-0.6-0.2c0,0-0.1,0-0.1,0c-0.2-0.1-0.3-0.1-0.5-0.2c0,0-0.1,0-0.1-0.1c-0.2-0.1-0.4-0.2-0.6-0.2c0,0-0.1,0-0.1,0
        c-0.2-0.1-0.3-0.1-0.5-0.2c0,0-0.1,0-0.1-0.1c-0.1-0.1-0.2-0.1-0.4-0.2c-0.1,0-0.2-0.1-0.2-0.1c-0.1-0.1-0.3-0.2-0.4-0.2
        c0,0-0.1-0.1-0.1-0.1c-0.2-0.1-0.4-0.2-0.6-0.3c-0.1,0-0.1-0.1-0.2-0.1c-0.1-0.1-0.3-0.2-0.4-0.3c0,0-0.1-0.1-0.1-0.1
        c-0.1-0.1-0.3-0.2-0.4-0.3c-0.1,0-0.1-0.1-0.2-0.1c-0.1-0.1-0.2-0.2-0.3-0.3c-0.1,0-0.1-0.1-0.2-0.1c-0.1-0.1-0.3-0.2-0.4-0.4
        c0,0,0,0,0,0c-0.2-0.1-0.3-0.3-0.5-0.4c0,0-0.1-0.1-0.1-0.1c-0.1-0.1-0.2-0.2-0.3-0.3c0,0-0.1-0.1-0.1-0.1c-0.1-0.1-0.3-0.3-0.4-0.4
        c0,0,0,0,0,0c-0.1-0.2-0.3-0.3-0.4-0.5c0,0-0.1-0.1-0.1-0.1c-0.1-0.1-0.2-0.2-0.3-0.4c0,0-0.1-0.1-0.1-0.1c-0.1-0.1-0.2-0.3-0.3-0.4
        C2.8,14.7,1.7,9,4.1,4.3"
      />
      <path
        className="icon-fill"
        d="M10.5,3.7c-2,2.9-1.9,6.7-0.3,9.7c0.3,0.5,0.6,1,0.9,1.5c0.3,0.4,0.6,0.9,1,1.3
        c0.1,0.2,0.3,0.3,0.4,0.5c0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.3,0.3,0.5,0.4c0,0,0,0,0,0c0,0,0,0,0,0c0.2,0.2,0.4,0.3,0.5,0.4
        c0,0,0.1,0.1,0.1,0.1c0.2,0.1,0.4,0.3,0.6,0.4c0,0,0,0,0,0c0.1,0.1,0.2,0.1,0.3,0.2c0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.3,0.2,0.4,0.3
        c0,0,0,0,0.1,0c0.1,0.1,0.2,0.1,0.4,0.2c0,0,0.1,0,0.1,0.1c0.1,0,0.2,0.1,0.3,0.1c0,0,0,0,0,0c0.2,0.1,0.4,0.2,0.5,0.2
        c0,0,0.1,0,0.1,0c0.1,0.1,0.3,0.1,0.4,0.2c0.1,0,0.1,0,0.2,0.1c0.1,0,0.3,0.1,0.4,0.1c0.1,0,0.1,0,0.2,0.1c0.2,0.1,0.4,0.1,0.6,0.2
        c10.3,1.7,12.7-6.2,12.7-6.2c-2.1,3.1-6.3,4.6-10.7,3.4c-0.2-0.1-0.4-0.1-0.6-0.2c-0.1,0-0.1,0-0.2-0.1c-0.1,0-0.3-0.1-0.4-0.1
        c-0.1,0-0.1,0-0.2-0.1c-0.1-0.1-0.3-0.1-0.4-0.2c0,0-0.1,0-0.1-0.1c-0.2-0.1-0.4-0.2-0.5-0.2c-0.1,0-0.2-0.1-0.3-0.1
        c-0.1,0-0.1-0.1-0.2-0.1c-0.1-0.1-0.2-0.1-0.3-0.2c0,0-0.1,0-0.1,0c-0.1-0.1-0.3-0.2-0.4-0.3c0,0-0.1-0.1-0.1-0.1
        c-0.1-0.1-0.2-0.1-0.3-0.2c-0.2-0.1-0.4-0.3-0.6-0.4c0,0-0.1-0.1-0.1-0.1c-1.9-1.5-3.5-3.6-4.2-6c-0.8-2.5-0.6-5.2,0.7-7.5"
      />
      <path
        className="icon-fill"
        d="M17.7,1.2c-1.2,1.7-1.3,3.9-0.5,5.8c0.9,2,2.6,3.6,4.7,4.4c0.1,0,0.2,0.1,0.3,0.1
        c0,0,0.1,0,0.1,0c0.1,0,0.2,0.1,0.4,0.1c5.7,1.1,7.2-2.9,7.6-3.5c-1.4,1.9-3.6,2.4-6.4,1.7c-0.2-0.1-0.5-0.1-0.7-0.2
        c-0.3-0.1-0.5-0.2-0.8-0.3c-0.5-0.2-1-0.5-1.4-0.9c-2.5-1.9-4-5.5-2.4-8.4"
      />
    </SvgIconWrapper>
  )
}

export default JQueryIcon;