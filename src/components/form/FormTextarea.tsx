import React, {ChangeEvent, EventHandler, HTMLProps, useEffect, useState} from "react";

interface ContainerProps extends HTMLProps<HTMLTextAreaElement> {
  value: string;
}

const FormTextarea: React.FC<ContainerProps> = (props) => {

  const {value, onChange, rows = 5, ...rest} = props;
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(props.value);
  }, [props.value])

  const handleChange: EventHandler<ChangeEvent<HTMLTextAreaElement>> = (event) => {
    setInputValue(event.target.value);
    onChange?.(event);
  }

  return (
    <textarea
      value={inputValue}
      onChange={handleChange}
      rows={rows}
      {...rest}
    />
  )
}

export default FormTextarea;