import React, {HTMLProps} from "react";
import GenericUploadButton from "./GenericUploadButton";

interface ContainerProps extends Omit<HTMLProps<HTMLLabelElement>, "htmlFor"> {
}

const TakePictureButton: React.FC<ContainerProps> = (props) => {

  return (
    <GenericUploadButton
      useCamera={true}
      {...props}
    />
  )
}

export default TakePictureButton;