import React, {useState} from "react";
import useLocationState from "../hooks/useLocationState";

const Project: React.FC = () => {

  const [item, setItem] = useState<RestProject>();

  useLocationState((state) => {
    const item: RestProject = state.item;
    setItem(item);
  }, {state: "item"})

  if (!item) return null;

  return (
    <section className="project">
      {item.title}
    </section>
  )
}

export default Project;