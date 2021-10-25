import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {navService} from "../../global/NavService";
import CodeSnippet from "../../components/content-sections/CodeSnippet";
import ServerService from "../../global/ServerService";

const Admin: React.FC = () => {

  const [code, setCode] = useState<RestCodeSnippet[]>([]);

  useEffect(() => {
    document.body.classList.add("admin");
    ServerService.getTable("code_snippets")
      .then(setCode)
    return () => document.body.classList.remove("admin");
  }, []);

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
      {code.map((item) =>
        <React.Fragment key={item.id}>
          <p>{item.description}</p>
          <CodeSnippet item={item}/>
        </React.Fragment>
      )}
      <form action=".." id='form1'></form>
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