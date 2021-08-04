import React from "react";

interface ContainerProps {
  name: string;
}

const AppIcon: React.FC<ContainerProps> = ({name}) => {

  const parseName = () => {
    switch (name) {
      case "certificate": return "📜";
      case "ba": return "🎓";
      case "ma": return "🎩";
      case "git": return "🗜️";
      case "agile": return "🚀";
      case "pwa": return "📲";
      case "working from home": return "🏡";
      case "covid19": return "🦠";
      default: return "🤠";
    }
  }

  const content = parseName();

  return <span>{content}</span>
}

export default AppIcon;