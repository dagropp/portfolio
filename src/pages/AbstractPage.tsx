import React, {HTMLProps, useState} from "react";
import PreloaderIcon from "../icons/PreloaderIcon";
import useSafeParams from "../hooks/useSafeParams";

interface ContainerProps extends HTMLProps<HTMLElement> {
  item: RestCommon | undefined;
  init(id: string): Promise<RestCommon>;
}

const AbstractPage: React.FC<ContainerProps> = ({init, item, className = "", children, ...rest}) => {

  const [loading, setLoading] = useState(true);

  useSafeParams(({id}) => {
    init(id)
      .then((res) => document.title = "Daniel Gropp ⚡ " + res.title)
      .finally(() => setLoading(false))
  }, "id");

  return (
    loading
      ?
      <section className="flex-row-centered loading">
        <PreloaderIcon/>
      </section>
      :
      <section className={`details-page ${item!.item_type}`} {...rest}>
        {children}
      </section>
  )

}

export default AbstractPage;