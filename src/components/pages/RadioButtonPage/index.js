import React, { Component } from "react";
import { Title } from "../../commons/Layout";
import Input from "../../commons/Input";
import Label from "../../commons/Input/RadioButton/Label";

class RadioButtonPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valueSelected: "red" //select default selected
    };
  }

  buttonDataSelected = value => {
    this.setState({ valueSelected: value });
    //bikin state buat nampung data balikan dari radio button selected
  };

  render() {
    // console.log(this.state.valueSelected);

    const Style = {
      display: "block",
      width: "300px",
      height: "300px",
      background: `${this.state.valueSelected}`,
      margin: "30px auto"
    };

    return (
      <div>
        <Title>Radio Button</Title>
        <Input type="radio">
          <Label
            name="cix"
            id="red"
            value="red"
            selectedItem={this.buttonDataSelected}
            selected={this.state.valueSelected}
          >
            Red
          </Label>
          <Label
            name="cix"
            id="blue"
            value="blue"
            selectedItem={this.buttonDataSelected}
            selected={this.state.valueSelected}
          >
            Blue
          </Label>
        </Input>
        <div style={Style} />
      </div>
    );
  }
}

export default RadioButtonPage;
