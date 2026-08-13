let today = document.querySelector("#todayDate");
let event = document.querySelector("#eventDate");
let btn = document.querySelector("#btn");
let result = document.querySelector("#Result");

let calculateTime = () => {
  let todayDate = new Date(today.value);
  let eventDate = new Date(event.value);
  let todayTime = todayDate.getTime();
  let eventTime = eventDate.getTime();
  let difference = eventTime-todayTime;
  let miliSec = difference;
  let sec = Math.floor(difference / 1000);
  let min = Math.floor(difference / (1000 * 60));
  let hrs = Math.floor(difference / (1000* 60 * 60));
  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let month = Math.floor(days / 30);
  let years = Math.floor(days / 365);
  result.innerHTML =
    "<p><b><i> Miliseconds: " + miliSec + "<br><br>" + "</p></b></i>"+
  "<p><b><i> Seconds:" + sec + "<br><br>" + "</p></b></i>"+
  "<p><b><i> Minutes:" + min + "<br><br>" + "</p></b></i>"+
  "<p><b><i> Hours:" + hrs + "<br><br>" + "</p></b></i>"+
  "<p><b><i> Days:" + days + "<br><br>" + "</p></b></i>"+
  "<p><b><i> Month:" + month + "<br><br>" + "</p></b></i>"+
  "<p><b><i> Years" + years + "<br><br>" + "</p></b></i>";
};
btn.addEventListener("click",calculateTime)