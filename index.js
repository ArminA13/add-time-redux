import store from "./redux/store.js";
import getCurrentTime from "./utils/getCurrentTime.js";

const addTimeBtn = document.getElementById("addTime");

addTimeBtn.addEventListener("click", () =>
  store.dispatch({
    type: "ADD_CURRENT_TIME",
    payload: getCurrentTime(),
  })
);

const timesList = document.getElementById("timesList");

store.subscribe(() => {
  const times = store.getState();
});

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
