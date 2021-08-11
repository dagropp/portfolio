import React, {RefObject} from "react";

interface ContainerProps {
  item: ThumbnailData;
  inputRef: RefObject<HTMLInputElement>;
  options?: PhotoUploadThumbnailsOptions;
}

const PhotoUploadThumbnailItem: React.FC<ContainerProps> = ({item, inputRef, options = {}}) => {

  const {exists, file, src} = item;
  const {thumbnailClassName = "", thumbnailImageProps = {}, canDelete, canRotate} = options;

  return (
    <div className={`thumbnail-item ${thumbnailClassName}`}>
      {<img src={src} alt={file.name} {...thumbnailImageProps}/>}
    </div>
  )
}

export default PhotoUploadThumbnailItem;