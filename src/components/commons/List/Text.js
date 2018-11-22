import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

const Text = ({ align, size, color, children }) => {
  const Wrapper = Styled.span`
    width: 100%;
    display: inline-block;
    font-size: ${size ? size : "12px"};
    text-align: ${align ? align : "left"};
    color: ${color};
    margin: auto;
    padding: 0 20px;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
    // max-width: 320px;
  `;
  return <Wrapper>{children}</Wrapper>;
};

export default Text;
Text.propTypes = {
  align: PropTypes.oneOf(["center", "left", "right"]),
  size: PropTypes.string,
  color: PropTypes.string
};
