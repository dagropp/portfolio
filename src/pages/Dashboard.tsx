import React, {useEffect, useState} from "react";
import ServerService from "../global/ServerService";
import PreloaderIcon from "../icons/PreloaderIcon";
import UiService from "../global/UiService";
import "../style/cards.scss";
import CardsSwitch from "../components/cards/CardsSwitch";
import {useSetRecoilState} from "recoil";
import {appDataState} from "../global/recoil/atoms";
import {recoilService} from "../global/recoil/RecoilService";

const Dashboard: React.FC = () => {

  const [items, setItems] = useState<RestCommon[]>([]);
  const [filtered, setFiltered] = useState<RestCommon[]>([]);
  const [typeFilters, setTypeFilters] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const setAppDataState = useSetRecoilState(appDataState);

  useEffect(() => {
    ServerService.getAllItems()
      .then(({education, experience, projects, code_snippets}) => {
        setAppDataState({education, experience, projects, code_snippets});
        const items: RestCommon[] = UiService.sortByField([...education, ...experience, ...projects], "date_start");
        setItems(items);
        setFiltered(items);
      })
      .finally(() => setLoading(false));
  }, [])

  useEffect(() => {
    if (typeFilters.length) {
      const update = [...items];
      setFiltered(update.filter((item) => typeFilters.includes(item.item_type)));
    } else {
      setFiltered(items);
    }
  }, [typeFilters])

  const cards = filtered.map((item) =>
    <CardsSwitch
      key={item.id}
      item={item}
    />
  )

  const sort = (field: keyof RestCommon, descending?: boolean) => {
    const update = [...filtered];
    UiService.sortByField(update, field, descending);
    setFiltered(update);
  }

  const updateFilters = (filter: string) => {
    const update = [...typeFilters];
    const filterIndex = update.indexOf(filter);
    filterIndex !== -1 ? update.splice(filterIndex, 1) : update.push(filter);
    setTypeFilters(update);
  }

  const resetFilters = () => {
    setFiltered(items);
    setTypeFilters([]);
  }

  return (
    loading
      ?
      <section className="dev-wrapper flex-row-centered loading">
        <PreloaderIcon/>
      </section>
      :
      <>
        <div className="filters flex-col-centered">
          <div className="sorters">
            <button className="app-button clear" onClick={() => sort("date_start")}>Sort by Date ▼</button>
            <button className="app-button clear" onClick={() => sort("date_start", true)}>Sort by Date ▲</button>
            <button className="app-button clear" onClick={() => sort("item_type")}>Sort by Type</button>
          </div>
          <div className="filters">
            <button
              className={`app-button clear ${typeFilters.includes("education") ? "active" : ""}`}
              onClick={() => updateFilters("education")}
            >Education</button>
            <button
              className={`app-button clear ${typeFilters.includes("experience") ? "active" : ""}`}
              onClick={() => updateFilters("experience")}
            >Experience</button>
            <button
              className={`app-button clear ${typeFilters.includes("project") ? "active" : ""}`}
              onClick={() => updateFilters("project")}
            >Projects</button>
            <button
              className="app-button clear"
              onClick={resetFilters}
            >Reset</button>
          </div>
        </div>
        <section className="dev-wrapper">
          {cards}
        </section>
      </>
  )
}

export default Dashboard;