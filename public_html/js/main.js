$(document).ready(function () {


  // On click
  $(".hamburger").click(function () {
    // Toggle class "is-active"
    $(this).toggleClass("is-active");
  });

  //Smooth scroll
  $(".navbar-nav a").click(function (e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: $($.attr(this, "href")).offset().top
    }, 2000);
    $(".hamburger").removeClass("is-active");
    $("#main-nav").removeClass("show");

    linkActive();
  });



  //Reduce header padding on scroll
  $(window).scroll(function () {
    animation(); // Start animation on window scroll
    animateHeader(); //Animate header on window scroll
    linkActive();
  });

  animation(); // Start animation on window load
  animateHeader(); //Animate header on window load

  //Header animation function
  function animateHeader() {
    const scroll = $(window).scrollTop();
    if (scroll > 50) {
      $(".main-header").removeClass("py-lg-3 py-md-2").css("background", "rgba(255, 255, 255, 1)");
    } else {
      $(".main-header").addClass("py-lg-3 py-md-2").css("background", "rgba(255, 255, 255, 0.1)");
    }
  }

  // Animation function

  function animation() {

    const windowHeight = $(window).height();
    const scrollDown = $(window).scrollTop();

    $('.animation').each(function () {
      const position = $(this).offset().top;

      if (position < scrollDown + windowHeight - 50) {
        const animation = $(this).attr('data-animation');
        const delay = $(this).attr('data-delay');
        $(this).css('animation-delay', delay);
        $(this).addClass(animation);
      }
    });
  }

  // Add overline and removes it
  function linkActive() {
    const navLinks = Array.from(document.querySelectorAll(".nav-link"));
    navLinks.map(navLink => {
      if (!navLink.classList.contains("active")) {
        navLink.classList.add("hvr-overline-from-left");
      } else {
        navLink.classList.remove("hvr-overline-from-left");
      }
    });
  }

  //Forms validation
  $(function () {
    $(".contact-form").validate({
      highlight: function (element) {
        $(element).closest(".form-group").addClass("has-danger");
        $(element).addClass("form-control-danger");
      },
      unhighlight: function (element) {
        $(element).closest(".form-group").removeClass("has-danger").addClass("has-success");
        $(element).removeClass("form-control-danger").addClass("form-control-success");
      },
      rules: {
        name: {
          required: true,
          rangelength: [2, 20]
        },
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true,
          digits: true
        },
        message: {
          required: true,
          maxlength: 255
        }
      },
      messages: {
        name: {
          required: "This field is required.",
          rangelength: "This field must contains between 2 adn 20 characters."
        },
        email: {
          required: "This field is required.",
          email: "Please enter a valid email."
        },
        phone: {
          required: "This field is required.",
          digits: "Please enter a valid phone number."
        },
        message: {
          required: "This field is required.",
          maxlength: "This field can't have more than 255 characters."
        }
      },
      errorElement: "p",
      errorPlacement: function (error, element) {
        error.appendTo($(element).closest(".form-group").find(".error-msg"));
      }

    });
    $(".subscribe-form").validate({
      highlight: function (element) {
        $(element).closest(".form-group").addClass("has-danger");
        $(element).addClass("form-control-danger");
      },
      unhighlight: function (element) {
        $(element).closest(".form-group").removeClass("has-danger").addClass("has-success");
        $(element).removeClass("form-control-danger").addClass("form-control-success");
      },
      rules: {
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        email: {
          required: "This field is required.",
          email: "Please enter a valid email."
        }
      },
      errorElement: "p",
      errorPlacement: function (error, element) {
        error.appendTo($(element).closest(".form-group").find(".error-msg"));
      }
    });
  });
});
