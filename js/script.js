$(document).ready(function () {
  // 마우스 오버시 add 추가
  $(".gnb").mouseover(function () {
    $("header").addClass("over");
  });

  $(".nav_gnb").mouseover(function () {
    $(this).addClass("on");
  });

  // 마우스 리브 add 삭제
  $(".gnb").mouseleave(function () {
    $("header").removeClass("over");
  });

  $(".nav_gnb").mouseleave(function () {
    $(this).removeClass("on");
  });
});

//bottom_section 호버시 배경 변경
$(".bottom_section .txt_box").hover(function () {
  $(this).parent().addClass("on");
  var botBg = jQuery(this).parent().attr("bot-bg");
  if (screen.width > 768) {
      if ($(this).parent().hasClass("on")) {
          $(".bottom_section .bg").css("background-image", "url(" + botBg + ")");
          $(this).parent().toggleClass("hover_on");
          $(".bottom_section>ul").toggleClass("on");
      } else {
          $(".bottom_section .bg").css("background-image", "url(" + botBg + ")");
      }
  } else {
  }
});

// TOP 버튼 클래스
var top_btn = new EzenScrollClass(".fix_btn",{
  baseline: 900,
});

var swiper = new Swiper(".swiper-container", {
  loop: true,
  speed: 1400,
  effect: "creative",
  creativeEffect: {
    prev: {
      translate: ["-50%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

AOS.init();

//vibe_section bg slide
var swiper2 = new Swiper(".bg_slide", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  effect: "fade",
  fadeEffect: {
      crossFade: true,
  },
  speed: 1000,
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
  touchRatio: 0,
});

var header_scroll = new EzenScrollClass("header",{
  baseline: 250,
});

var nav_icon = new EzenAddClass(".nav-icon");

var sub_open1 = new EzenAddClass(".sub_open1");
var sub_open4 = new EzenAddClass(".sub_open4");
var sub_open5 = new EzenAddClass(".sub_open5");
var sub_open6 = new EzenAddClass(".sub_open6");


