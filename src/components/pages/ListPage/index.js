import React, { Component } from "react";
import { Title } from "../../commons/Layout";
import List from "../../commons/List";

const data = require("../../../data/dataList.json");

class ListPage extends Component {
  render() {
    return (
      <div>
        <Title>List</Title>
        <List column={data} />
      </div>
    );
  }
}

export default ListPage;
