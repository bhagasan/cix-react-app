import React from "react";
import Styled from "styled-components";

const Primary = ({ children, id, onclick }) => {
  return (
    <Button id={id} onClick={onclick}>
      {children}
    </Button>
  );
};
const Button = Styled.button`
    display: inline-block;
    background-color: #488b8f;
    padding: 5px 20px;
    color: white;
    border-radius: 50px;
    border: 1px solid transparent;

    &:hover{
      background-color: transparent;
      color: #488b8f;
      border:1px solid #488b8f;
    }
  `;

export default Primary;
