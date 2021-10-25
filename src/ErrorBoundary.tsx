import React from "react";
import ErrorPage from "./pages/ErrorPage";

interface ContainerState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<{}, ContainerState> {

  state = {hasError: false}

  static getDerivedStateFromError() {
    return {hasError: true};
  }

  render() {
    if (this.state.hasError) return (
      <ErrorPage
        title="Something went horribly wrong!"
        subtitle="It's not you, it's me..."
        imageSrc="/assets/images/error_animation.gif"
        placeholderSrc="/assets/images/error_animation_placeholder.jpg"
      >
        <p>Luckily I surrounded the app with an <code>&lt;ErrorBoundary&gt;</code></p>
      </ErrorPage>
    )
    return this.props.children;
  }

}

export default ErrorBoundary;