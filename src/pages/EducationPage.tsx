import React, {useState} from "react";
import {dataRegistry} from "../global/DataRegistry";
import ServerService from "../global/ServerService";
import CardDescription from "../components/cards/CardDescription";
import UiService from "../global/UiService";
import TagsList from "../components/lists/TagsList";
import ToolsList from "../components/lists/ToolsList";
import AbstractPage from "./AbstractPage";

const EducationPage: React.FC = () => {

  const [item, setItem] = useState<RestEducation>();

  const init = async (id: string, didFetch?: boolean): Promise<RestEducation> => {
    const education = dataRegistry.getEducation();
    const item = education.find((entry) => entry.id === id);
    if (item) {
      setItem(item);
      return item;
    } else {
      if (didFetch) throw new Error("Project not found");
      await ServerService.getAllItems();
      return init(id, true);
    }
  }

  const {title, date_start, date_end, tools, description, tags} = item! ?? {};

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

export default EducationPage;