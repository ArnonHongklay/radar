import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import About from "../components/About";
import Repos from "../components/Repos";
import Search from "../components/Search";

ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/repos">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Search} />
      <Route path="/about" component={About} />
      <Route path="/repos" component={Repos} />
    </div>
  </Router>,
  document.getElementById("app")
);
