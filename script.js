const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function page4Animation() {
  let eleC = document.querySelector(".elem-container");
  let fixed = document.querySelector("#fixed-image");
  eleC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  });
  eleC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });

  let elems = document.querySelectorAll(".elem");
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var image = e.getAttribute("data-image");
      fixed.style.backgroundImage = `url(${image})`;
    });
  });
}

function swipperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

function curserEffect() {
  const curser = document.querySelector(".curser");
  const page1Content = document.querySelector(".swiper");
  page1Content.addEventListener("mousemove", function (dets) {
    gsap.to(curser, {
      x: dets.x,
      y: dets.y,
    });
  });

  page1Content.addEventListener("mouseenter", function (dets) {
    gsap.to(curser, {
      scale: 1,
      opacity: 1,
    });
  });

  page1Content.addEventListener("mouseleave", function (dets) {
    gsap.to(curser, {
      scale: 0,
      opacity: 0,
    });
  });
}

function loader() {
  let loader = document.querySelector("#loader");
  setTimeout(function () {
    loader.style.top = "-100%";
  }, 4200);
}
function menuAnimation() {
  var menu = document.querySelector("nav h3");
  var full = document.querySelector("#full-scr");
  var navImg = document.querySelector("nav img");
  var flag = 0;
  menu.addEventListener("click", function () {
    if (flag == 0) {
      full.style.top = 0;
      navImg.style.opacity = 0;
      flag = 1;
    } else {
      full.style.top = "-100vh";
      navImg.style.opacity = 1;
      flag = 0;
    }
  });
}

page4Animation();
swipperAnimation();
curserEffect();
menuAnimation();
loader();
