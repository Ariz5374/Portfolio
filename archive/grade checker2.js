let userInput = document.querySelector("#userInput");
let gradeBtn = document.querySelector("#gradeBtn");
let result = document.querySelector("#result");
let percentage = Number(userInput.value);

gradeBtn.addEventListener("click", function () {
  let percentage = Number(userInput.value);

  if (percentage >= 50) {
    result.innerHTML = " You have Passed";
    result.style.color = "Green";
    result.style.fontWeight = "bold";
    result.style.width = "60px";
    result.style.padding = "5px";
  } else {
    result.innerHTML = "You have failed ";
    result.style.color = "Red";
    result.style.fontWeight = "bold";
    result.style.width = "60px";
    result.style.padding = "5px";
  }
});
