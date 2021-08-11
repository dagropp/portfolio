import React, {HTMLProps} from "react";
import PhotoUploadThumbnailItem from "./PhotoUploadThumbnailItem";

interface ContainerProps extends HTMLProps<HTMLDivElement> {
  options?: PhotoUploadThumbnailsOptions;
}

const PhotoUploadThumbnails: React.FC<ContainerProps> = (props) => {

  const {
    options, className = "", inputRef, images, children, ...rest
  } = props as DynamicSetComponentProps & ContainerProps;

  const thumbnailItems = images.map((item) =>
    <PhotoUploadThumbnailItem
      key={item.file.name}
      item={item}
      options={options}
      inputRef={inputRef}
    />
  )

  return (
    <div className={`thumbnails-wrapper ${className}`} {...rest}>
      {children}
      {thumbnailItems}
    </div>
  )
}

export default PhotoUploadThumbnails;