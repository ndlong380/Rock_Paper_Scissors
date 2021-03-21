import React, { Component } from "react";
import { connect } from "react-redux";

class Result extends Component {
  render() {
    return (
      <div>
        <div className="display-4 text-warning">{this.props.result}</div>
        <div className="display-4 text-success">
          Won Times: <span className="text-warning">{this.props.wonTimes}</span>
        </div>
        <div className="display-4 text-success">
          Play Times: <span className="text-warning">{this.props.playTimes}</span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    result: state.RPSReducer.result,
    wonTimes: state.RPSReducer.wonTimes,
    playTimes: state.RPSReducer.playTimes,
  };
};

export default connect(mapStateToProps)(Result);
