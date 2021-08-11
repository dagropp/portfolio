import React, {ChangeEvent, EventHandler, HTMLProps} from "react";

interface ContainerProps extends Omit<HTMLProps<HTMLInputElement>, "type" | "ref"> {
}

const PhotoUploadInput: React.FC<ContainerProps> = (props) => {

  const {
    inputRef, imageService, setImages, onChange, multiple = true, ...rest
  } = props as DynamicSetComponentProps & ContainerProps;

  const handleChange: EventHandler<ChangeEvent<HTMLInputElement>> = (event) => {
    imageService.register();
    onChange?.(event);
  }

  return (
    <input
      type="file"
      multiple={multiple}
      ref={inputRef}
      onChange={handleChange}
      {...rest}
    />
  )
}

export default PhotoUploadInput;