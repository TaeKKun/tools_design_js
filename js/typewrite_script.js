const texts = ["websites.", "illustrations.", "video-games."];
let count = 0;
let index = 0;
let currText = "";
let letter = "";

const type = () => {
  if (count === texts.length) {
    count = 0;
  }

  currText = texts[count];
  letter = currText.slice(0, ++index);
  document.querySelector(".typing").textContent = letter;

  if (letter.length === currText.length) {
    count++;
    index = 0;
  }

  setTimeout(type, 200);
};

type();
