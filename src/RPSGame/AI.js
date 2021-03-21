import React, { Component } from "react";
import { connect } from "react-redux";

class AI extends Component {
  render() {
    return (
      <div className="text-center player">
        <div className="choose">
          <img
            style={{ width: 90, height: 90, transform: "rotate(90deg)" }}
            src={this.props.ai.hinhAnh}
            alt={this.props.ai.hinhAnh}
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 150, height: 150 }}
          src="./img/playerComputer.png"
          alt="./img/playerComputer.png"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ai: state.RPSReducer.ai,
  };
};

export default connect(mapStateToProps)(AI);
