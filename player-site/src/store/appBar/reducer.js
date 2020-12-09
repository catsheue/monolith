import React from "react";
import * as actionTypes from "./actionTypes";
import { NavLink } from "react-router-dom";

const init = {
  linkList: [
    {
      id: "lobby",
      render: (item) => <NavLink to="/lobby">{item}</NavLink>,
    },
    {
      id: "account",
      render: (item) => <NavLink to="/account">{item}</NavLink>,
    },
  ],
};

export default function userReducer(state = init, action) {
  switch (action.type) {
    case actionTypes.CHANGE_LIST:
      return {
        ...state,
        linkList: action.payload,
      };
    default:
      return state;
  }
}
