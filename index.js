import store from "./redux/store.js";
import getCurrentTime from "./utils/getCurrentTime.js";

const addTime = document.getElementById("addTime");
const list = document.getElementById("timesList");

addTime.addEventListener("click", () =>
  store.dispatch({
    type: "ADD_CURRENT_TIME",
    payload: getCurrentTime(),
  })
);

// const unSubscribe = store.subscribe(() =>
//   console.log(`Redux Store just changed: ${store.getState()}`)
// );
// store.dispatch({
//   type: "ADD_CURRENT_TIME",
//   payload: "11:35:00",
// });

// unSubscribe();

// store.dispatch({
//   type: "ADD_CURRENT_TIME",
//   payload: "05:35:00",
// });

// store.dispatch({
//   type: "CLEARE_ALL_TIMES",
// });
