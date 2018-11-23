import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

const Image = ({ url }) => {
  return (
    <ImgWrapper>
      <img src={url} alt="" />
    </ImgWrapper>
  );
};

const ImgWrapper = Styled.div`
  position: relative;
  width: 100%;
  max-width: 100px;
  height: 100%;
  overflow: hidden;
  border-radius: 5px;

  img{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: auto;
  }
`;

export default Image;
Image.propTypes = {
  url: PropTypes.string
};
