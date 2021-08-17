import React, {HTMLProps, MouseEventHandler} from "react";
import GenericUploadButton from "./GenericUploadButton";

interface ContainerProps extends Omit<HTMLProps<HTMLLabelElement>, "htmlFor"> {
}

const UploadPhotoButton: React.FC<ContainerProps> = (props) => {

  return (
    <GenericUploadButton
      useCamera={false}
      {...props}
    />
  )
}

export default UploadPhotoButton;