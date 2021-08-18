import React from "react";
import SvgIconWrapper from "../SvgIconWrapper";

const BackIcon: React.FC<IconContainerProps> = ({...rest}) => {
  return (
    <SvgIconWrapper
      viewBox="0 0 512 512"
      className="button-icon back"
      {...rest}
    >
      <polyline
        points="328 112 184 256 328 400"
        style={{fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 48}}
      />
    </SvgIconWrapper>
  )
}

export default BackIcon;