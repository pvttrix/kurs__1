function backToTop() {
  let button = $(".scrollUp");

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 200) {
      // длительность анимации - 'slow'
      // тип анимации -  'linear'
      $(".scrollUp").fadeIn("slow", "linear");
    } else {
      // длительность анимации - 'fast'
      // тип анимации -  'swing'
      $(".scrollUp").fadeOut("fast", "swing");
    }
  });
  button.on("click", (e) => {
    e.preventDefault();
    $("html").animate({ scrollTop: 0 }, 200);
  });
}

backToTop();
