import React, {useEffect} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {navService} from "../../global/NavService";
import CodeSnippet from "../../components/content-sections/CodeSnippet";

const Admin: React.FC = () => {

  useEffect(() => {
    document.body.classList.add("admin");
    return () => document.body.classList.remove("admin");
  }, []);

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
      {/*<CodeSnippet*/}
      {/*  fileName="ai.py"*/}
      {/*  github="four_in_a_row/blob/master/app/classes/ai.py"*/}
      {/*/>*/}
      {/*<CodeSnippet*/}
      {/*  fileName="LinkedList.js"*/}
      {/*  github="js-dast/blob/master/src/linked-list/LinkedList.js"*/}
      {/*/>*/}
      {/*<CodeSnippet*/}
      {/*  fileName="ClosedHashSet.java"*/}
      {/*  github="hash_set/blob/master/src/ClosedHashSet.java"*/}
      {/*/>*/}
      {/*<CodeSnippet*/}
      {/*  fileName="DraggableImage.jsx"*/}
      {/*  github="hadasim/blob/master/src/react-component/admin/gallery/DraggableImage.jsx"*/}
      {/*/>*/}
    </section>
  )
}

export default Admin;