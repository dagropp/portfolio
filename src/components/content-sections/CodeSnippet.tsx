import React, {useEffect, useRef, useState} from "react";
import Prism from "prismjs";
import AppIcon from "../../icons/AppIcon";
import LinkListItem from "../lists/LinkListItem";

interface ContainerProps {
  fileName: string;
  github: string;
}

const languageData: RestCollection<{ display: string, import?: string }, ProgrammingLanguage> = {
  css: {display: "CSS"},
  html: {display: "HTML"},
  java: {display: "Java", import: "java"},
  js: {display: "JavaScript"},
  jsx: {display: "React / JSX", import: "jsx"},
  php: {display: "php", import: "php"},
  py: {display: "Python", import: "python"},
  sql: {display: "SQL", import: "sql"},
  ts: {display: "TypeScript", import: "typescript"},
  tsx: {display: "React / TSX", import: "tsx"}
}

const CodeSnippet: React.FC<ContainerProps> = ({fileName, github}) => {

  const [code, setCode] = useState("");
  const [language, setLanguage] = useState<ProgrammingLanguage>();
  const [height, setHeight] = useState(355);
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const getProgrammingLanguage = (): ProgrammingLanguage => {
    const split = fileName.split(".");
    return split[split.length - 1] as ProgrammingLanguage;
  }

  const fetchLanguage = async () => {
    const language = getProgrammingLanguage();
    if (languageData[language].import) {
      await import(`prismjs/components/prism-${languageData[language].import}.min`);
    }
    return Promise.resolve(language);
  }

  useEffect(() => {
    fetchLanguage()
      .then((language) => {
        fetch(`/assets/code-snippets/${fileName}`)
          .then((res) => res.text()
            .then(setCode));
        setLanguage(language);
      })
  }, [fileName])

  useEffect(() => {
    if (ref.current) {

      Prism.highlightElement(ref.current);
      ref.current.querySelectorAll("span.token.punctuation").forEach((fragment) => {
        fragment.classList.toggle("semi-colon", fragment.innerHTML === ";")
      });
    }
  }, [code]);

  const toggleExpand = () => {
    if (ref.current && !expanded) {
      setHeight(ref.current.scrollHeight + 30);
      setExpanded(true);
    } else if (expanded) {
      setHeight(355);
      setExpanded(false);
    }
  }

  return (
    <div
      className="code-wrapper"
      style={{height}}
    >
      <div className="title-wrap">
        {language && <span className="language">{languageData[language].display}</span>}
        <span className="file-name">{fileName}</span>
        <a
          href={`https://github.com/dagropp/${github}`}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="GitHub"
          className="github"
        >
          <AppIcon
            name="github"
            color="white"
          />
        </a>
      </div>
      <pre><code
        ref={ref}
        className={`code-snippet language-${language}`}
      >{code}</code></pre>
      <button
        type="button"
        onClick={toggleExpand}
      >{expanded ? "▲ Show Less ▲" : "▼ Show More ▼"}</button>
    </div>
  )

}

export default CodeSnippet;