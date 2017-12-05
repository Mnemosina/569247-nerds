var link = document.querySelector(".contact-link");
var popup = document.querySelector(".feedback");
var close = popup.querySelector(".close");
link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	login.focus();
});

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });