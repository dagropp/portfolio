import React from "react";
import LazyLoadImage from "../common/LazyLoadImage";
import ExperienceCard from "../cards/ExperienceCard";
import {useRecoilValue} from "recoil";
import {appDataState} from "../../global/recoil/atoms";

const WorkExperience: React.FC = () => {

  const {experience} = useRecoilValue(appDataState);

  const experienceCards = experience.map((item) =>
    <ExperienceCard
      key={item.id}
      item={item}
    />)

  return (
    <article className="grid-column experience flex-1">
      <h2>Work Experience</h2>
      {experienceCards}
      <LazyLoadImage
        className="main-portrait"
        src="https://ik.imagekit.io/dgropp1987/header_portrait_XYG2ACTo7.jpg?updatedAt=1638358852495"
        placeholder="https://ik.imagekit.io/dgropp1987/header_portrait_placeholder_T2Bkcvmj3.jpg?updatedAt=1638359140782"
      />
    </article>
  )
}

export default WorkExperience;