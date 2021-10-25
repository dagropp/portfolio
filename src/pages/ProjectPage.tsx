import React, {useState} from "react";
import {dataRegistry} from "../global/DataRegistry";
import ServerService from "../global/ServerService";
import CardDescription from "../components/cards/CardDescription";
import UiService from "../global/UiService";
import TagsList from "../components/lists/TagsList";
import NpmCounter from "../components/add-ons/NpmCounter";
import ToolsList from "../components/lists/ToolsList";
import CodeSnippet from "../components/content-sections/CodeSnippet";
import AbstractPage from "./AbstractPage";

const ProjectPage: React.FC = () => {

  const [item, setItem] = useState<RestProject>();
  const [codeSnippets, setCodeSnippets] = useState<RestCodeSnippet[]>([]);
  const {title, date_start, date_end, tools, description, tags, npm} = item! ?? {};

  const init = async (id: string, didFetch?: boolean): Promise<RestProject> => {
    const projects = dataRegistry.getProjects();
    const codeSnippets = dataRegistry.getCodeSnippets();
    const item = projects.find((item) => item.id === id);
    if (item) {
      setItem(item);
      setCodeSnippets(codeSnippets.filter((snippet) => snippet.relation === item.id));
      return item;
    } else {
      if (didFetch) throw new Error("Project not found");
      await ServerService.getAllItems();
      return init(id, true);
    }
  }

  const snippets = codeSnippets.map((item) =>
    <div className="code-snippet-wrapper" key={item.id}>
      {item.description && <blockquote className="italic">{item.description}</blockquote>}
      <CodeSnippet item={item}/>
    </div>
  )

  return (
    <AbstractPage item={item} init={init}>
      <h1>{title}</h1>
      <p>{UiService.parseMonths(date_start, date_end)}</p>
      <ToolsList tools={tools}/>
      <CardDescription description={description}/>
      {npm && <NpmCounter packageName={npm}/>}
      {snippets}
      <TagsList tags={tags}/>
    </AbstractPage>
  )

}

export default ProjectPage;