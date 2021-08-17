import React, {useEffect, useState} from "react";
import CodeSnippet from "./CodeSnippet";
import ServerService from "../../global/ServerService";

interface ContainerProps {
  projectId: string;
}

const ProjectCodeExamples: React.FC<ContainerProps> = ({projectId}) => {

  const [codeSnippets, setCodeSnippets] = useState<RestCodeSnippet[]>([]);

  useEffect(() => {
    ServerService.getTable("code_snippets")
      .then((res) => {
        setCodeSnippets(res.filter(snippet => snippet.relation === projectId))
        res.forEach((i) => console.log(i.relation, projectId))
      });
  }, [])

  return (
    codeSnippets.length
      ?
      <article className="code-examples">
        <h3 className="italic">Some cool stuff I got to do for this project...</h3>
        {codeSnippets.map((item) =>
          <div
            className="code-segment"
            key={item.id}
          >
            {item.description && <p>{item.description}</p>}
            <CodeSnippet
              item={item}
            />
          </div>
        )}
      </article>
      :
      <></>
  )
}

export default ProjectCodeExamples;