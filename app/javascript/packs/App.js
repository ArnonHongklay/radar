import React, { Component } from "react";
import ReactDOM from "react-dom";
// import { Router, Route, hashHistory } from "react-router";
import { HashRouter, Route, Link } from "react-router-dom";

// const App = () => {
//   return (
//     <div className="container">
//       <Search />
//     </div>
//   );
// };

import About from "../components/About";
import Repos from "../components/Repos";
import Search from "../components/Search";

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path="/" component={Search} />
      <Route path="about" component={About} />
      <Route path="repos" component={Repos} />
    </div>
  </HashRouter>,
  document.getElementById("app")
);
