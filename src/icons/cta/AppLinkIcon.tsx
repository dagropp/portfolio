import React from "react";
import SvgIconWrapper from "../SvgIconWrapper";

const AppLinkIcon: React.FC<IconContainerProps> = (props) => {

  return (
    <SvgIconWrapper
      className="link-icon app"
      viewBox="0 0 30 30"
      title="App Link"
      {...props}
    >
      <path
        d="M19.7,0h-2.3h-4.9h-2.3C8.2,0,6.6,1.7,6.6,3.8v22.5c0,2.1,1.7,3.8,3.8,3.8h9.4c2.1,0,3.8-1.7,3.8-3.8V3.8
	      C23.4,1.7,21.8,0,19.7,0z M21.6,26.3c0,1-0.8,1.9-1.9,1.9h-9.4c-1,0-1.9-0.8-1.9-1.9V3.8c0-1,0.8-1.9,1.9-1.9h0.6V2
	      c0,0.9,0.7,1.6,1.6,1.6h4.9c0.9,0,1.6-0.7,1.6-1.6V1.9h0.6c1,0,1.9,0.8,1.9,1.9V26.3z"
      />
    </SvgIconWrapper>
  )
}

export default AppLinkIcon;