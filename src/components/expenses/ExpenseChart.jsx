import React from "react";

import Chart from "../chart/Chart";

function ExpenseChart(props){

    const chartDataPoints = [
        {label:'Jan', value: 0},
        {label:'Feb', value: 0},
        {label:'Mar', value: 0},
        {label:'Apr', value: 0},
        {label:'May', value: 0},
        {label:'Jun', value: 0},
        {label:'Jul', value: 0},
        {label:'Aug', value: 0},
        {label:'Sep', value: 0},
        {label:'Oct', value: 0},
        {label:'Nov', value: 0},
        {label:'Des', value: 0},
    ];

    for (const expense of props.expenses){
        const expenseDate = new Date(expense.date)
        const expenseMonth = expenseDate.getMonth();    //jan=0,  feb=1
        chartDataPoints[expenseMonth].value += expense.price;
    }


    return <Chart dataPoints = {chartDataPoints}/>
}

export default ExpenseChart;