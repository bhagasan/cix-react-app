import React, { Component } from "react";
import { Title } from "../../commons/Layout";
import Chart from "../../commons/Chart";

class ChartsPage extends Component {
  render() {
    const dataClass1 = {
      ok: true,
      type: "chart",
      class: [{ total: "4", type: "known" }, { total: "164", type: "unknown" }]
    };
    return (
      <div>
        <Title>CHARTS</Title>
        <Chart chartType="bar" data={dataClass1} />
      </div>
    );
  }
}

export default ChartsPage;
