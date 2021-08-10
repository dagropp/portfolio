import React from "react";
import SvgIconWrapper from "../SvgIconWrapper";

const NpmIcon: React.FC<IconContainerProps> = ({color = "#c33438", ...rest}) => {

  return (
    <SvgIconWrapper
      className="link-icon github"
      viewBox="0 0 30 30"
      title="npm"
      color={color}
      {...rest}
    >
      <path
        d="M13.6,14.8l-11-6.3C2,8.1,1.5,8.4,1.5,9.1v12.5c0,0.7,0.5,1.6,1.1,1.9l11,6.3c0.6,0.3,1.1,0.1,1.1-0.6V16.7
        C14.7,16,14.2,15.1,13.6,14.8z"
      />
      <path
        d="M16.3,13.9L27,7.8c0.6-0.3,0.6-0.9,0-1.3L16.1,0.3c-0.6-0.3-1.6-0.3-2.2,0L3.2,6.4c-0.6,0.3-0.6,0.9,0,1.3
	      L14,13.9C14.6,14.3,15.6,14.3,16.3,13.9z"
      />
      <path
        d="M27.4,8.7l-10.6,6.1c-0.6,0.3-1.1,1.2-1.1,1.9V29c0,0.7,0.5,1,1.1,0.6l10.6-6.1c0.6-0.3,1.1-1.2,1.1-1.9V9.3
	      C28.5,8.6,28,8.3,27.4,8.7z M26.4,21.8l-2.2,1.3v-7.8l-2.2,1.3l0,7.8L17.4,27l0-10.4l9-5.3L26.4,21.8z"
      />
    </SvgIconWrapper>
  )
}

export default NpmIcon;