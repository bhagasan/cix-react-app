import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

const Logo = ({ url }) => {
  return (
    <Wrapper>
      <Link to="/">
        <img src={url} />
      </Link>
    </Wrapper>
  );
};

const Wrapper = Styled.div`
  height: 42px;
  position: relative;

  img{
    max-width: 100%;
    max-height: 100%;
  }
`;

export default Logo;
