// Date divs
const dayDate = document.querySelector(".day-date");
const monthDate = document.querySelector(".month-date");
const year = document.querySelector(".year-date");

// Date conditions
Number(new Date().getDate()) < 10
  ? (dayDate.innerText = `0${new Date().getDate()}`)
  : (dayDate.innerText = new Date().getDate());
Number(new Date().getMonth()) < 10
  ? (monthDate.innerText = `0${new Date().getMonth()}`)
  : (monthDate.innerText = new Date().getDate());
year.innerText = new Date().getFullYear();
