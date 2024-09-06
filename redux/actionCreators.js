import getCurrentTime from "../utils/getCurrentTime.js";

export function addCurrentTime() {
  return {
    type: "ADD_CURRENT_TIME",
    payload: getCurrentTime(),
  };
}

export function clearTime() {
  return {
    type: "CLEARE_ALL_TIMES",
  };
}
