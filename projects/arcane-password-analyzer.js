const password = document.querySelector("#password");

const showBtn = document.querySelector("#showPassword");

const strengthBar = document.querySelector("#strengthBar");

const strengthText = document.querySelector("#StrengthText");

const length = document.querySelector("#length");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const number = document.querySelector("#number");
const special = document.querySelector("#special");

let showPasswordOrHide = () => {
  if (password.type === "password") {
    password.type = "text";
    showBtn.innerHTML = "Hide Password";
  } else {
    password.type = "password";
    showBtn.innerHTML = "Show Password";
  }
};

showBtn.addEventListener("click", showPasswordOrHide);

let checkStrength = () => {
  let pass = password.value;
  let score = 0;

  if (pass.length >= 8) {
    length.innerHTML = "✦ At least 8 characters";
    score++;
  } else {
    length.innerHTML = "✧ Atleast 8 characters";
  }

  if (/[A-Z]/.test(pass)) {
    uppercase.innerHTML = "✦ At least 1 Uppercase letter";
    score++;
  } else {
    uppercase.innerHTML = "✧ Atleast 1 Uppercase letter";
  }

  if (/[a-z]/.test(pass)) {
    lowercase.innerHTML = "✦ One Lowercase Letter";
    score++;
  } else {
    lowercase.innerHTML = "✧ Atleast 1 Lowercase letter";
  }
  if (/[0-9]/.test(pass)) {
    number.innerHTML = "✦ At least 1 Number";
    score++;
  } else {
    number.innerHTML = "✧ Atleast 1 Number";
  }
  if (/[!@#$%^&*(),.?":{}|<>]/.test(pass)) {
    special.innerHTML = "✦ At least 1 Special Character";
    score++;
  } else {
    special.innerHTML = "✧ Atleast 1 Special Character";
  }

  if (score === 0) {
    strengthBar.style.width = "transparent";
    strengthText.innerHTML = "Strength: None";
  } else if (score === 1) {
    strengthBar.style.width = "20%";
    strengthBar.style.backgroundColor = "red";
    strengthText.innerHTML = "Strength: Very Weak";
  } else if (score === 2) {
    strengthBar.style.width = "40%";
    strengthBar.style.backgroundColor = "orange";
    strengthText.innerHTML = "Strength: Weak";
  } else if (score === 3) {
    strengthBar.style.width = "60%";
    strengthBar.style.backgroundColor = "yellow";
    strengthText.innerHTML = "Strength: Moderate";
  } else if (score === 4) {
    strengthBar.style.width = "80%";
    strengthBar.style.backgroundColor = "limegreen";
    strengthText.innerHTML = "Strength: Strong";
  } else if (score === 5) {
    strengthBar.style.width = "100%";
    strengthBar.style.backgroundColor = "green";
    strengthText.innerHTML = "Strength: Very Strong";
  }
};

password.addEventListener("input", checkStrength);
