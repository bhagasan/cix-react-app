import React from "react";
import Styled from "styled-components";

const Section = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = Styled.section`
  width: 100%;
  position: relative;
  padding: 80px 0px;
`;

export default Section;
