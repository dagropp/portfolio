import {useEffect} from "react";
import {useLocation} from "react-router-dom";

interface LocationStateOptions {
  state?: string | string[];
}

const useLocationState = (callback: (state: any) => any, options: LocationStateOptions = {}): void => {

  const location = useLocation();
  const locationState: any = location?.state ?? {};
  const state = options.state ? typeof options.state === "string" ? [options.state] : options.state : [];

  useEffect(() => {
    if (state.every((key) => key in locationState)) return callback(locationState);
  }, [locationState])
}

export default useLocationState;
