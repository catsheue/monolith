import * as actionTypes from "./actionTypes";
export const clearLobbyImage = () => ({ type: actionTypes.CLEAR_LOBBY_IMAGE });
export const getLobbyImage = (url) => async (dispatch) => {
  try {
    const res = await fetch(url, {
      method: "GET",
    });
    const address = await res.json();
    dispatch({ type: actionTypes.GET_LOBBY_IMAGE, address });
  } catch (err) {
    console.log("error");
  }
};
