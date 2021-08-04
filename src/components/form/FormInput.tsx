import React, {ChangeEvent, EventHandler, HTMLProps, useEffect, useState} from "react";

interface ContainerProps extends HTMLProps<HTMLInputElement> {
  value: string;
}

const FormInput: React.FC<ContainerProps> = (props) => {

  const {value, onChange, ...rest} = props;
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(props.value);
  }, [props.value])

  const handleChange: EventHandler<ChangeEvent<HTMLInputElement>> = (event) => {
    setInputValue(event.target.value);
    onChange?.(event);
  }

  return (
    <input
      value={inputValue}
      onChange={handleChange}
      {...rest}
    />
  )
}

export default FormInput;