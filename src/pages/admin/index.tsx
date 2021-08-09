import React, {useEffect} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {navService} from "../../global/NavService";
import PhotoUploadWrapper from "../../components/admin/photo-uploader/PhotoUploadWrapper";
import PhotoUploadInput from "../../components/admin/photo-uploader/PhotoUploadInput";
import PhotoUploadThumbnails from "../../components/admin/photo-uploader/PhotoUploadThumbnails";

const Admin: React.FC = () => {

  useEffect(() => {
    document.body.classList.add("admin");
    return () => document.body.classList.remove("admin");
  }, [])

  const menu = navService.adminMenuItems
    .filter((item) => !item.hidden)
    .map(({id, path, title}) =>
      <li key={id}>
        <Link
          to={path}
        >{title}</Link>
      </li>
    )

  const routes = navService.adminMenuItems
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