import React from "react";
import ReactEcharts from "echarts-for-react";
import OptionBar from "./Options";
import moment from "moment";

const Bar = ({ data, category, dataType }) => {
  //--> dataType : [history, realtime]
  //--> category : [classification, time]
  const xAxisData = data.map(i => i.type);
  const dataValue = data.map(i => i.total);
  const DataOptions = OptionBar(xAxisData, dataValue);
  const Style = {
    height: "300px",
    width: "100%",
    marginBottom: "20px"
  };

  let dataValues = [];

  let xData = ""; // will be used when category is defined
  if (category === "timestamp") {
    let hoursData = [];
    data.forEach(data => {
      const hour = moment(data.timestamp, "YYYY-MM-DD HH:mm:ss").format(
        "HH:mm"
      );
      if (hoursData.indexOf(hour) != -1) {
        dataValues[hoursData.indexOf(hour)] += parseInt(data.total);
      } else {
        hoursData.push(hour);
        dataValues.push(parseInt(data.total));
      }
    });
    xData = hoursData;
  } else if (category === "date") {
    let dateData = [];

    data.forEach(data => {
      const day = moment(data.date, "YYYY-MM-DD").format("DD");

      if (dateData.indexOf(day) !== -1) {
        dataValues[dateData.indexOf(day)] += parseInt(data.total);
      } else {
        dateData.push(day);
        dataValues.push(parseInt(data.total));
      }
    });
    xData = dateData;
  }
  return <ReactEcharts option={DataOptions} style={Style} />;
};

export default Bar;
