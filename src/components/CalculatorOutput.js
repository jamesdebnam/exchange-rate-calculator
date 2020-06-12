import React, { Component } from "react";
import { connect } from "react-redux";

class CalculatorOutput extends Component {
  render() {
    return (
      <div>
        <div className="input">
          <input className="output" disabled value={this.props.output} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    output: state.output,
  };
};

export default connect(mapStateToProps)(CalculatorOutput);
