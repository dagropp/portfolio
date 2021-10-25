import React, {useState} from "react";
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

  const init = async (id: string, {projects, code_snippets}: RestDataResponse): Promise<RestCommon> => {
    const item = projects.find((item) => item.id === id);
    if (item) {
      setItem(item);
      setCodeSnippets(code_snippets.filter((snippet) => snippet.relation === item.id));
      return item;
    }
    return Promise.reject(`Project "${id}" does not exist.`);
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