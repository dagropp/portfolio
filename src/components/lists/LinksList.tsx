import React from "react";
import LinkListItem from "./LinkListItem";

interface ContainerProps {
  className?: string;
  app_link?: Nullable<string>;
  download_link?: Nullable<string>;
  site_link?: Nullable<string>;
  github?: Nullable<string>;
  npm?: Nullable<string>;
}

const LinksList: React.FC<ContainerProps> = (props) => {

  const {className = "", app_link, download_link, site_link, github, npm} = props;

  return (
    <ul
      className={`list-wrap links ${className}`}
      hidden={!site_link && !download_link && !npm && !github}
    >
      {site_link && <LinkListItem link={site_link} title="Website" icon="website"/>}
      {app_link && <LinkListItem link={app_link} title="App" icon="app_link"/>}
      {download_link && <LinkListItem link={download_link} title="Download" icon="download"/>}
      {github && <LinkListItem link={`https://github.com/dagropp/${github}`} title="GitHub" icon="github"/>}
      {npm && <LinkListItem link={`https://www.npmjs.com/package/${npm}`} title="npm" icon="npm"/>}
    </ul>
  )
}

export default LinksList;