import React, { Component } from "react";
import { Title } from "../../commons/Layout";
import Chart from "../../commons/Chart";
import Input from "../../commons/Input/";
import Label from "../../commons/Input/RadioButton/Label";

class ChartsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valueSelected: "all"
    };
  }

  buttonDataSelected = value => {
    this.setState({ valueSelected: value });
    console.log(value);
  };

  render() {
    const dataClass1 = {
      ok: true,
      type: "chart",
      class: [
        { total: "378", type: "known" },
        { total: "1999", type: "unknown" }
      ]
    };
    const dataClass2 = {
      ok: true,
      type: "number",
      class: [
        {
          total: "14",
          type: "motorcycle"
        },
        {
          total: "50",
          type: "suv"
        },
        {
          total: "252",
          type: "truck"
        },
        {
          total: "15",
          type: null
        }
      ]
    };

    const { valueSelected } = this.state;

    // Filter data
    let dataFiltered = [];
    if (valueSelected != "all") {
      dataFiltered = dataClass2.class.filter(i => {
        return i.type === valueSelected;
      });
    } else {
      dataFiltered = dataClass2.class;
    }
    // !Filter data
    return (
      <div>
        <Title>CHARTS</Title>
        <Input type="radio">
          <Label
            id="all"
            value="all"
            selectedItem={this.buttonDataSelected}
            selected={this.state.valueSelected}
          >
            All
          </Label>
          {dataClass2 &&
            dataClass2.class.map((d, idx) => {
              return (
                <Label
                  key={idx}
                  id={d.type ? d.type : "null"}
                  value={d.type ? d.type : "null"}
                  selectedItem={this.buttonDataSelected}
                  selected={this.state.valueSelected}
                >
                  {d.type ? d.type : "null"}
                </Label>
              );
            })}
        </Input>
        <Chart chartType="bar" dataType="history" data={dataFiltered} />
      </div>
    );
  }
}

export default ChartsPage;
