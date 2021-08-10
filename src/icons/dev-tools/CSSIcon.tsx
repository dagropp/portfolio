import React from "react";
import SvgIconWrapper from "../SvgIconWrapper";

const CSSIcon: React.FC<IconContainerProps> = ({color = "#2a4fe1", ...rest}) => {

  return (
    <SvgIconWrapper
      className="environment-icon css"
      viewBox="0 0 26.5 30"
      title="CSS"
      color={color}
      {...rest}
    >
      <path
        className="icon-fill"
        d="M0,0l2.4,27l10.8,3L24,27l2.5-27H0z M20.9,12.2l-0.1,0.9l-0.7,8.7L20,22.4l-6.8,1.9l-6.8-1.9L6,17.2h1.5h1.8
	      l0.2,2.6l3.7,1l3.7-1l0.4-4.3h-4.1H5.8l-0.3-3.3h7.7h4.4l0.3-3.4h-4.7h-8L4.9,5.5h8.3h8.3L20.9,12.2z"
      />
      <polygon
        className="icon-highlight"
        points="17.9,8.8 13.2,8.8 13.2,12.2 17.6,12.2"
      />
      <polygon
        className="icon-highlight"
        points="13.2,2.2 13.2,5.5 21.5,5.5 20.9,12.2 20.8,13.1 20.1,21.8 20,22.4 13.2,24.3 13.2,27.7 22,25.3 24,2.2"
      />
      <polygon
        className="icon-highlight"
        points="17.3,15.5 13.2,15.5 13.2,20.8 16.9,19.8"
      />
    </SvgIconWrapper>
  )
}

export default CSSIcon;