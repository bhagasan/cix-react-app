import React, { Component } from "react";
import Styled from "styled-components";

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCollapsed: false,
      dataOutput: this.props.dataInput[0].key
    };
  }

  componentDidMount() {
    this.props.dataOutput(this.props.dataInput[0].key);
  }

  clickSelectHanlder = event => {
    this.togglePupup();
    this.setState({ dataOutput: event.target.id });
    this.props.dataOutput(event.target.id);
  };
  togglePupup = () => {
    this.setState({ isCollapsed: !this.state.isCollapsed });
  };
  render() {
    const { isCollapsed } = this.state;
    const { dataInput } = this.props;

    return (
      <Wrapper>
        {dataInput.map(i => {
          if (i.key === this.state.dataOutput) {
            return (
              <Button
                className="area-selected"
                onClick={this.togglePupup}
                id={i.key}
                key={i.key}
              >
                {i.text}{" "}
                <i className={`icon-caret-${isCollapsed ? "up" : "down"}`} />
              </Button>
            );
          } else {
            return null;
          }
        })}
        {isCollapsed && (
          <Popup>
            {dataInput.map(i => {
              if (i.key !== this.state.dataOutput) {
                return (
                  <Button
                    key={i.key}
                    onClick={this.clickSelectHanlder}
                    id={i.key}
                  >
                    {i.text}
                  </Button>
                );
              } else {
                return null;
              }
            })}
          </Popup>
        )}
      </Wrapper>
    );
  }
}

const Wrapper = Styled.div`
  position: relative;
  width: max-content;
  display: inline-block;
  button{
    display: block;
  }
`;

const Button = Styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 10px;
  cursor: pointer;
  width: 100%;
  text-align: left;
  color: #5a49ae;

  i{
    font-size: 9px;
    margin-left: 5px;
  }
  
`;
const Popup = Styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #d8d8ff;
  width: 116px;
  border-radius: 7px;
  overflow: hidden;
  z-index: 2;
  button{
    &:hover{
      background-color: #ccccff;
    }
  }
`;

export default Dropdown;
