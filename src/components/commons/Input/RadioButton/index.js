import React, { Component } from "react";
import Styled from "styled-components";

class RadioButton extends Component {
  render() {
    const RadioGroup = Styled.div`
      position: relative;
      display: flex;
      flex: 1 1 auto;
      justify-content: center;
    `;

    const { children } = this.props;
    return <RadioGroup>{children}</RadioGroup>;
  }
}

export default RadioButton;
