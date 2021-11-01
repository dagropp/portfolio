interface IconContainerProps extends HTMLProps<HTMLDivElement> {
  color?: string;
}

type AppSocialKey = "github" | "npm" | "whatsapp" | "linkedin";

type AppDevToolKey = "angularjs" | "css" | "git" | "html" | "ionic" | "java" | "javascript" | "jquery" | "less" |
  "mysql" | "npm" | "php" | "python" | "react" | "redux" | "sass" | "typescript";

type AppCtaKey = "app_link" | "download" | "website"

type AppIconType = AppSocialKey | AppDevToolKey | AppCtaKey;
