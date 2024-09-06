import getCurrentTime from "../utils/getCurrentTime.js";
import { ADD_CURRENT_TIME, CLEARE_ALL_TIMES } from "./actionTypes.js";

export function addCurrentTime() {
  return {
    type: ADD_CURRENT_TIME,
    payload: getCurrentTime(),
  };
}

export function clearTime() {
  return {
    type: CLEARE_ALL_TIMES,
  };
}
