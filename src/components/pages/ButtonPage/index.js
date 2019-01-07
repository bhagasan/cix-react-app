import React, { Component } from "react";
import { Title } from "../../commons/Layout";
import Button from "../../commons/Button";

const data = [
  {
    key: "area1",
    text: "Area 1"
  },
  {
    key: "area2",
    text: "Area 2"
  },
  {
    key: "area3",
    text: "Area 3"
  }
];

class ButtonPage extends Component {
  getDataOutput = value => {
    console.log("Dropdown VALUE SELECTED", value);
  };
  render() {
    return (
      <div>
        <Title>Button</Title>
        <Button
          type="dropdown"
          dataInput={data}
          dataOutput={this.getDataOutput}
        />
        <br />
        <br />
        <Button type="primary">Primary</Button>
        <br />
        <br />
        <Button type="secondary">Secondary</Button>
        <br />
        <br />
        <Button type="group" dataInput={data} dataOutput={this.getDataOutput} />
        <br />
        <br />
        <Button type="gradient" dataOutput={this.getDataOutput}>
          Gradient
        </Button>
      </div>
    );
  }
}

export default ButtonPage;
