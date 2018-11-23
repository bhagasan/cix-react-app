import React, { Component } from "react";
import Styled from "styled-components";

import Group from "./Group";
import Text from "./Text";

class List extends Component {
  renderColumn = item => {
    let table = [];
    Object.keys(item).map(key => {
      if (Array.isArray(item[key])) {
        return table.push(
          <Group key={key}>
            <Text key={key}>{item[key]}</Text>
          </Group>
        );
      } else {
        return table.push(<Text key={key}>{item[key]}</Text>);
      }
    });
    return table;
  };

  render() {
    const { column, maxHeight } = this.props;

    const ScrollWrapper = Styled.div`
      position: relative;
      overflow: auto;
      max-height: ${maxHeight ? maxHeight : "auto"};
      width: 100%;
      height: 100%;
      padding: 0 10px;
    `;

    return (
      <ScrollWrapper>
        {column.map((item, idx) => {
          return <Wrapper key={idx}>{this.renderColumn(item)}</Wrapper>;
        })}
        {/*
          <Image url="https://via.placeholder.com/350x150" />
        <Text align="center">HAHAHAHAHAHAHAHAHAHAHAHAHAHAHA</Text>
        <Text align="center" color="red">
          HAHAHA
        </Text>
        <Text align="center">HAHAHA</Text>
        <Text align="center">HAHAHA</Text>
        <Group>
          <a href="#">Play</a>
          <a href="#">Pause</a>
          <a href="#">Info</a>
        </Group>
        */}
      </ScrollWrapper>
    );
  }
}

export default List;

const Wrapper = Styled.div`
  position: relative;
  display: flex;
  flex: 1 1 auto;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  padding: 5px;
  align-items: center;
  background-color: grey;
  margin: 5px auto;
`;
