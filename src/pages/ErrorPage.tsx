import React from "react";
import LazyLoadImage from "../components/common/LazyLoadImage";

interface ContainerProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  placeholderSrc: string;
}

const ErrorPage: React.FC<ContainerProps> = ({title, subtitle, imageSrc, placeholderSrc, children}) => {

  const redirect = () => window.location.href = "/";

  return (
    <section className="error-page">
      <h1>{title}</h1>
      <LazyLoadImage
        className="error-image"
        src={imageSrc}
        placeholder={placeholderSrc}
        alt="Error"
      />
      {subtitle && <p>{subtitle}</p>}
      {children}
      <p>But - no use crying 😭 over spilled milk 🥛</p>
      <p>
        <button className="app-button clear" onClick={redirect}>Just go home...</button>
      </p>
    </section>
  )
}

export default ErrorPage;