const stateDefault = {
  mangDatCuoc: [
    { ma: "rock", hinhAnh: "./img/rock.png", datCuoc: false },
    { ma: "paper", hinhAnh: "./img/paper.png", datCuoc: false },
    { ma: "scissors", hinhAnh: "./img/scissors.png", datCuoc: true },
  ],
  result: "",
  wonTimes: 0,
  playTimes: 0,
  ai: { ma: "rock", hinhAnh: "./img/rock.png" },
};

const RPSReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHOOSE_RPS": {
      let mangCuocUpdate = [...state.mangDatCuoc];
      mangCuocUpdate = mangCuocUpdate.map((item, index) => {
        return { ...item, datCuoc: false };
      });

      let index = mangCuocUpdate.findIndex((qc) => qc.ma === action.maCuoc);
      if (index !== -1) {
        mangCuocUpdate[index].datCuoc = true;
      }
      state.mangDatCuoc = mangCuocUpdate;
      return { ...state };
    }
    case "RANDOM": {
      let randomNumber = Math.floor(Math.random() * 3);
      let AIRandom = state.mangDatCuoc[randomNumber];

      state.ai = AIRandom;
      return { ...state };
    }
    case "END_GAME": {
      state.playTimes += 1;
      let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
      let ai = state.ai;
      switch (player.ma) {
        case "scissors":
          if (ai.ma === "scissors") {
            state.result = "DRAW";
          } else if (ai.ma === "rock") {
            state.result = "LOSE";
          } else {
            state.wonTimes += 1;
            state.result = "WIN";
          }
          break;
        case "rock":
          if (ai.ma === "rock") {
            state.result = "DRAW";
          } else if (ai.ma === "paper") {
            state.result = "LOSE";
          } else {
            state.wonTimes += 1;
            state.result = "WIN";
          }
          break;
        case "paper":
          if (ai.ma === "paper") {
            state.result = "DRAW";
          } else if (ai.ma === "scissors") {
            state.result = "LOSE";
          } else {
            state.wonTimes += 1;
            state.result = "WIN";
          }
          break;
        default:
          state.wonTimes += 1;
          state.result = "WIN";
      }
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default RPSReducer;
