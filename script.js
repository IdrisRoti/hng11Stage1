const currDay = document.querySelector(".day");
const currTime = document.querySelector(".time");
// const currentDay = document.querySelector(".day");
// const currentUTCtime = document.querySelector(".time");

const dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const today = new Date();
const day = today.getDay();
const hours = today.getUTCHours();
const minutes = today.getUTCMinutes();
const seconds = today.getUTCSeconds();
const milliseconds = today.getUTCMilliseconds();

const dayString = dayArray[day];
const time = hours + ":" + minutes + ":" + seconds + ":" + milliseconds;

currDay.innerText = dayString;
currDay.setAttribute("data-test-id", dayString)

currTime.innerText = time;
currTime.setAttribute("data-test-id", time)