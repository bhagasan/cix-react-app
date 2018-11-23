import React, { Component } from "react";
import Styled from "styled-components";
import Logo from "./Logo";
import Menu from "./Menu";
import { Burger } from "../Button";

class Nav extends Component {
  state = {
    sideBarStatus: false
  };

  getButtonStatus = value => {
    this.setState({ sideBarStatus: value });
  };
  render() {
    const { children, logoUrl } = this.props;
    const { sideBarStatus } = this.state;
    return (
      <Wrapper className={sideBarStatus ? "active" : ""}>
        <Logo url={logoUrl} />
        <Menu>{children}</Menu>
        <Burger btnStatus={this.getButtonStatus} />
      </Wrapper>
    );
  }
}
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

  &.active{
    left: 0;
  }

  .btn-burger{
    position: absolute;
    right: -60px;
  }
`;
export default Nav;
