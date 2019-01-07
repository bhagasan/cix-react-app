import React from "react";

import Burger from "./Burger";
import Dropdown from "./Dropdown";
import ButtonPrimary from "./Primary";
import ButtonGroup from "./ButtonGroup";
import ButtonSecondary from "./Secondary";
import ButtonGradient from "./Gradient";

const Button = ({ type, children, dataAction, dataInput, dataOutput }) => {
  switch (type) {
    case "primary": {
      return <ButtonPrimary>{children}</ButtonPrimary>;
    }
    case "secondary": {
      return <ButtonSecondary>{children}</ButtonSecondary>;
    }
    case "burger": {
      return <Burger dataInput={dataInput} dataAction={dataAction} />;
    }
    case "dropdown": {
      return <Dropdown dataInput={dataInput} dataOutput={dataOutput} />;
    }
    case "group": {
      return (
        <ButtonGroup dataInput={dataInput} dataOutput={dataOutput}>
          {children}
        </ButtonGroup>
      );
    }
    case "gradient": {
      return (
        <ButtonGradient
          dataInput={dataInput}
          dataOutput={dataOutput}
          dataAction={dataAction}
        >
          {children}
        </ButtonGradient>
      );
    }
    default: {
      break;
    }
  }
};

export default Button;
