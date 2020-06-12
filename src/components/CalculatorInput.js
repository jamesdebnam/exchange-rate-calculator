import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Alert } from "react-bootstrap";
import { makeRequest, convertCurrency, swapFields } from "../actions";

import CalculatorOutput from "./CalculatorOutput";

class CalculatorInput extends Component {
  // This shows error messages if you haven't correctly inputted shit
  renderError({ error, touched }) {
    // error and touched are destructured from the meta argument - these are passed in through redux form
    if (touched && error) {
      return (
        // If the input is touched, and an error is passed in (the errors are specified in the validate
        // function which is then connected to the component as a prop) then an error is displayed
        <Alert variant="danger" className="error">
          {error}
        </Alert>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <div className="input">
        <label className="label">{label}</label>

        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  renderSelect = ({ input, label, meta }) => {
    return (
      <div className="currency-select input">
        <label className="label">{label}</label>
        <select {...input}>
          <option />
          <option value="USD">US Dollars (USD)</option>
          <option value="GBP">Pound Sterling (GBP)</option>
          <option value="EUR">Euro (EUR)</option>
          <option value="AED">Emirati Dirham (AED)</option>
          <option value="AUD">Australian dollar (AUD)</option>
          <option value="CAD">Canadian Dollar (CAD)</option>
          <option value="HKD">Hong Kong Dollar (HKD)</option>
          <option value="JPY">Japanese Yen (JPY)</option>
          <option value="NZD">New Zealand Dollar (NZD)</option>
          <option value="SGD">Singapore Dollar (SGD)</option>
        </select>
      </div>
    );
  };

  componentDidMount() {
    this.props.makeRequest();
  }
  componentDidUpdate({ convertCurrency }) {
    convertCurrency();
  }

  render() {
    return (
      <form className="input-form">
        <div className="currencies">
          <Field
            name="input_currency"
            label="From:"
            component={this.renderSelect}
          />
          <img
            className="icon icon--swap"
            src={require("./icons/swap.svg")}
            onClick={this.props.swapFields}
            alt="swap currencies"
          />

          <Field
            name="output_currency"
            label="To:"
            component={this.renderSelect}
          />
        </div>
        <div className="amounts">
          <Field name="amount" label="Amount: " component={this.renderInput} />
          <img
            className="icon"
            src={require("./icons/right.svg")}
            alt="equals"
          />

          <CalculatorOutput />
        </div>
      </form>
    );
  }
}

const validate = (values) => {
  const errors = {};
  if (isNaN(Number(values.amount))) {
    errors.amount = errors.amount ? errors.amount : "Please use numbers only";
  }
  return errors;
};

const mapStateToProps = (state) => {
  return {
    rates: state.rates,
    inputForm: state.form,
  };
};
CalculatorInput = connect(mapStateToProps, {
  makeRequest,
  convertCurrency,
  swapFields,
})(CalculatorInput);

export default reduxForm({ form: "CalculatorInput", validate })(
  CalculatorInput
);
