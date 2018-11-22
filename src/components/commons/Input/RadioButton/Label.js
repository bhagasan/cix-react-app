import React, { Component } from "react";
import Styled from "styled-components";

class Label extends Component {
  onChangeHanlder = ({ target: { value } }) => {
    this.props.selectedItem(value);
  };
  render() {
    const Wrapper = Styled.div`
      display: inline-block;
      position: relative;
      &:not(:last-child){
        margin-right: 30px;
      }
    `;

    const { name, id, children, value, selected } = this.props;
    return (
      <Wrapper>
        <input
          type="radio"
          name={name}
          id={id}
          value={value}
          onChange={this.onChangeHanlder}
          checked={selected === value}
        />
        <label htmlFor={id}>{children}</label>
      </Wrapper>
    );
  }
}

export default Label;
