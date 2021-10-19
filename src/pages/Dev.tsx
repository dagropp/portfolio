import React, {useEffect, useState} from "react";
import ServerService from "../global/ServerService";
import PreloaderIcon from "../icons/PreloaderIcon";
import ProjectCard from "../components/cards/ProjectCard";
import UiService from "../global/UiService";
import "../style/cards.scss";
import {localDatabaseService} from "../global/LocalDatabaseService";

const Dev: React.FC = () => {

  const [projects, setProjects] = useState<RestProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ServerService.getSectionData()
      .then(({education, experience, projects, code_snippets}) => {

        const code_snippets_obj: RestCollection<RestCodeSnippet[]> = {};
        code_snippets.forEach((snippet) => {
          if (code_snippets_obj[snippet.relation]) {
            code_snippets_obj[snippet.relation].push(snippet)
          } else {
            code_snippets_obj[snippet.relation] = [snippet];
          }
        })
        projects = UiService.sortByField(projects, "date_start");
        projects.forEach((project) => project.code_snippets = code_snippets_obj[project.id])
        setProjects(projects);
      })
      // .finally(() => setTimeout(() => setLoading(false), 1000))
      .finally(() => setLoading(false));
      localDatabaseService.initDatabase();
  }, [])

  const projectCards = projects.map((item) =>
    <ProjectCard
      key={item.id}
      item={item}
    />)

  return (
    loading
      ?
      <section className="dev-wrapper flex-row-centered loading">
        <PreloaderIcon/>
      </section>
      :
      <section className="dev-wrapper">
        {projectCards}
      </section>
  )
}

export default Dev;