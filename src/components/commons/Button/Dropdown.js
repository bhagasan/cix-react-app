import React, { Component } from "react";
import Styled from "styled-components";

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCollapsed: false
    };
  }

  clickHanlder = event => {
    this.setState({ isCollapsed: !this.state.isCollapsed });
    console.log(event.target.id);
  };
  render() {
    const { isCollapsed } = this.state;
    const data = [
      {
        key: "area1",
        text: "Area 1"
      },
      {
        key: "area2",
        text: "Area 2"
      },
      {
        key: "area3",
        text: "Area 3"
      }
    ];
    return (
      <Wrapper>
        <Button
          className="area-selected"
          onClick={this.clickHanlder}
          id={data[0].key}
          selected={true}
        >
          {data[0].text}
          <i className={`icon-caret-${isCollapsed ? "up" : "down"}`} />
        </Button>
        {isCollapsed && (
          <Popup>
            {data.map(i => {
              return (
                <Button key={i.key} onClick={this.clickHanlder} id={i.key}>
                  {i.text}
                </Button>
              );
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
  button{
    &:hover{
      background-color: #ccccff;
    }
  }
`;

export default Dropdown;
