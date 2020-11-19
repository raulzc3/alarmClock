// Selecciono los elementos html que quiero cambiar
const time = document.querySelector("#time");
const date = document.querySelector("#date");
const secondBar = document.querySelector(".seconds");
const minuteBar = document.querySelector(".minutes");
const hourBar = document.querySelector(".hours");
const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];



function padNumber(n) {
  const number = Number(n);

  if (number < 10) return `0${number}`;
  return number;
}


//Variables horarias:
function setClock() {
  const alarmTimer = document.querySelector("#alarmTimer");
  const now = new Date();
  const hour = padNumber(now.getHours());
  const minutes = padNumber(now.getMinutes());
  const seconds = padNumber(now.getSeconds());

  if (alarmTimer.value === `${hour}:${minutes}`) {
    ringAlarm();
  }

  //Variables fecha
  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  //Parpadeo puntos
  const dots = seconds % 2 === 0 ? " " : ":";

  //Barras de tiempo:
  secondBar.style.left = Number(seconds) * 1 + "vw";
  minuteBar.style.left = Number(minutes) * 1 + "vw";
  hourBar.style.left = Number(hour) * 2.5 + "vw";

  //Añadimos al documento la hora actual con los puntos:
  time.innerText = `${hour}${dots}${minutes}${dots}${seconds}`;
  //Añadimos al documento la fecha
  date.innerText = `${day}  -  ${month}  -  ${year}`;
}


function ringAlarm() {
  let color = "";

  const bg = document.querySelector("#bg");
  const interval = setInterval(() => {
    bg.style.backgroundColor = color;
    color = color === "" ? "white" : "";
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    bg.style.backgroundColor = "";
  }, 1000);

}


setInterval(setClock, 1000);
setClock();