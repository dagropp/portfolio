import React, {HTMLProps, MouseEventHandler, RefObject} from "react";
import {imageService} from "../../utils/ImageService";

interface ContainerProps extends Omit<HTMLProps<HTMLButtonElement>, "type"> {

}

interface ExtendedContainerProps extends ContainerProps {
  inputRef: RefObject<HTMLInputElement>;
}

const ResetButton: React.FC<ContainerProps> = (props) => {

  const {inputRef, onClick, children, ...rest} = props as ExtendedContainerProps;

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    imageService.reset();
    onClick?.(event);
  }

  return (
    <button
      {...rest}
      type="button"
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default ResetButton;