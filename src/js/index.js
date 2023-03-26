// Dropdown
$(".drop-toggle").click(function () {
  if ($(".n-dropdown").hasClass("active-dropdown")) {
    $(".n-dropdown").removeClass("active-dropdown");
  } else {
    $(".n-dropdown").addClass("active-dropdown");
  }
});

// PopUp Video
$(function () {
  $(".video-popup").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
});

// Sidebar Toggle left
const sideToggle = () => {
  // Variables
  const toggle = document.querySelector(".toggle");
  const dashboard = document.querySelector(".dashboard");

  // Function
  const clickEvent = () => {
    dashboard.classList.toggle("sidebar-toggle");
  };

  // Events
  toggle.addEventListener("click", clickEvent);
};
sideToggle();

// Sidebar Toggle right
const navToggle = () => {
  // Variables
  const toggles = document.querySelector(".nav-toggle");
  const dashboards = document.querySelector(".dashboard");

  // Function
  const clickEventn = () => {
    dashboards.classList.toggle("nav-show");
  };

  // Events
  toggles.addEventListener("click", clickEventn);
};
navToggle();

// Dropdown of sidebar
$(document).ready(function () {
  //jquery for toggle sub menus
  $(".sidedrop-toggle").click(function () {
    $(this).next(".side-drop").slideToggle();
    $(this).find(".dropdown").toggleClass("rotate");
  });

  //jquery for expand and collapse the sidebar
  //   $(".menu-btn").click(function () {
  //     $(".side-bar").addClass("active");
  //     $(".menu-btn").css("visibility", "hidden");
  //   });

  //   $(".close-btn").click(function () {
  //     $(".side-bar").removeClass("active");
  //     $(".menu-btn").css("visibility", "visible");
  //   });
});

// Sidebar Active link

$(document).ready(function () {
  $(".sidebar-link").click(function () {
    $(".sidebar-link").removeClass("active");
    $(this).addClass("active");
  });
});

// Back to bottom
const btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 200) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "200");
});

// Gallery
$(document).ready(function () {
  $(".popup-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function (item) {
        return item.el.attr("title") + "<small>by Manisha</small>";
      },
    },
  });
});

$(window).on("load", function () {
  setTimeout(function () {
    $(".loader").fadeOut("slow");
  }, 2500);
});

// $(document).ready(function () {
//   $("#theme").click(function () {
//     $(this)
//       .find(".fa-moon-stars,.fa-sun")
//       .toggleClass("fa-moon-stars")
//       .toggleClass("fa-sun");
//   });
// });
