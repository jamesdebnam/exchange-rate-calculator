import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class CalculatorInput extends Component {
  render() {
    return (
      <form className="input-form">
        <Field name="amount" type="number" label="Amount: " component="input" />
        <Field name="currency" component="select">
          <option />
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
          <option value="YEN">YEN</option>
          <option value="AUS">AUS</option>
          <option value="BTC">BTC</option>
        </Field>
      </form>
    );
  }
}

export default reduxForm({ form: "CalculatorInput" })(CalculatorInput);
