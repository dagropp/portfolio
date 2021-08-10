import React from "react";
import SvgIconWrapper from "../SvgIconWrapper";

const HTMLIcon: React.FC<IconContainerProps> = ({color = "#e34a2a", ...rest}) => {

  return (
    <SvgIconWrapper
      className="environment-icon html"
      viewBox="0 0 26.4 30"
      title="HTML"
      color={color}
      {...rest}
    >
      <path
        className="icon-fill"
        d="M0,0l2.4,27l10.8,3L24,27l2.4-27H0z M21.5,6.4l-0.2,1.7l-0.1,0.7h-7.9h-0.1H8.6l0.2,3.4h4.4H20h1l-0.1,0.9
	      l-0.8,8.7L20,22.4l-6.7,1.9v0h-0.1l-6.8-1.9L6,17.2h1.5h1.7l0.2,2.6l3.8,1l3.7-1l0.4-4.3h-4.1H5.8L5,6.4L4.9,5.5h8.3h0.1
      	c0.2,0,8.3,0,8.3,0L21.5,6.4z"
      />

      <polygon
        className="icon-highlight"
        points="17.3,15.5 13.2,15.5 13.2,20.8 16.9,19.8"
      />
      <polygon
        className="icon-highlight"
        points="13.2,2.2 13.2,5.5 21.6,5.5 21.5,6.4 21.3,8.1 21.2,8.8 13.2,8.8 13.2,12.2 20,12.2 21,12.2 20.9,13.1 20.1,21.8
	    	20,22.4 13.2,24.3 13.2,27.7 21.9,25.3 24,2.2"
      />
    </SvgIconWrapper>
  )
}

export default HTMLIcon;