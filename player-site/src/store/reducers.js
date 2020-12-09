import { combineReducers } from "redux";
import lobbyReducer from "./lobby/reducer";
import accountReducer from "./account/reducer";
import appBarReducer from "./appBar/reducer";
import { todos, visibilityFilter } from "./todo/reducer";
export const reducers = combineReducers({
  lobby: lobbyReducer,
  account: accountReducer,
  appBar: appBarReducer,
  todos,
  visibilityFilter,
});

export default reducers;
