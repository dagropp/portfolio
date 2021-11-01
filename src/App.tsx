import React, {useEffect} from "react";
import {userService} from "./global/UserService";
import {Route, Switch, Redirect, useLocation} from "react-router-dom";
import AppHeader from "./components/header/AppHeader";
import {navService} from "./global/NavService";
import "./style/general.scss";
import "./style/main.scss";
import "./style/popup.scss";
import "./style/admin.scss";
import ContactPopup from "./components/popup/ContactPopup";
import ErrorPage from "./pages/ErrorPage";
import {useRecoilState} from "recoil";
import {recoilService} from "./global/recoil/RecoilService";
import {appDataState, breadcrumbsState, genericPopupState} from "./global/recoil/atoms";
import AppGenericPopup from "./components/popup/AppGenericPopup";

const App: React.FC = () => {

  const location = useLocation<any>();
  recoilService.setRecoilState(
    useRecoilState(appDataState),
    useRecoilState(breadcrumbsState),
    useRecoilState(genericPopupState)
  );

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
      <div className="app">
        <AppHeader/>
        <Switch location={location}>
          {routes}
          <Route path="/">
            <ErrorPage
              title="Seems like you're lost..."
              subtitle="I hope you will find what you're looking for"
              imageSrc="/assets/images/lost_animation.gif"
              placeholderSrc="/assets/images/lost_animation_placeholder.gif"
            />
          </Route>
        </Switch>
        <ContactPopup/>
        <AppGenericPopup/>
      </div>
  )
}

export default App;