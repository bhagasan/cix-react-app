import React from "react";
import PropTypes from "prop-types";
import Bar from "./Bar/";

const Echarts = ({ chartType, data, category }) => {
  if (chartType === "bar") {
    return <Bar data={data} category={category} />;
  }
  // else if (chartType === "line") {
  //   return <Line dataHistoryLine={dataHistory} category={category} />;
  // } else if (chartType === "bar-time") {
  //   return <BarTime dataHistoryBar={dataHistory} category={category} />;
  // }
};

export default Echarts;
Echarts.propTypes = {
  chartType: PropTypes.oneOf(["line", "bar", "pie", "bar-time"])
};
