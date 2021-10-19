import {useParams} from "react-router-dom";
import {useEffect} from "react";

function useSafeParams<T>(callback: (params: T) => void, ...params: Array<keyof T>): void {

  const locationParams = useParams<T>();

  useEffect(() => {
    if (locationParams && params.every((param) => param in locationParams)) return callback(locationParams);
  }, [locationParams]);

}

export default useSafeParams;