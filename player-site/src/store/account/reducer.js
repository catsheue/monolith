import * as actionTypes from "./actionTypes";

const init = {
  image: null,
  name: "cat",
  balance: 999,
};

export default function userReducer(state = init, action) {
  switch (action.type) {
    case actionTypes.GET_ACCOUNT_IMAGE:
      return {
        ...state,
        image: action.address,
      };
    case actionTypes.CLEAR_ACCOUNT_IMAGE:
      return {
        ...state,
        image: null,
      };
    default:
      return state;
  }
}
