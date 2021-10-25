import React from "react";
import {navService} from "../../global/NavService";

interface ContainerProps {}

const Breadcrumbs: React.FC<ContainerProps> = () => {

  if (navService.isPage("dashboard")) return null;


  return (
    <div className="breadcrumbs-wrapper">

    </div>
  )
}

export default Breadcrumbs;