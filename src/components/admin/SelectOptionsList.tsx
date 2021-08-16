import React from "react";
import FormSelect from "../form/FormSelect";
import FormLabel from "../form/FormLabel";

const SelectOptionsList: React.FC<FormListProps<HTMLSelectElement>> = (props) => {

  const {
    id, title, defaultValue, options, defaultOption, className = "", itemMap = {}, required, onChange
  } = props;

  const items = options.map((item) => {
    const {value = "", display = ""} = itemMap as any;

    return (
      <option
        key={item?.[value] ?? item}
        value={item?.[value] ?? item}
      >{item?.[display] ?? item}</option>
    )
  });

  return (
    <FormLabel
      className={className}
      htmlFor={id}
      required={required}
    >
      {title && <span>{title}</span>}
      <FormSelect
        name={id}
        id={id}
        value={defaultValue ?? ""}
        required={required}
        onChange={onChange}
      >
        {defaultOption &&
        <option value="">{defaultOption}</option>}
        {items}
      </FormSelect>
    </FormLabel>
  )
}

export default SelectOptionsList;