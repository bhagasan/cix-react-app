import React, { Component } from "react";
import List from "../../commons/List";

const data = require("../../../data/dataList.json");

class ListPage extends Component {
  render() {
    return (
      <div>
        <List column={data} />
      </div>
    );
  }
}

export default ListPage;
