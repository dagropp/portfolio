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
      .finally(() => setTimeout(() => setLoading(false), 500));
  }, [])

  return (
    <>
      <section className="dev-wrapper" hidden={!loading}>
        <PreloaderIcon/>
      </section>
      <section className="dev-wrapper" hidden={loading}>
        <article className="experience">
          {experience.map((item) => <ExperienceCard key={item.id} item={item}/>)}
        </article>
        <article className="education">
          {education.map((item) => <EducationCard key={item.id} item={item}/>)}
        </article>
        <article className="projects">
          {projects.map((item) => <ProjectCard key={item.id} item={item}/>)}
        </article>
      </section>
    </>
  )
}

export default Dev;