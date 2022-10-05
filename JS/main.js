/* Set Event Timer */

//get fields to set counters
const days = document.querySelector("#days");
const hours = document.querySelector("#hrs");
const minutes = document.querySelector("#mins");
const seconds = document.querySelector("#secs");

//calculate date for counter

//get a random date
const target_date = new Date("December 31, 2022 23:59:59");

let counter = setInterval(() => {
  const today = new Date();
  const final_days = parseInt((target_date - today) / (1000 * 60 * 60 * 24));
  const final_hours = parseInt(
    (Math.abs(target_date - today) / (1000 * 60 * 60)) % 24
  );
  const final_minutes = parseInt(
    (Math.abs(target_date.getTime() - today.getTime()) / (1000 * 60)) % 60
  );
  const final_seconds = parseInt(
    (Math.abs(target_date.getTime() - today.getTime()) / 1000) % 60
  );
  days.innerHTML = final_days < 0 ? `0${final_days}` : final_days;
  hours.innerHTML = final_hours < 0 ? `0${final_hours}` : final_hours;
  minutes.innerHTML = final_hours < 0 ? `0${final_hours}` : final_hours;
  seconds.innerHTML = final_seconds < 0 ? `0${final_seconds}` : final_seconds;

  if (target_date - today < 0) clearInterval(counter);
}, 1000);

/* End of Set Event Timer */

/* Set stats Counter */
const counters = document.querySelectorAll(".num");

const statSection = document.querySelector(".stats");

let started = false;

const fillStats = (el) => {
  const goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent === goal) clearInterval(count);
  }, 2000 / goal);
};
/* End of Set stats Counter */

/* Fill Skills Bar */
const progBars = document.querySelectorAll(".skill span");
const skillsSec = document.querySelector("#skills");

let filled = false;

window.onscroll = () => {
  if (!started)
    if (window.scrollY >= statSection.offsetTop - 450) {
      counters.forEach((el) => fillStats(el));
      started = true;
    }

  if (window.scrollY >= skillsSec.offsetTop - 250) {
    progBars.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }
};
// 80 85 70 80
/* End of Fill Skills Bar */
