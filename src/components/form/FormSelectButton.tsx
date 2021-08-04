import React, {ChangeEvent, EventHandler, HTMLProps, useEffect, useState} from "react";

interface ContainerProps extends HTMLProps<HTMLInputElement> {
  checked: boolean;
  type: "checkbox" | "radio";
}

const FormSelectButton: React.FC<ContainerProps> = (props) => {

  const {checked, onChange, ...rest} = props;
  const [inputChecked, setInputChecked] = useState(checked);

  useEffect(() => {
    setInputChecked(props.checked);
  }, [props.checked])

  const handleChange: EventHandler<ChangeEvent<HTMLInputElement>> = (event) => {
    setInputChecked(event.target.checked);
    onChange?.(event);
  }

  return (
    <input
      onChange={handleChange}
      checked={inputChecked}
      {...rest}
    />
  )
}

export default FormSelectButton;