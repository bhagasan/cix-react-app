import React from "react";
import Styled from "styled-components";

const Container = ({ children }) => {
  return <Wrapper className="container">{children}</Wrapper>;
};

const Wrapper = Styled.section`
  width: 100%;
  max-width: 1080px;
  position: relative;
  padding: 15px;
  margin: auto;
`;

export default Container;
