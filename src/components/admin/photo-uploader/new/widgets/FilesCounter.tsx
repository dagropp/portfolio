import React, {HTMLProps, useEffect, useState} from "react";
import {imageService} from "../../utils/ImageService";

interface ContainerProps extends HTMLProps<HTMLSpanElement> {
}

const FilesCounter: React.FC<ContainerProps> = (props) => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    const listener = imageService.addListener("filesChanged", (e) => setCount(e.detail.count));

    return () => imageService.input?.removeEventListener("filesChanged", (event: any) => setCount(event.detail.count));
  }, [imageService.input])

  return (
    <span {...props}>
      {count}
    </span>
  )
}

export default FilesCounter;