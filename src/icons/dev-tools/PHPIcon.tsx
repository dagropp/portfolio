import React from "react";
import SvgIconWrapper from "../SvgIconWrapper";

const PHPIcon: React.FC<IconContainerProps> = ({color = "#8993bd", ...rest}) => {

  return (
    <SvgIconWrapper
      className="environment-icon php"
      viewBox="0 0 57.6 30"
      title="php"
      color={color}
      {...rest}
    >
      <path
        className="icon-fill"
        d="M43.5,10h-2.6l-1.7,6h3c1.8,0,3.4-0.8,3.7-4.2C45.9,10.6,44.9,10,43.5,10z"
      />
      <path
        className="icon-fill"
        d="M17,10h-2.6l-1.3,6h2.7c1.8,0,3.3-0.8,3.6-4.2C19.4,10.6,18.4,10,17,10z"
      />
      <path
        className="icon-fill"
        d="M28.8,0C12.9,0,0,6.7,0,15c0,8.3,12.9,15,28.8,15c15.9,0,28.8-6.7,28.8-15C57.6,6.7,44.7,0,28.8,0z M16.3,19
        h-3.6l-0.8,4H8.1l3.2-16h7.3c3.1,0,4.7,1.9,4.8,4.6C23.4,16.4,19.7,19,16.3,19z M31.2,10.8h-3l-1.8,8.9h-3.8l3.2-16h3.8l-0.8,4.1
        h3.6c3.2,0.2,4.3,1.8,3.9,3.8l-1.4,8.1H31l1.4-7.3C32.6,11.4,32.6,10.8,31.2,10.8z M42.6,19H39l-0.8,4h-3.7l3.2-16H45
        c3.2,0,4.7,1.9,4.7,4.6C49.7,16.4,46,19,42.6,19z"
      />
    </SvgIconWrapper>
  )
}

export default PHPIcon;