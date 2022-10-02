// Date variable and zero function
const date = new Date();
const addZero = (t) => {
  t < 10 ? (t = `0${t}`) : t;
  return t;
};

// Date divs
const dayDate = document.querySelector(".day-date");
const monthDate = document.querySelector(".month-date");
const year = document.querySelector(".year-date");

// Date innerTexts
dayDate.innerText = addZero(date.getDate());
monthDate.innerText = addZero(date.getMonth());
year.innerText = addZero(date.getFullYear());

// Background
const background = document.querySelector(".background");
const currentMonth = Number(new Date().getMonth());
if (currentMonth >= 3 && currentMonth <= 5) {
  background.className = "background spring";
} else if (currentMonth >= 6 && currentMonth <= 8) {
  background.className = "background summer";
} else if (currentMonth >= 9 && currentMonth <= 11) {
  background.className = "background fall";
} else {
  background.className = "background winter";
}

// Time divs
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

// Time innerTexts
const clock = () => {
  hour.innerText = addZero(new Date().getHours());
  minute.innerText = addZero(new Date().getMinutes());
  second.innerText = addZero(new Date().getSeconds());
};
clock();
setInterval(clock, 1000);

// Day and its gif
const day = document.querySelector(".day-name");
const dayGif = document.querySelector(".day-gif");

// getDay switch function
const dayName = (day) => {
  switch (day) {
    case 0:
      dayGif.className = "day-gif sunday";
      return "Sunday";
    case 1:
      dayGif.className = "day-gif monday";
      return "Monday";
    case 2:
      dayGif.className = "day-gif tuesday";
      return "Tuesday";
    case 3:
      dayGif.className = "day-gif wednesday";
      return "Wednesday";
    case 4:
      dayGif.className = "day-gif thursday";
      return "Thursday";
    case 5:
      dayGif.className = "day-gif friday";
      return "Friday";
    case 6:
      dayGif.className = "day-gif saturday";
      return "Saturday";
  }
};
day.innerText = dayName(date.getDay());
