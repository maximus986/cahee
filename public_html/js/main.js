$(document).ready(function () {
  // On click
  $(".hamburger").click(function () {
    // Toggle class "is-active"
    $(this).toggleClass("is-active");
  });

  //Smooth scroll
  $(".navbar-nav a").click(function () {
    $("html, body").animate({
      scrollTop: $($.attr(this, "href")).offset().top
    }, 2000);
    $(".hamburger").removeClass("is-active");
    $("#main-nav").removeClass("show");
  });

  //Reduce header padding on scroll
  $(window).scroll(function () {
    const scroll = $(window).scrollTop();
    if (scroll > 50) {
      $(".main-header").removeClass("py-lg-3 py-md-2").css("background", "rgba(255, 255, 255, 1)");
    } else {
      $(".main-header").addClass("py-lg-3 py-md-2").css("background", "rgba(255, 255, 255, 0.1)");
    }
  });

  // Animations

  function animation() {
    const windowHeight = $(window).height();
    const scrollTop = $(window).scrollTop();

    $('.animation').each(function () {
      const topPosition = $(this).offset().top;
      if (topPosition < scrollTop + windowHeight - 150) {
        const animation = $(this).data('animation');
        $(this).addClass(animation);
      }
    });
  }

  animation();

  $(window).scroll(function () {
    animation();
  });
});
