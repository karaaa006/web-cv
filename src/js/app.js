import "vanilla-tilt";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";

new Splide(".splide", {
  type: "loop",
  padding: "5rem",
  gap: "1rem",
  pagination: false,
  arrows: false,
}).mount();

VanillaTilt.init(document.querySelectorAll(".skills-item"), {
  max: 25,
  speed: 800,
  glare: true,
  "max-glare": 0.4,
  scale: 1.1,
});

VanillaTilt.init(document.querySelectorAll(".skills-item"));
