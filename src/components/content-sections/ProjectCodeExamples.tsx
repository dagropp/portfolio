import React from "react";
import CodeSnippet from "./CodeSnippet";

interface ContainerProps {
  project: RestProject;
}

const ProjectCodeExamples: React.FC<ContainerProps> = ({project}) => {

  const code_snippets: any[] = []

  if (!code_snippets.length) return <></>;

  const snippets = code_snippets.map((snippet) =>
    <div
      className="code-segment"
      key={snippet.id}
    >
      {snippet.description && <p>{snippet.description}</p>}
      <CodeSnippet
        item={snippet}
      />
    </div>
  );

  return (
    <article className="code-examples">
      <h3 className="italic">Some cool stuff I got to do for this project...</h3>
      {snippets}
    </article>
  )
}

export default ProjectCodeExamples;