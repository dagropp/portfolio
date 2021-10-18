import React, {useEffect} from "react";
import {userService} from "./global/UserService";
import {Route, Switch, Redirect, useLocation} from "react-router-dom";
import AppMenu from "./components/AppMenu";
import {navService} from "./global/NavService";
import "./style/general.scss";
import "./style/main.scss";
import "./style/popup.scss";
import "./style/admin.scss";
import ContactPopup from "./components/popup/ContactPopup";

const App: React.FC = () => {

  const location = useLocation();

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
  }, []);

  useEffect(() => {
    userService.trackUser(location.pathname, "browse");
  }, [location.pathname]);

  return (
    <>
      <AppMenu/>
      <Switch location={location}>
        {routes}
      </Switch>
      <ContactPopup/>
    </>
  );
}

export default App;