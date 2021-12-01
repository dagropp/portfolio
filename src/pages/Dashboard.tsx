import React, {useEffect, useState} from "react";
import ServerService from "../global/ServerService";
import PreloaderIcon from "../icons/PreloaderIcon";
import "../style/cards.scss";
import {useSetRecoilState} from "recoil";
import {appDataState} from "../global/recoil/atoms";
import UiService from "../global/UiService";
import WorkExperience from "../components/dashboard-sections/WorkExperience";
import MainSection from "../components/dashboard-sections/MainSection";

const Dashboard: React.FC = () => {

  const [loading, setLoading] = useState(true);
  const setDataState = useSetRecoilState(appDataState);

  useEffect(() => {
    ServerService.getAllItems()
      .then(({experience, education, projects, code_snippets}) => {
        setDataState({
          experience: UiService.sortByField(experience, "date_start", true),
          education,
          projects,
          code_snippets
        })
      })
      .finally(() => setLoading(false));
  }, [])


  return (
    loading
      ?
      <section className="dashboard-wrapper flex-row-centered loading">
        <PreloaderIcon/>
      </section>
      :
      <section className="dashboard-wrapper">
        <WorkExperience/>
        <MainSection/>
      </section>
  )
}

export default Dashboard;