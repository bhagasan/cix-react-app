import React, { Component } from "react";
import Styled from "styled-components";

class Burger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClose: true
    };
  }
  clickHandler = () => {
    this.setState(prevState => ({
      isClose: !prevState.isClose
    }));

    this.props.btnStatus(this.state.isClose);
  };

  render() {
    return (
      <Button
        className={`btn-burger ${this.props.status ? "active" : ""}`}
        onClick={this.clickHandler}
      >
        <Icon className="icon" />
      </Button>
    );
  }
}

const Button = Styled.button`
  position: relative;
  background-color: white;
  width: 60px;
  height: 60px;
  border: none;
  cursor: pointer;

  &.active {
    .icon{
      background-color: transparent;
      &:before, &:after{
        top: 50%;
      }
      &:before{
        transform: translate(-50%, -50%) rotate(-45deg);
      }
      &:after{
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }
  }
`;

const Icon = Styled.div`
  position:absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 35px;
  height: 5px;
  background-color: #488b8f;
  border-radius: 30px;
  transition-duration: .3s

  &:before, &:after{
    content: '';
    position: absolute;
    left: 50%;
    width: 35px;
    height: 5px;
    background-color: #488b8f;
    border-radius: 30px;
    transform: translate(-50%, -50%);
    transition-duration: .3s
  }
  &:before{
    top: -150%;
  }
  &:after{
    top: 250%;
  }
`;

export default Burger;
