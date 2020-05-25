$(document).ready(function ($) {
  $(".modal__link").click(function () {
    $(".modalWrap").fadeIn();
    document.body.style.overflow = " hidden";
    return false;
  });

  $(".popup-close").click(function () {
    $(this).parents(".modalWrap").fadeOut();
    document.body.style.overflow = "auto";
    return false;
  });

  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $(".modalWrap").fadeOut();
      document.body.style.overflow = "auto";
    }
  });
});
