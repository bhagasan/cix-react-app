import React from "react";
import Styled from "styled-components";

const Secondary = ({ children, id, onclick }) => {
  return (
    <Button id={id} onClick={onclick}>
      {children}
    </Button>
  );
};
const Button = Styled.button`
    display: inline-block;
    background-color: transparent;
    padding: 5px 20px;
    color: #488b8f;
    border-radius: 50px;
    border:1px solid #488b8f;

    &:hover{
      background-color: #488b8f;
      color: white;
      border:none;
      border: 1px solid transparent;
    }
  `;

export default Secondary;
