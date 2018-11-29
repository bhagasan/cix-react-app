import React from "react";
import Styled from "styled-components";

const Section = ({ children }) => {
  return <Wrapper className="section">{children}</Wrapper>;
};

const Wrapper = Styled.section`
  width: 100%;
  position: relative;
  padding: 50px 15px;
`;

export default Section;
