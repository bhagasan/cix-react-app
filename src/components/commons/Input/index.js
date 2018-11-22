import React, { Component } from "react";
// import Styled from "styled-components";
import RadioButton from "./RadioButton";

class Input extends Component {
  render() {
    const { type, children } = this.props;
    if (type === "radio") {
      return <RadioButton>{children}</RadioButton>;
    }
  }
}

export default Input;
