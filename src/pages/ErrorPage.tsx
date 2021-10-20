import React, {useEffect, useRef} from "react";
import LazyLoadImage from "../components/common/LazyLoadImage";

interface ContainerProps {

}

const ErrorPage: React.FC<ContainerProps> = ({}) => {

  const redirect = () => window.location.href = "/";

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play();
  }, [videoRef.current])

  return (
    <section className="error-page">
      <h1>Something went horribly wrong!</h1>
      <LazyLoadImage
        className="error-image"
        src="/assets/images/error_animation.gif"
        placeholder="/assets/images/error_animation_placeholder.jpg"
        alt="Error"
      />
      <p>It's not you, it's me...</p>
      <p>Luckily I surrounded the app with an <code>&lt;ErrorBoundary&gt;</code></p>
      <p>But - no use crying 😭 over spilled milk 🥛</p>
      <p>
        <button className="app-button clear" onClick={redirect}>Just go home...</button>
      </p>
    </section>
  )
}

export default ErrorPage;