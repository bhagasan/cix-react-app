import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Nav from "./commons/Nav";
import { Section, Container } from "./commons/Layout";

import HomePage from "./pages/HomePage";
import InputPage from "./pages/InputPage";
import ChartsPage from "./pages/ChartsPage";
import ListPage from "./pages/ListPage";
import ButtonPage from "./pages/ButtonPage";

// const data = require("../data/dataList.json");

class Main extends Component {
  render() {
    return (
      <Router>
        <main>
          <Nav logoUrl="https://via.placeholder.com/150x100">
            <Link to="/">Home</Link>
            <Link to="/button-page">Button</Link>
            <Link to="/input-page">Input</Link>
            <Link to="/list-page">List</Link>
            <Link to="/charts-page">Charts</Link>
          </Nav>
          <Section>
            <Container>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/button-page" component={ButtonPage} />
                <Route path="/input-page" component={InputPage} />
                <Route path="/list-page" component={ListPage} />
                <Route path="/charts-page" component={ChartsPage} />
              </Switch>
            </Container>
          </Section>
        </main>
      </Router>
    );
  }
}

export default Main;
