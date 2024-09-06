import store from "./redux/store.js";
import { addCurrentTime, clearTime } from "./redux/actionCreators.js";

console.log(addCurrentTime());

const addTimeBtn = document.getElementById("addTime");
addTimeBtn.addEventListener("click", () => store.dispatch(addCurrentTime()));

const clearTimes = document.getElementById("cleareTimes");
clearTimes.addEventListener("click", () => store.dispatch(clearTime()));

const timesList = document.getElementById("timesList");
store.subscribe(() => {
  timesList.innerHTML = "";
  const times = store.getState();
  times.forEach((time) => {
    let li = document.createElement("li");
    li.innerText = time;
    timesList.appendChild(li);
  });
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
