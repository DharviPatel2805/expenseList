import React from "react";

import "./ExpenseFilter.css";

function ExpensesFilter(props) {

    function optionHandler(event){
         props.onFilterOptionHandler(event.target.value);
    }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select  value= {props.selectedYear} onChange= {optionHandler}>
          <option value="2019">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
