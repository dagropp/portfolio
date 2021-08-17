import React, {Children, cloneElement, HTMLProps, isValidElement, useEffect, useRef, useState} from "react";
import "./style.scss";

interface ContainerProps extends HTMLProps<HTMLDivElement> {
  options?: PhotoUploadOptions;
}

const PhotoUploadWrapper: React.FC<ContainerProps> = (props) => {
  const {children, className = "", options = {}, ...rest} = props;
  const {enableStyle} = options;
  const ref = useRef<HTMLInputElement>(null);

  const [images, setImages] = useState<ThumbnailData[]>([]);

  useEffect(() => {
    if (ref.current) {

    }
  }, [ref.current])

  const parsedChildren = Children.toArray(children).map((child) => {
    if (isValidElement(child)) {
      const element: JSX.Element = child;
      const name: PhotoUploadComponentType | string = element.type?.name ?? element.type;
      switch (name) {
        case "PhotoUploadThumbnails":
          return cloneElement<DynamicSetComponentProps>(element, {inputRef: ref, images, setImages})
        case "PhotoUploadDropzone":
          return cloneElement<DynamicSetComponentProps>(element, {inputRef: ref});
        case "PhotoUploadInput":
          return cloneElement<DynamicSetComponentProps>(element, {inputRef: ref, setImages});
        default:
          return child;
      }
    }
    return child;
  })

  return (
    <div className={`photo-upload-wrapper ${className} ${enableStyle ? "enable-style" : ""}`} {...rest}>
      {parsedChildren}
      <div id="canvas_container"/>
    </div>
  )
}

export default PhotoUploadWrapper;