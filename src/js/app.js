import "vanilla-tilt";
const leftBlock = document.querySelector(".left-block");
const photo = document.querySelector(".photo");
const rightBlock = document.querySelector(".right-block");

leftBlock.addEventListener("click", function (e) {
  leftBlock.classList.toggle("scroll");
});
VanillaTilt.init(document.querySelectorAll(".skills-item"), {
  max: 25,
  speed: 800,
  glare: true,
  "max-glare": 0.4,
  scale: 1.1,
});

VanillaTilt.init(document.querySelectorAll(".skills-item"));
