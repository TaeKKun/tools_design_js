const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerHTML = 0;

  const updateCounter = () => {
    const targetCount = +counter.getAttribute("data-target");
    const strtCount = Number(counter.innerHTML);
    const incrm = targetCount / 100;

    if (strtCount < targetCount) {
      counter.innerHTML = `${Math.round(strtCount + incrm)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerHTML = targetCount;
    }
  };

  updateCounter();
});
