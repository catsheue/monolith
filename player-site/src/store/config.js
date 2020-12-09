import { createStore, applyMiddleware } from "redux";
import { reducers } from "./reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

export const config = () =>
  createStore(reducers, applyMiddleware(logger, thunk));
