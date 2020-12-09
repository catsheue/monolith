import * as actionTypes from "./actionTypes";

const init = {
  image: null,
  list: [
    {
      id: 0,
      type: "early",
      name: "basketball",
    },
    {
      id: 1,
      type: "today",
      name: "baseball",
    },
    {
      id: 3,
      type: "parlay",
      name: "Floorball",
    },
  ],
};

export default function userReducer(state = init, action) {
  switch (action.type) {
    case actionTypes.GET_LOBBY_IMAGE:
      return {
        ...state,
        image: action.address,
      };
    case actionTypes.CLEAR_LOBBY_IMAGE:
      return {
        ...state,
        image: null,
      };
    default:
      return state;
  }
}
