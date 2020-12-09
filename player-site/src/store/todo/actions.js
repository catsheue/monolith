import * as actionTypes from "./actionTypes";

export function addTodo(text, id) {
  return { type: actionTypes.ADD_TODO, id, text };
}

export function toggleTodo(index) {
  return { type: actionTypes.TOGGLE_TODO, index };
}

export function setVisibilityFilter(filter) {
  return { type: actionTypes.SET_VISIBILITY_FILTER, filter };
}
