import moment from "moment";

function showDate() {
  const currentDay = moment().format("MMMM Do YYYY, h:mm:ss a");
  document.getElementById("date").innerHTML = `<h2>${currentDay}</h2>`;
}

const button = document.getElementById("show-date-btn");
button.addEventListener("click", showDate);
