import React from "react";
import AppIcon from "../../icons/AppIcon";

const MainSection: React.FC = () => {

  const tools: AppDevToolKey[] = ["react", "javascript", "typescript", "css", "html", "git"];
  const skills: AppSkillKey[] = ["agile"];

  const toolIcons = tools.map((tool) => <AppIcon key={tool} name={tool}/>)
  const skillIcons = skills.map((skill) => <AppIcon key={skill} name={skill}/>)

  return (
    <article className="grid-column main-section flex-2">
      <div className="title-box flex-col-centered">
        <h1>Daniel Gropp</h1>
        <h2>Frontend Developer</h2>
      </div>
      <div className="tools-list flex-row-centered">{toolIcons}</div>
      <div className="skills-list flex-row-centered">{skillIcons}</div>
    </article>
  )
}

export default MainSection;