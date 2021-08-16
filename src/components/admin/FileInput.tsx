import React, {ChangeEvent, EventHandler, useState} from "react";
import FormLabel from "../form/FormLabel";

interface ContainerProps {
  name: string;
  buttonTitle: string;
  id?: string;
  onChange?: EventHandler<ChangeEvent<HTMLInputElement>>;
  accept?: string;
  required?: boolean;
}

const FileInput: React.FC<ContainerProps> = ({buttonTitle, name, id = name, onChange, accept, required}) => {

  const [file, setFile] = useState<File>();

  const handleChange: EventHandler<ChangeEvent<HTMLInputElement>> = (event) => {
    setFile(event.target.files?.[0]);
    onChange?.(event);
  }

  return (
    <FormLabel
      htmlFor={id}
      className="file-input-wrapper"
      required={required}
    >
      <div className="file-button">{buttonTitle}</div>
      {file && <div className="file-name">{file.name}</div>}
      <input
        type="file"
        name={name}
        id={id}
        onChange={handleChange}
        accept={accept}
        required={required}
        hidden
      />
    </FormLabel>
  )
}

export default FileInput;