import React, {PropsWithChildren} from "react";
import ErrorPage from "./pages/ErrorPage";

interface ContainerState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<any, ContainerState> {

  constructor(props: PropsWithChildren<null>) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error: Error) {
    return {hasError: true};
  }

  render() {
    if (this.state.hasError) return <ErrorPage/>

    return this.props.children;
  }

}

export default ErrorBoundary;