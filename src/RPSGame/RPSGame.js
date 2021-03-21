import React, { Component } from "react";
import AI from "./AI";
import Player from "./Player";
import Result from "./Result";
import "./RPSGame.css";
import { connect } from "react-redux";

class RPSGame extends Component {
  render() {

    return (
      <div className="game">
        <div className="row text-center mt-5">
          <div className="col-4 mt-3">
            <Player />
          </div>
          <div className="col-4 mt-3">
            <Result />
            <button
              onClick={() => {
                this.props.playGame();
              }}
              className="btn btn-success p-3 mt-4 display-5"
            >
              Play Game
            </button>
          </div>
          <div className="col-4 mt-3">
            <AI />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      let randomAiItem = setInterval(() => {
        dispatch({
          type: "RANDOM",
        });
        count++;
        if (count >= 10) {
          clearInterval(randomAiItem);
        }
      }, 100);
    },
  };
};

export default connect(null, mapDispatchToProps)(RPSGame);
