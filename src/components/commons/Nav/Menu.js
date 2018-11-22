import React from "react";
import Styled from "styled-components";

const Wrapper = Styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  height: 100%;
  justify-content: flex-end;
`;

const Block = Styled.div`
  &:not(:last-child){
    margin-right: 30px;
  }
`;

const Menu = ({ children }) => {
  return (
    <Wrapper>
      {children.map((elment, idx) => {
        return <Block key={idx}>{elment}</Block>;
      })}
    </Wrapper>
  );
};

export default Menu;
