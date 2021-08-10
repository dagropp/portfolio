import React from "react";
import SvgIconWrapper from "../SvgIconWrapper";

const IonicIcon: React.FC<IconContainerProps> = ({color = "#3a82fc", ...rest}) => {

  return (
    <SvgIconWrapper
      className="environment-icon ionic"
      viewBox="0 0 30 30"
      title="Ionic"
      color={color}
      {...rest}
    >
      <path
        className="icon-fill"
        d="M15,8.2c-3.8,0-6.8,3.1-6.8,6.8c0,3.8,3.1,6.8,6.8,6.8s6.8-3.1,6.8-6.8l0,0 C21.8,11.2,18.8,8.2,15,8.2z"
      />
      <circle
        className="icon-fill"
        cx="24.8"
        cy="5.7"
        r="3.1"
      />
      <path
        className="icon-fill"
        d="M28.6,8.8l-0.1-0.3l-0.2,0.2c-0.5,0.6-1.2,1-1.9,1.3l-0.2,0.1l0.1,0.2c2.6,6.3-0.4,13.4-6.6,16
	      c-6.3,2.6-13.4-0.4-16-6.6S4,6.3,10.3,3.7c3.2-1.3,6.8-1.2,10,0.2L20.4,4l0.1-0.2c0.3-0.7,0.8-1.3,1.4-1.8l0.2-0.2l-0.3-0.1
	      C19.8,0.6,17.4,0,15,0C6.7,0,0,6.7,0,15s6.7,15,15,15s15-6.7,15-15C30,12.9,29.5,10.7,28.6,8.8L28.6,8.8z"
      />
    </SvgIconWrapper>
  )
}

export default IonicIcon;