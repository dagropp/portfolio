import React from "react";
import {navService} from "../../global/NavService";
import useSafeParams from "../../hooks/useSafeParams";
import {dataRegistry} from "../../global/DataRegistry";

interface ContainerProps {}

const Breadcrumbs: React.FC<ContainerProps> = () => {

  const title = document.title;
  if (navService.isPage("dashboard")) return null;


  return (
    <div className="breadcrumbs-wrapper">

    </div>
  )
}

export default Breadcrumbs;