const stateDefault = {
  mangDatCuoc: [
    { ma: "rock", hinhAnh: "./img/rock.png", datCuoc: false },
    { ma: "paper", hinhAnh: "./img/paper.png", datCuoc: false },
    { ma: "scissors", hinhAnh: "./img/scissors.png", datCuoc: true },
  ],
  result: "I'm Iron Man and Love you 3000",
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
    default:
      return { ...state };
  }
};

export default RPSReducer;
