import React, {ChangeEvent, EventHandler, HTMLProps, useEffect, useState} from "react";

interface ContainerProps extends HTMLProps<HTMLSelectElement> {
  value: string;
}

const FormSelect: React.FC<ContainerProps> = (props) => {

  const {value, onChange, children, ...rest} = props;
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(props.value);
  }, [props.value])

  const handleChange: EventHandler<ChangeEvent<HTMLSelectElement>> = (event) => {
    setInputValue(event.target.value);
    onChange?.(event);
  }

  return (
    <select
      value={inputValue}
      onChange={handleChange}
      {...rest}
    >{children}</select>
  )

}

export default FormSelect;