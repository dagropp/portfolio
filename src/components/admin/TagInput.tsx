import React, {useEffect, useRef, useState} from "react";

interface ContainerProps {
  currentTags: Nullable<string>;
}

const TagInput: React.FC<ContainerProps> = ({currentTags}) => {

  const [tags, setTags] = useState<string[]>([]);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (currentTags) setTags(currentTags.split(","))
  }, [currentTags])

  return (
    <label htmlFor="dev_tools">
      <span>Project Tags</span>
      <span className="input-wrapper">
        <input
          type="text"
          className="tag-input"
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="inner-button" type="button">Add +</button>
      </span>
      <div className="checkbox-wrapper">
        {tags}
      </div>
    </label>
  )
}

export default TagInput;