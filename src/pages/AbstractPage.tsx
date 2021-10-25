import React, {HTMLProps, useState} from "react";
import PreloaderIcon from "../icons/PreloaderIcon";
import useSafeParams from "../hooks/useSafeParams";
import ServerService from "../global/ServerService";
import {navService} from "../global/NavService";
import {useRecoilState, useSetRecoilState} from "recoil";
import {appDataState, breadcrumbsState} from "../global/recoil/atoms";
import TypeUtils from "../global/TypeUtils";

interface ContainerProps extends HTMLProps<HTMLElement> {
  item: RestCommon | undefined;
  init(id: string, appData: RestDataResponse): Promise<RestCommon>;
}

const AbstractPage: React.FC<ContainerProps> = ({init, item, className = "", children, ...rest}) => {

  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const setBreadcrumbs = useSetRecoilState(breadcrumbsState);
  const [appData] = useRecoilState(appDataState);

  useSafeParams(({id}) => selfInit(id), "id");

  const selfInit = async (id: string, didAttempt?: boolean): Promise<void> => {
    try {
      const {item_type, title} = await init(id, appData);
      setBreadcrumbs([{title: TypeUtils.capitalizeString(item_type), path: `/dashboard#${item_type}`}, {title}]);
      navService.setTitle(title);
      setLoading(false)
    } catch (error) {
      if (!didAttempt) {
        await ServerService.getAllItems();
        return await selfInit(id, true);
      } else {
        setHasError(true);
        return Promise.reject(error);
      }
    }
  }

  return (
    !hasError && (loading || !item)
      ?
      <section className="flex-row-centered loading">
        <PreloaderIcon/>
      </section>
      :
      <section className={`details-page ${item?.item_type}`} {...rest}>
        {children}
      </section>
  )

}

export default AbstractPage;