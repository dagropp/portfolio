import React, {useEffect, useState} from "react";
import ServerService from "../global/ServerService";
import EducationCard from "../components/cards/EducationCard";
import ExperienceCard from "../components/cards/ExperienceCard";
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
    ServerService.getSectionData("dev")
      .then(({education, experience, projects}) => {
        setEducation(UiService.sortByField(education, "year_start"));
        setExperience(UiService.sortByField(experience, "year_start"));
        setProjects(UiService.sortByField(projects, "date_start"));
      })
      .finally(() => setTimeout(() => setLoading(false), 1000));
  }, [])

  const setProjectsHeight = () => {
    const rows = Math.ceil(projects.length / 3);
    return {height: rows * 218 + (rows - 1) * 15}
  }

  const projectCards = projects.map((item, index) =>
    <ProjectCard
      totalProjects={projects.length}
      key={item.id + index}
      item={item}
      index={index}
    />)

  return (
    loading
      ?
      <section className="dev-wrapper flex-row-centered loading">
        <PreloaderIcon/>
      </section>
      :
      <section className="dev-wrapper" style={setProjectsHeight()}>
        {projectCards}
      </section>
  )
}

export default Dev;