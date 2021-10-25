import React from "react";
import {useRecoilState} from "recoil";
import {breadcrumbsState} from "../../global/recoil/atoms";

const Breadcrumbs: React.FC = () => {

  const [breadcrumbs] = useRecoilState(breadcrumbsState);

  return (
    <div className="breadcrumbs">
      <a href="/dashboard">Home</a>
      {breadcrumbs
        .map(({path, title}) =>
          path ? <a key={title} href={path}>{title}</a> : <span key={title}>{title}</span>
        )}
    </div>
  )
}

export default Breadcrumbs;