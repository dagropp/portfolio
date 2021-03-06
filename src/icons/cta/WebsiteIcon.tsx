import React from "react";
import SvgIconWrapper from "../SvgIconWrapper";

const WebsiteIcon: React.FC<IconContainerProps> = (props) => {

  return (
    <SvgIconWrapper
      className="link-icon app"
      viewBox="0 0 30 30"
      title="Website Link"
      {...props}
    >
      <path
        d="M28.9,19.9c-0.8-1.1-2.1-2.3-3.6-3.6c0.1-0.4,0.1-0.8,0.1-1.3c0-5.7-4.6-10.3-10.3-10.3c-2.3,0-4.5,0.8-6.2,2.1
        c-2-0.7-3.7-1.2-5-1.3C2,5.2,0.8,5.6,0.3,6.5C0.1,6.8-0.1,7.4,0.1,8.2c0.4,1.5,2.2,3.5,4.7,5.5c-0.1,0.4-0.1,0.8-0.1,1.3
        c0,5.7,4.6,10.3,10.3,10.3c2.3,0,4.5-0.8,6.2-2.1c0.7,0.3,1.4,0.5,2,0.7c1.5,0.5,2.8,0.7,3.8,0.7c0,0,0.1,0,0.1,0
        c1.3,0,2.1-0.4,2.6-1.1C30.3,22.6,30,21.4,28.9,19.9z M23.4,15c0,2.4-1,4.5-2.6,6.1c-2.3-0.9-4.8-2.1-7.3-3.6
        c-2.5-1.4-4.8-3-6.8-4.5c0.9-3.7,4.2-6.4,8.2-6.4C19.7,6.6,23.4,10.3,23.4,15z M4.6,11.1C2.1,8.8,1.8,7.6,1.9,7.4
        C2,7.3,3.4,6.9,7.2,8.2c-0.9,1-1.5,2.2-2,3.4C5,11.5,4.8,11.3,4.6,11.1z M15,23.4c-4.6,0-8.4-3.7-8.4-8.3c1.9,1.4,4,2.8,6.1,4
        c2.2,1.3,4.4,2.4,6.5,3.3C17.9,23,16.5,23.4,15,23.4z M28.1,22.6C28,22.7,26.9,23,23.6,22c-0.3-0.1-0.5-0.2-0.8-0.3
        c0.9-1,1.5-2.2,2-3.4C27.8,21,28.2,22.3,28.1,22.6z"
      />
    </SvgIconWrapper>
  )
}

export default WebsiteIcon;