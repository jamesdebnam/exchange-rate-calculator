import React, { Component } from "react";
import { connect } from "react-redux";

class CalculatorOutput extends Component {
  render() {
    return (
      <div>
        <div className="input my-2 mx-2">
          <label>Output:</label>
          <br />
          <input disabled />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rates: state.rates,
  };
};

export default connect(mapStateToProps)(CalculatorOutput);
