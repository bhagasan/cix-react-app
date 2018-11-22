import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RadioButtonPage from "./pages/RadioButtonPage";
import ListPage from "./pages/ListPage";
import Nav from "./commons/Nav";
import Section from "./commons/Section";

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
          </Nav>
          <Section>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/radio-button-page" component={RadioButtonPage} />
              <Route path="/list-page" component={ListPage} />
            </Switch>
          </Section>
        </main>
      </Router>
    );
  }
}

export default Main;
