// ====Start Responsive Bar Width ===== //
let barItemWidth = 12;
if (window.innerWidth <= 1366) barItemWidth = 8;
// ====End Responsive Bar Width ===== //

const Option = (xAxisData, dataValue) => ({
  tooltip: {
    trigger: "item"
  },
  calculable: true,
  xAxis: [
    {
      type: "category",
      show: true,
      data: xAxisData,
      axisLine: {
        show: false,
        lineStyle: {
          color: "#d8d8ff"
        }
      },
      axisTick: {
        show: false
      }
    }
  ],
  yAxis: [
    {
      type: "value",
      show: true,
      axisLine: {
        lineStyle: {
          color: "#d8d8ff"
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "#6b69b9"
        }
      }
    }
  ],
  series: [
    {
      type: "bar",
      barWidth: barItemWidth,
      itemStyle: {
        normal: {
          color: function(params) {
            let colorList = ["#7d6dfc", "#92fc8e", "#ff9a8b", "#4facfe"];
            return colorList[params.dataIndex];
          },
          barBorderRadius: [15, 15, 0, 0]
        }
      },
      data: dataValue
    }
  ]
});

export default Option;
