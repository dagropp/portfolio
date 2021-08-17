import React, {HTMLProps, MouseEventHandler} from "react";
import {imageService} from "../../utils/ImageService";

interface ContainerProps extends Omit<HTMLProps<HTMLLabelElement>, "htmlFor"> {
  useCamera: boolean;
}

const GenericUploadButton: React.FC<ContainerProps> = (props) => {

  const {children, onClick, useCamera, ...rest} = props;

  const handleClick: MouseEventHandler<HTMLLabelElement> = (event) => {
    imageService.toggleCameraUsage(useCamera);
    onClick?.(event);
  }

  return (
    <label
      {...rest}
      htmlFor={imageService.id}
      onClick={handleClick}
    >
      {children}
    </label>
  )
}

export default GenericUploadButton;