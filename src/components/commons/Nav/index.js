import React, { Component } from "react";
import Styled from "styled-components";
import Logo from "./Logo";
import Menu from "./Menu";
import { Burger } from "../Button";

class Nav extends Component {
  state = {
    sideBarStatus: false
  };

  toggleHandler = () => {
    this.setState({
      sideBarStatus: !this.state.sideBarStatus
    });
  };

  render() {
    const { children, logoUrl } = this.props;
    const { sideBarStatus } = this.state;
    return (
      <Wrapper className={sideBarStatus ? "active" : ""}>
        <Overlay className="overlay" onClick={this.toggleHandler} />
        <Logo url={logoUrl} />
        <Menu>{children}</Menu>
        <Burger status={sideBarStatus} btnStatus={this.toggleHandler} />
      </Wrapper>
    );
  }
}

const Overlay = Styled.nav`
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.1);
  z-index: -1;
`;

const Wrapper = Styled.nav`
  position: fixed;
  width: 300px;
  height: 100vh;
  left: -300px;
  top: 0;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  z-index: 99;
  background-color: #faf9f9;
  transition-duration: .3s;

  .overlay{
    visibility: hidden;
  }

  &.active{
    left: 0;
    .overlay{
      visibility: visible;
    }
  }

  .btn-burger{
    position: absolute;
    right: -60px;
  }
`;
export default Nav;
