import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Alert, Button } from "react-bootstrap";
import { makeRequest } from "../actions";
let isLoading = false;

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
      <div className="input my-2 mx-2">
        <label>{label}</label>
        <br />
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  renderSelect = ({ input, label, meta }) => {
    return (
      <div className="currency-select my-2 mx-2">
        <label className="mr-2">{label}</label>
        <select {...input}>
          <option />
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
          <option value="YEN">YEN</option>
          <option value="AUS">AUS</option>
          <option value="BTC">BTC</option>
        </select>
        {this.renderError(meta)}
      </div>
    );
  };

  componentDidMount() {
    this.props.makeRequest();
  }
  render() {
    return (
      <form
        className="input-form"
        // onSubmit={this.props.handleSubmit()}
      >
        <Field name="amount" label="Amount: " component={this.renderInput} />
        <div className="currencies">
          <Field
            name="input_currency"
            label="Currency:"
            component={this.renderSelect}
          />

          <Field
            name="output_currency"
            label="Output Currency:"
            component={this.renderSelect}
          />
        </div>

        <Button
          variant="outline-secondary"
          type="submit"
          disabled={isLoading}
          // onClick={!isLoading ? this.props.handleSubmit() : null}
          className="mx-2"
        >
          {isLoading ? "Loading..." : "Submit"}
        </Button>
      </form>
    );
  }
}

const validate = (values) => {
  const errors = {};
  if (!values.amount) {
    errors.amount = "You must put in an amount of money";
  }
  if (isNaN(Number(values.amount))) {
    errors.amount = errors.amount ? errors.amount : "Please use numbers only";
  }
  return errors;
};

const mapStateToProps = (state) => {
  return {
    rates: state.rates,
  };
};
CalculatorInput = connect(mapStateToProps, { makeRequest })(CalculatorInput);

export default reduxForm({ form: "CalculatorInput", validate })(
  CalculatorInput
);
