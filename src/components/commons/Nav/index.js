import React, { Component } from "react";
import Styled from "styled-components";
import Logo from "./Logo";
import Menu from "./Menu";

class Nav extends Component {
  render() {
    const { children, logoUrl } = this.props;
    return (
      <Wrapper>
        <Logo url={logoUrl} />
        <Menu>{children}</Menu>
      </Wrapper>
    );
  }
}
const Wrapper = Styled.nav`
  position: fixed;
  width: 100%;
  height: 60px;
  left: 0;
  top: 0;
  padding: 10px 50px;
  display: flex;
`;
export default Nav;
