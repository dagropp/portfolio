import React, {useEffect} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {navService} from "../../global/NavService";

const Admin: React.FC = () => {

  useEffect(() => {
    document.body.classList.add("admin");
    return () => document.body.classList.remove("admin");
  }, [])

  const menu = navService.getAdminMenuItems()
    .filter((item) => !item.hidden)
    .map(({id, path, title}) =>
      <li key={id}>
        <Link
          to={path}
        >{title}</Link>
      </li>
    )

  const routes = navService.getAdminMenuItems()
    .map(({id, path, component}) =>
      <Route
        key={id}
        path={path}
        component={component}
        exact
      />
    )

  return (
    <section className="admin-main">
      <Router>
        <header>
          <nav>
            <ul>
              {menu}
            </ul>
          </nav>
        </header>
        <Switch>
          {routes}
        </Switch>
      </Router>
    </section>
  )
}

export default Admin;