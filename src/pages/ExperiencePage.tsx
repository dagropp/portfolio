import React, {useState} from "react";
import {dataRegistry} from "../global/DataRegistry";
import ServerService from "../global/ServerService";
import CardDescription from "../components/cards/CardDescription";
import UiService from "../global/UiService";
import TagsList from "../components/lists/TagsList";
import ToolsList from "../components/lists/ToolsList";
import AbstractPage from "./AbstractPage";

const ExperiencePage: React.FC = () => {

  const [item, setItem] = useState<RestExperience>();
  const {title, date_start, date_end, tools, description, tags} = item! ?? {};

  const init = (id: string) => {
    const experience = dataRegistry.getExperience();
    const item = experience.find((entry) => entry.id === id);
    if (item) {
      setItem(item);
    } else {
      ServerService.getAllItems().then(init.bind(null, id));
    }
    return true;
  }

  return (
    <AbstractPage item={item} init={init}>
      <h1>{title}</h1>
      <p>{UiService.parseMonths(date_start, date_end)}</p>
      <ToolsList tools={tools}/>
      <CardDescription description={description}/>
      <TagsList tags={tags}/>
    </AbstractPage>
  )

}

export default ExperiencePage;