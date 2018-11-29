import React from "react";
import Styled from "styled-components";

const Wrapper = Styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex: 1 1 auto;
  height: 100%;
  justify-content: flex-start;
  flex-direction: column;
  z-index: 2;
`;

const Block = Styled.div`
  position: relative;
  display: block;
  text-align: left;
  &.active{
    a{
      background-color: #488b8f;
      color: white;
    }
  }
  a{
    padding: 15px 20px;
    width: 100%;
    display: inline-block;
    color: #488b8f;
    &:hover{
      background-color: #488b8f;
      color: white;
    }
  }
`;

const Menu = ({ children }) => {
  return (
    <Wrapper>
      {children.map((elment, idx) => {
        return (
          <Block className="block" key={idx}>
            {elment}
          </Block>
        );
      })}
    </Wrapper>
  );
};

export default Menu;
