import React from "react";
import SvgIconWrapper from "../SvgIconWrapper";

const PythonIcon: React.FC<IconContainerProps> = ({color = "#FED852", ...rest}) => {

  return (
    <SvgIconWrapper
      className="environment-icon python"
      viewBox="0 0 30.2 30"
      title="Python"
      color={color}
      {...rest}
    >
      <path
        className="icon-invert"
        d="M15,0C7.3,0,7.8,3.3,7.8,3.3l0,3.4h7.3v1H4.9C4.9,7.8,0,7.2,0,15c0,7.7,4.3,7.5,4.3,7.5h2.6v-3.6
        c0,0-0.1-4.3,4.2-4.3s7.2,0,7.2,0s4.1,0.1,4.1-3.9s0-6.6,0-6.6S23,0,15,0z M10.9,2.3c0.7,0,1.3,0.6,1.3,1.3s-0.6,1.3-1.3,1.3
        S9.6,4.4,9.6,3.6S10.2,2.3,10.9,2.3z"
      />
      <path
        className="icon-fill"
        d="M15.2,30c7.7,0,7.2-3.3,7.2-3.3l0-3.4h-7.3v-1h10.2c0,0,4.9,0.6,4.9-7.2c0-7.7-4.3-7.5-4.3-7.5
        h-2.6v3.6c0,0,0.1,4.3-4.2,4.3s-7.2,0-7.2,0s-4.1-0.1-4.1,3.9c0,4,0,6.6,0,6.6S7.2,30,15.2,30z M19.2,27.7c-0.7,0-1.3-0.6-1.3-1.3
        c0-0.7,0.6-1.3,1.3-1.3c0.7,0,1.3,0.6,1.3,1.3C20.5,27.1,19.9,27.7,19.2,27.7z"
      />
    </SvgIconWrapper>
  )
}

export default PythonIcon;