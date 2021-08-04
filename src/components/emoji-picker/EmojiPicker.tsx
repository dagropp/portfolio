import React, {useEffect, useState} from "react";
import './emoji-picker.scss';

interface ContainerProps {
  inputRef: React.RefObject<HTMLInputElement>;
  className?: string;
}

interface EmojiListData {
  section: string;
  items: string[];
}

const EmojiPicker: React.FC<ContainerProps> = ({className = "", inputRef}) => {

  const [emojis, setEmojis] = useState<EmojiListData[]>([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch(("/assets/data/emoji.json"))
      .then(res => (res.json())
        .then(setEmojis));
  }, [])

  const items = emojis.map(({section, items}) => {
    return (
      <ul key={encodeURI(section)}>
        <p>{section}</p>
        {items.map((item, index) => {
            const addEmoji = () => {
              const input = inputRef.current;
              if (input) {
                const index = input.selectionEnd || input.value.length;
                input.value = input.value.substring(0, index) + decodeURI(item) + input.value.substring(index);
                input.focus();
                setShow(false);
              }
            }

            return (
              <li
                key={item + index}
                onClick={addEmoji}
              >{decodeURI(item)}</li>
            )
          }
        )}
      </ul>
    )
  })

  return (
    <>
      <button
        type="button"
        className="emoji-picker-button"
        onClick={() => setShow(prevState => !prevState)}
      >😀</button>
      <div className={`emoji-picker ${className} ${show ? "show" : ""}`}>
        {items}
      </div>
    </>
  )
}

export default EmojiPicker;