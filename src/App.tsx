import React, {useEffect, useState} from "react";
import {userService} from "./global/UserService";
import {Route, Switch, Redirect, useLocation} from "react-router-dom";
import AppHeader from "./components/header/AppHeader";
import {navService} from "./global/NavService";
import "./style/general.scss";
import "./style/main.scss";
import "./style/popup.scss";
import "./style/admin.scss";
import ContactPopup from "./components/popup/ContactPopup";
import AppContext from "./context/AppContext";

const App: React.FC = () => {

  const location = useLocation<any>();

  const [theme, setTheme] = useState<AppTheme>("light");

  const routes = navService.getMenuItems()
    .map(({id, path, component, redirect}) =>
      <Route
        key={id}
        path={path}
        component={component}
        exact={id !== "admin"}
      >
        {redirect && <Redirect to={redirect}/>}
      </Route>
    )

  useEffect(() => {
    userService.trackUser(location.pathname, "entrance");
    window.addEventListener("beforeunload",
      () => userService.trackUser(location.pathname, "exit"),
      {once: true}
    );
    navService.setLocation(location);
  }, []);

  useEffect(() => {
    userService.trackUser(location.pathname, "browse");
  }, [location.pathname]);

  return (
    <AppContext.Provider value={{theme, setTheme}}>
      <div className={`app ${theme}`}>
        <AppHeader/>
        <Switch location={location}>
          {routes}
        </Switch>
        <ContactPopup/>
      </div>
    </AppContext.Provider>
  )
}

export default App;