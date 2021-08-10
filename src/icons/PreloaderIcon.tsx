import React from "react";
import SvgIconWrapper from "./SvgIconWrapper";

const PreloaderIcon: React.FC = () => {
  return (
    <SvgIconWrapper viewBox="0 0 100 100">
      <g transform="translate(0 -7.5)">
        <circle cx="50" cy="41" r="10" fill="#fff" fillOpacity="0.25">
          <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1"
                            values="0 50 50;360 50 50"/>
          <animate attributeName="r" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1"
                   values="0;15;0" keySplines="0.2 0 0.8 1;0.2 0 0.8 1"/>
        </circle>
        <circle cx="50" cy="41" r="10" fill="#fff" fillOpacity="0.25">
          <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1"
                            values="180 50 50;540 50 50"/>
          <animate attributeName="r" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1"
                   values="15;0;15" keySplines="0.2 0 0.8 1;0.2 0 0.8 1"/>
        </circle>
      </g>
    </SvgIconWrapper>
  )
}

export default PreloaderIcon;