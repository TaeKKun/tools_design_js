const carouselSlide = document.querySelector(".carousel-slide");
const carouselImgs = document.querySelectorAll(".carousel-slide img");
// buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

// counter
let counter = 1;
const size = carouselImgs[0].clientWidth;

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

// button listeners
prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

nextBtn.addEventListener("click", () => {
  if (counter >= carouselImgs.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImgs[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImgs.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }

  if (carouselImgs[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImgs.length - counter;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});
