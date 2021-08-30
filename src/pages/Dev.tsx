import React, {useEffect, useState} from "react";
import ServerService from "../global/ServerService";
import PreloaderIcon from "../icons/PreloaderIcon";
import ProjectCard from "../components/cards/ProjectCard";
import UiService from "../global/UiService";
import "../style/cards.scss";

const Dev: React.FC = () => {

  const [education, setEducation] = useState<RestEducation[]>([]);
  const [experience, setExperience] = useState<RestExperience[]>([]);
  const [projects, setProjects] = useState<RestProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ServerService.getSectionData()
      .then(({education, experience, projects}) => {
        setEducation(UiService.sortByField(education, "year_start"));
        setExperience(UiService.sortByField(experience, "year_start"));
        setProjects(UiService.sortByField(projects, "date_start"));
      })
      // .finally(() => setTimeout(() => setLoading(false), 1000))
      .finally(() => setLoading(false));

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