import React from "react";
import Styled from "styled-components";

const Actions = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = Styled.div`
  position: relative;
  width: max-content;
  height: 100%;
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  button, a{
    // width: 100%;
    &:not(:last-child){
      margin-right: 30px;
    }
  }
`;

export default Actions;
