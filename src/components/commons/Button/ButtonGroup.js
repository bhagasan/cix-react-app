import React, { Component } from "react";
import Styled from "styled-components";
import Button from "./Primary";

class ButtonGroup extends Component {
  clickHandler = event => {
    this.props.dataOutput(event.target.id);
  };

  render() {
    const { children, dataInput } = this.props;

    if (children) {
      return <Wrapper>{children}</Wrapper>;
    } else {
      return (
        <Wrapper>
          {dataInput.map((i, idx) => {
            return (
              <Button key={idx} id={i.key} onclick={this.clickHandler}>
                {i.text}
              </Button>
            );
          })}
        </Wrapper>
      );
    }
  }
}

const Wrapper = Styled.div`
  position: relative;
  display: flex;
  flex: 1 1 auto;
  width: max-content;

  button{
    border-radius: 0;
    border: 1px solid white;
    cursor: pointer;
    &:first-child{
      border-radius: 50px 0 0 50px;
    }
    &:last-child{
      border-radius: 0 50px 50px 0;
    }
  }
`;

export default ButtonGroup;
