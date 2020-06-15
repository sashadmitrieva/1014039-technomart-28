var feedback = document.querySelector(".btn-feedback");
var popupfeedback = document.querySelector(".popup-write-us");
var close = document.querySelector(".popup-close-btn");

var form = popupfeedback.querySelector("form");

var login = popupfeedback.querySelector("[name=name]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

feedback.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupfeedback.classList.add("popup-show");

  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupfeedback.classList.remove("popup-show");
  popupfeedback.classList.remove("popup-error");
});

form.addEventListener("submit", function(evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
    popupfeedback.classList.remove("popup-error");
    popupfeedback.offsetWidth = popupfeedback.offsetWidth;
    popupfeedback.classList.add("popup-error");
  } else {
    if (isStorageSupport) {
      evt.preventDefault();
      localStorage.setItem("login", login.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popupfeedback.classList.contains("popup-show")) {
      evt.preventDefault();
      popupfeedback.classList.remove("popup-show");
    }
  }
});
