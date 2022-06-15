const all_input = document.querySelectorAll("input");
const for_num = document.getElementById("phone");
const for_email = document.querySelector("input[type=email]");
const for_password = document.querySelector("input[type=password]");
const for_password2 = document.getElementById("pass2");
const for_username = document.getElementById("uname");

all_input.forEach((ele) => {
  ele.addEventListener("blur", (e) => {
    let errBoard = e.target.nextElementSibling;
    if (e.target.value == "" || e.target.value == null) {
      errBoard.innerHTML = "This field is required!";
    } else {
      errBoard.innerHTML = "";
    }
  });
});

for_email.addEventListener("blur", (e) => {
  var re2 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let errBoard = e.target.nextElementSibling;

  if (e.target.value == "" || e.target.value == null) {
    errBoard.innerHTML = "This field is required!";
  } else if (!re2.test(e.target.value)) {
    errBoard.innerHTML = "Enter valid e-mail address";
  } else {
    errBoard.innerHTML = "";
  }
});

for_num.addEventListener("blur", (e) => {
  var re1 = /^[0-9]{10}/;
  let errBoard = e.target.nextElementSibling;

  if (e.target.value == "" || e.target.value == null) {
    errBoard.innerHTML = "This field is required!";
  } else if (!re1.test(e.target.value)) {
    errBoard.innerHTML = "Enter valid phone number!";
  } else {
    errBoard.innerHTML = "";
  }
});

for_username.addEventListener("blur", (e) => {
  var re1 = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;
  let errBoard = e.target.nextElementSibling;

  if (e.target.value == "" || e.target.value == null) {
    errBoard.innerHTML = "This field is required!";
  } else if (!re1.test(e.target.value)) {
    errBoard.innerHTML = "Enter valid username!";
  } else {
    errBoard.innerHTML = "";
  }
});

for_password.addEventListener("blur", (e) => {
  var re1 = /^(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
  var ps2 = document.getElementById("pass2").value;
  let errBoard = e.target.nextElementSibling;

  if (e.target.value == "" || e.target.value == null) {
    errBoard.innerHTML = "This field is required!";
  } else if (!re1.test(e.target.value)) {
    errBoard.innerHTML = "Enter valid password";
  } else {
    errBoard.innerHTML = "";
  }
});

for_password2.addEventListener("blur", (e) => {
  let errBoard = e.target.nextElementSibling;

  if (e.target.value == "" || e.target.value == null) {
    errBoard.innerHTML = "This field is required!";
  } else if (e.target.value != for_password.value) {
    errBoard.innerHTML = "Both Passwors must be same";
  } else {
    errBoard = "";
  }
});

function validate() {
  return false;
}
