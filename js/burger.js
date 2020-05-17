document.querySelector(".header__burger").addEventListener("click", () => {
  document.querySelector(".navigation__list").classList.toggle("active");
  document.querySelector(".header__burger").classList.toggle("clicked");
});
