import React, { Component } from "react";
import Styled from "styled-components";

const Section = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = Styled.section`
  width: 100%;
  position: relative;
  padding-top: 60px;
`;

export default Section;
