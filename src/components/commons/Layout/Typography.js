import React from "react";
import Styled from "styled-components";

const Title = ({ children }) => {
  const Text = Styled.h1`
    font-size: 32px;
    margin-top: 10px;
    margin-bottom: 20px;
    color: #1d5464;
  `;
  return <Text>{children}</Text>;
};

export { Title };
