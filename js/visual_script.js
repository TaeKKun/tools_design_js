const scrollAppear = () => {
  let introText = document.querySelector(".intro-text");
  let introPos = introText.getBoundingClientRect().top;
  let screenPos = window.innerHeight / 1.3;

  if (introPos > screenPos) {
    introText.classList.add("intro-appear");
  }
};

window.addEventListener("scroll", scrollAppear);
