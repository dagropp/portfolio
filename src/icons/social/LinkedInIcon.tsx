import React from "react";
import SvgIconWrapper from "../SvgIconWrapper";

const LinkedInIcon: React.FC<IconContainerProps> = ({color = "#1464ba", ...rest}) => {

  return (
    <SvgIconWrapper
      className="link-icon whatsapp"
      viewBox="0 0 30 30"
      title="LinkedIn"
      color={color}
      {...rest}
    >
      <path
        d="M25.6,25.6h-4.4v-7c0-1.7,0-3.8-2.3-3.8c-2.3,0-2.7,1.8-2.7,3.7v7.1h-4.4V11.2H16v2H16
        c0.9-1.5,2.5-2.4,4.2-2.3c4.5,0,5.3,3,5.3,6.8L25.6,25.6z M6.7,9.3c-1.4,0-2.6-1.2-2.6-2.6c0-1.4,1.2-2.6,2.6-2.6
	      c1.4,0,2.6,1.2,2.6,2.6C9.3,8.1,8.1,9.3,6.7,9.3L6.7,9.3 M8.9,25.6H4.4V11.2h4.4V25.6z M27.8,0H2.2C1,0,0,1,0,2.2v25.7
	      C0,29,1,30,2.2,30h25.6c1.2,0,2.2-1,2.2-2.2V2.2C30,1,29,0,27.8,0"
      />
    </SvgIconWrapper>
  )
}

export default LinkedInIcon;