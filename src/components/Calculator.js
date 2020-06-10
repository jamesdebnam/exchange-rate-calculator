import React, { Component } from "react";
import CalculatorInput from "./CalculatorInput";
export default class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <CalculatorInput />
      </div>
    );
  }
}
