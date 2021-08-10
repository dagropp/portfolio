import React from "react";
import SvgIconWrapper from "../SvgIconWrapper";

const AngularJsIcon: React.FC<IconContainerProps> = ({color = "#db253b", ...rest}) => {

  return (
    <SvgIconWrapper
      className="environment-icon angularjs"
      viewBox="0 0 28.3 30"
      title="AngularJS"
      color={color}
      {...rest}
    >
      <polygon
        className="icon-fill"
        points="11.4,15.8 16.9,15.8 14,9.7"
      />
      <path
        className="icon-fill"
        d="M14,0L0,5l2.1,18.4L14,30l12-6.7l2.3-18.4L14,0z M19.9,22.8L18,18.4h-7.8l-1.7,4.4l-3.2,0.1L14,3.5l9,19.4 L19.9,22.8z"
      />

      <polygon
        className="icon-shade"
        points="14,9.7 14,15.8 16.9,15.8"
      />
      <polygon
        className="icon-shade"
        points="14,0 14,3.5 23,22.9 19.9,22.8 18,18.4 14,18.4 14,30 26,23.4 28.3,4.9"
      />
    </SvgIconWrapper>
  )
}

export default AngularJsIcon;