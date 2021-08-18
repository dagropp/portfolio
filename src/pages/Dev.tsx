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
      // .finally(() => setTimeout(() => setLoading(false), 1000))
      .finally(() => setLoading(false));

  }, [])

  const projectCards = projects.map((item) =>
    <ProjectCard
      key={item.id}
      item={item}
    />)

  const sample: RestProject = {
    id: "proj_sample",
    description: "Each move (and next move) is analysed and gets a score, based on the following factors:\n" +
      "       -  VERY HIGH SCORE: 3 discs of the same kind and 1 vacant - either win or block win.\n" +
      "       -  HIGH SCORE: 2 discs of the same kind and 2 vacant - progress in game, or block progression.\n" +
      "       -  LOW SCORE: 1 discs of the same kind and 3 vacant - if no other moves available, better than random.\n" +
      "       -  VERY NEGATIVE SCORE: 3 discs of other player and 1 vacant - prevent other player from winning next turn.\n" +
      "       -  NEGATIVE SCORE: 3 discs of this player and 1 vacant - avoid block in next turn.",
    date_start: "2020-03",
    date_end: "2021-04",
    app_section: "dev",
    tags: "",
    title: "Sample Project",
    type: "personal",
    tools: "react,sass",
    github: "",
    relation: "",
    skills: "",
    site_link: "",
    npm: "js-dast",
    download_link: ""
  }

  return (
    loading
      ?
      <section className="dev-wrapper flex-row-centered loading">
        <PreloaderIcon/>
      </section>
      :
      <section className="dev-wrapper">
        <ProjectCard item={sample}/>
        {projectCards}
      </section>
  )
}

export default Dev;