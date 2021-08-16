import React, {ChangeEvent, EventHandler, useEffect, useState} from "react";
import FormSelect from "../form/FormSelect";
import ServerService from "../../global/ServerService";
import FormLabel from "../form/FormLabel";

interface ContainerProps {
  title: string;
  value: Nullable<string>;
  required?: boolean;
  onChange?: EventHandler<ChangeEvent<HTMLSelectElement>>;
  filterSections?: string[]
}

const SelectRelation: React.FC<ContainerProps> = ({title, value, required, onChange, filterSections}) => {

  const [relations, setRelations] = useState<RestCollection<RestDataListResponse[]>>({});

  useEffect(() => {
    ServerService.getRelationDataList()
      .then(setRelations);
  }, [])

  const options = Object.entries(relations)
    .filter(([section]) => !filterSections || filterSections.includes(section))
    .map(([section, items]) =>
      <optgroup
        label={section}
        key={section}
      >
        {items.map((item) =>
          <option
            value={item.id}
            key={item.id}
          >{item.title}</option>
        )}
      </optgroup>
    )

  return (
    <FormLabel
      htmlFor="relation"
      required={required}
    >
      {title && <span>{title}</span>}
      <FormSelect
        name="relation"
        id="relation"
        value={value ?? ""}
        required={required}
        onChange={onChange}
      >
        <option value="" disabled={required}>Select Relation</option>
        {options}
      </FormSelect>
    </FormLabel>
  )

}
export default SelectRelation;