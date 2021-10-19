import React, {createElement, HTMLProps} from "react";
import GitHubIcon from "./social/GitHubIcon";
import LinkedInIcon from "./social/LinkedInIcon";
import WhatAppIcon from "./social/WhatAppIcon";
import NpmIcon from "./social/NpmIcon";
import AngularJsIcon from "./dev-tools/AngularJsIcon";
import CSSIcon from "./dev-tools/CSSIcon";
import HTMLIcon from "./dev-tools/HTMLIcon";
import IonicIcon from "./dev-tools/IonicIcon";
import JavaIcon from "./dev-tools/JavaIcon";
import JavaScriptIcon from "./dev-tools/JavaScriptIcon";
import JQueryIcon from "./dev-tools/JQueryIcon";
import LessIcon from "./dev-tools/LessIcon";
import MySQLIcon from "./dev-tools/MySQLIcon";
import PHPIcon from "./dev-tools/PHPIcon";
import PythonIcon from "./dev-tools/PythonIcon";
import ReactIcon from "./dev-tools/ReactIcon";
import SassIcon from "./dev-tools/SassIcon";
import TypeScriptIcon from "./dev-tools/TypeScriptIcon";
import ReduxIcon from "./dev-tools/ReduxIcon";
import GitIcon from "./dev-tools/GitIcon";
import AppLinkIcon from "./cta/AppLinkIcon";
import DownloadIcon from "./cta/DownloadIcon";
import WebsiteIcon from "./cta/WebsiteIcon";

interface ContainerProps extends HTMLProps<HTMLDivElement> {
  name: AppIconType;
  color?: string;
}

const AppIcon: React.FC<ContainerProps> = (props) => {

  const {name, ...rest} = props;

  const icons: RestCollection<React.FC<IconContainerProps>, AppIconType> = {
    // Dashboard tools icons
    angularjs: AngularJsIcon,
    css: CSSIcon,
    git: GitIcon,
    html: HTMLIcon,
    ionic: IonicIcon,
    java: JavaIcon,
    javascript: JavaScriptIcon,
    jquery: JQueryIcon,
    less: LessIcon,
    mysql: MySQLIcon,
    php: PHPIcon,
    python: PythonIcon,
    react: ReactIcon,
    redux: ReduxIcon,
    sass: SassIcon,
    typescript: TypeScriptIcon,
    // CTA icons
    app_link: AppLinkIcon,
    download: DownloadIcon,
    website: WebsiteIcon,
    // Social icons
    github: GitHubIcon,
    linkedin: LinkedInIcon,
    npm: NpmIcon,
    whatsapp: WhatAppIcon,
  }

  return createElement(icons[name], {...rest});
}

export default AppIcon;