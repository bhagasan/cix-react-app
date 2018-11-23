import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Nav from "./commons/Nav";
import Section from "./commons/Section";

import HomePage from "./pages/HomePage";
import RadioButtonPage from "./pages/RadioButtonPage";
import ChartsPage from "./pages/ChartsPage";
import ListPage from "./pages/ListPage";

// const data = require("../data/dataList.json");

class Main extends Component {
  render() {
    return (
      <Router>
        <main>
          <Nav logoUrl="https://via.placeholder.com/150x100">
            <Link to="/">Home</Link>
            <Link to="/radio-button-page">Radio Button</Link>
            <Link to="/list-page">List</Link>
            <Link to="/charts-page">Charts</Link>
          </Nav>
          <Section>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/radio-button-page" component={RadioButtonPage} />
              <Route path="/list-page" component={ListPage} />
              <Route path="/charts-page" component={ChartsPage} />
            </Switch>
          </Section>
        </main>
      </Router>
    );
  }
}

export default Main;
