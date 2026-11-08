let userInput = document.querySelector("#eventDate");
let btn = document.querySelector("#btn");
let days = document.querySelector("#Days");
let hours = document.querySelector("#hrs");
let minutes = document.querySelector("#mins");
let seconds = document.querySelector("#Seconds");
let timer;

let remainingTime = () => {
  clearInterval(timer);
  timer = setInterval(() => {
    let selectedDate = new Date(userInput.value);
    let currentDate = new Date();
  let difference = selectedDate - currentDate;
    if (difference <= 0) {
      clearInterval(timer);
      days.textContent = "Remaining Days : 0";
      hours.textContent = "Remaining hours : 0";
      minutes.textContent = "Remaining minutes : 0";
      seconds.textContent = "Remaining seconds  : 0";

      alert("The Event has arrived");
      return;
    }
    
 let totalSec = Math.floor(difference/1000)
let d = Math.floor(totalSec/(24*60*60))
let h = Math.floor(totalSec%(24*60*60)/(60*60))
let m = Math.floor((totalSec%(60*60)) /60)
let s = Math.floor  (totalSec % 60)
 days.textContent="Remaining Days: "+d + "Days"
 minutes.textContent="Remaining Minutes:"+m + "Mintues"
 hours.textContent="Remaining Hours: "+h +"Hours"
 seconds.textContent="Remaining Seconds: "+s + "seconds"


    


}, 1000);
 

};
btn.addEventListener("click",remainingTime)
