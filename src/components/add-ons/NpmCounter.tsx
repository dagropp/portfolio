import React, {useEffect, useState} from "react";
import UiService from "../../global/UiService";
import LinkListItem from "../lists/LinkListItem";
import AppIcon from "../../icons/AppIcon";

interface ContainerProps {
  packageName: string;
  minDisplay?: number;
}

const NpmCounter: React.FC<ContainerProps> = ({packageName, minDisplay = 100}) => {

  const [downloads, setDownloads] = useState(0);
  const link = `https://www.npmjs.com/package/${packageName}`;

  useEffect(() => {
    UiService.getTotalNpmDownloads(packageName)
      .then(setDownloads);
  }, [packageName]);

  return (
    downloads < minDisplay
      ?
      <></>
      :
      <a href={link} target="_blank" rel="noreferrer noopener" className="npm-counter list-wrap">
        <AppIcon name="npm"/>
        <p>Total npm downloads ⚡⚡ {UiService.formatNumber(downloads)}</p>
      </a>
  )
}

export default NpmCounter;