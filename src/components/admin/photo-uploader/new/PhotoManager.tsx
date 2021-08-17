import React, {ChangeEvent, EventHandler, HTMLProps, useEffect, useRef, useState} from "react";
import {imageService} from "../utils/ImageService";

interface ContainerProps extends HTMLProps<HTMLDivElement> {
  name: string;
  inputId?: string;
  multiple?: boolean;
  onInputChange?: EventHandler<ChangeEvent<HTMLInputElement>>;
  inputProps?: Omit<HTMLProps<HTMLInputElement>, "multiple" | "onChange" | "type" | "hidden" | "name" | "id" | "ref">
  __show_input__?: boolean;
}

const PhotoManager: React.FC<ContainerProps> = (props) => {

  const {
    name, inputId = name, multiple = true, onInputChange, inputProps = {}, __show_input__, className = "", children, ...rest
  } = props;

  const [didInitialize, setDidInitialize] = useState(false);
  const tempRef = useRef<HTMLInputElement>(null);
  const resultRef = useRef<HTMLInputElement>(null);

  const handleInputChange: EventHandler<ChangeEvent<HTMLInputElement>> = (event) => {
    //...
    imageService.updateInput();
    // console.log(event.target.files)
    onInputChange?.(event);
  }

  useEffect(() => {
    if (resultRef.current && tempRef.current) {
      imageService.register(resultRef.current, tempRef.current);
      setDidInitialize(true);
    } else {
      // setDidInitialize(false);
    }
  }, [resultRef.current, tempRef.current])

  return (
    <div
      className={`photo-manager-wrapper ${className}`}
      {...rest}
    >
      {inputId}:
      <input
        {...inputProps}
        type="file"
        id={inputId}
        multiple={multiple}
        ref={tempRef}
        onChange={handleInputChange}
        hidden={!__show_input__}
      />
      result_container:
      <input
        type="file"
        id="result_container"
        multiple={multiple}
        name={name}
        ref={resultRef}
        hidden={!__show_input__}
      />
      {didInitialize && children}
    </div>
  )
}

export default PhotoManager;