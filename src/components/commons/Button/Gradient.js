import React, { Component } from "react";
import Styled from "styled-components";
import ImageUrl from "../../../assets/images/Rolling-1s-200px.svg";

class Gradient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    };
  }
  clickHandler = () => {
    this.setState(prevState => ({
      isLoading: !prevState.isLoading
    }));

    this.props.dataOutput(this.state.isLoading);
  };
  render() {
    const { children, id, onclick } = this.props;
    const { isLoading } = this.state;
    return (
      <Wrapper>
        <Button
          id={id}
          onClick={this.clickHandler}
          className={isLoading ? "loading" : ""}
        >
          {!isLoading && <span>{children}</span>}
          <img src={ImageUrl} alt="" />
        </Button>
      </Wrapper>
    );
  }
}

const Wrapper = Styled.div`
  position: relative;
  width: 100px;
  height: 30px;
`;
const Button = Styled.button`
    flex: 1 1 auto;
    padding: 5px 20px;
    text-align: center;
    transition: 0.3s;
    background-size: 200% auto;
    color: white;
    border-radius: 100px;
    background-image: linear-gradient(to right, #ff75f1 0%, #ff75ac 51%, #ff0055 100%);
    border: 1px solid transparent;
    border-radius: 50px;
    background-color: transparent;
    background-position: right center;
    width: 100px;
    height: 30px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    img{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 30px;
      height: 30px;
      opacity: 0;
      transition: 0.3s;
    }

    &.loading{
      width: 30px;
      height: 30px;
      padding: 0;
      transition: 0.5s;
      img{
        opacity: 1;
        transition-delay: .4s;
      }
    }

    &:hover{
      background-position: center;
    }
  `;

export default Gradient;
