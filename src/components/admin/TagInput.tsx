import React, {useEffect, useRef, useState} from "react";
import FormSelectButton from "../form/FormSelectButton";

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

  const addTag = () => {
    setTags(prevState => [...prevState, encodeURI(value)]);
    setValue("");
  }

  const confirmRemove = (event: any) => {
    if (!event.target.checked) {
      const confirmation = window.confirm(`Are you sure you want to delete tag: ${event.target.dataset.display}`);
      if (!confirmation) event.preventDefault();
    }
  }

  const tagOptions = tags
    .map((tag) =>
      <FormSelectButton
        type="checkbox"
        name="tags"
        key={tag}
        value={tag}
        checked={true}
        display={decodeURI(tag)}
        onClick={confirmRemove}
      />
    )

  return (
    <label htmlFor="dev_tools">
      <span>Project Tags</span>
      <div className="tags-wrapper">
        <div className="input-wrapper">
          <input
            type="text"
            className="tag-input"
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className="inner-button"
            type="button"
            onClick={addTag}
          >Add +</button>
        </div>
        <div className="checkbox-wrapper">
          {tagOptions}
        </div>
      </div>
    </label>
  )
}

export default TagInput;