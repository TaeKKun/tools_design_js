const smoothScroll = (target, duration) => {
  let tarGet = document.querySelector(target);
  let targetPos = tarGet.getBoundingClientRect().top;
  let startPos = window.pageYOffset;
  let distance = targetPos - startPos;
  let startTime = null;

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;

    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed, startPos, distance, duration);

    window.scrollTo(0, run);

    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  const ease = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  requestAnimationFrame(animation);
};

let selectOne = document.querySelector(".section-1");
let selectTwo = document.querySelector(".section-2");

selectOne.addEventListener("click", () => {
  smoothScroll(".section-2", 1700);
});

selectTwo.addEventListener("click", () => {
  smoothScroll(".section-1", 1700);
});
