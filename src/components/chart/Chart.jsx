import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
    
  const expenseValue = props.dataPoints.map((data) => data.value);
  const maxExpenseValue = Math.max(...expenseValue);

  return (
    <div className="chart">
      {props.dataPoints.map((data) => {
        return (
          <ChartBar
            key={data.id}
            value={data.value}
            maxValue={maxExpenseValue}
            label={data.label}
          />
        );
      })}
    </div>
  );
}

export default Chart;
