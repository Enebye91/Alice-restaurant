const date = new Date();


const renderCalender = () => {
  date.setDate(1);
}

// en del af loopet
const monthDays = document.querySelector(".days");

const lastDay = new Date(
  date.getFullYear(),
  date.getMonth(), +1 ,0)
  .getDay();

const prevLastDay = new Date(
  date.getFullYear(),
  date.getMonth(),0)
  .getDate();

const firstDayIndex = date.getDate();

const lastDayIndex = new Date(
  date.getFullYear(),
  date.getMonth() + 1,
  0
).getDay();

const nextDays = 7 - lastDayIndex - 1;

const month = [
"Januar",
"Februar",
"Marts",
"April",
"Maj",
"Juni",
"Juli",
"August",
"September",
"Oktober",
"November",
"December",
];

document.querySelector(".date h1").innerHTML
=months[date.getMonth()];

document.querySelector(".date p").innerHTML
= Date().toDateString();

let days = "";


//loop

for(let x = firstDayIndex; x > 0; x--){
  days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
 }

//loop

for(let i = 1; i <= lastday; i ++) {
  if (i === new Date().getDate() &&
  date.getMonth() === new Date().getMonth()
)
{
  days += `<div class="today">${i}</div>`;
}
else {
  days += `<div>$(i)</div>`;
}
 }


//loop

for(let j = 1;j<= nextDays; j++) {
  days+= `<div class="next-date">${j}</day>`
    monthdays.innerHTML = days;
}


document.querySelector('next')
addEventListeneer("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalender();
});



document.querySelector('prev')
addEventListeneer("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalender();
});

renderCalender();
