var modal = document.getElementById("logModal");
var btn = document.getElementById("modal__toggle");
var span = document.getElementsByClassName("modal__close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};
