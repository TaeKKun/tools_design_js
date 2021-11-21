const animatedForm = () => {
  const arrows = document.querySelectorAll(".fa-arrow-down");

  arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      const parent = arrow.parentElement;
      const input = arrow.previousElementSibling;
      const nextInput = parent.nextElementSibling;

      if (input.type === "text" && validateUser(input)) {
        nextSlide(parent, nextInput);
      } else if (input.type === "email" && validateEmail(input)) {
        nextSlide(parent, nextInput);
      } else if (input.type === "password" && validateUser(input)) {
        nextSlide(parent, nextInput);
      } else {
        parent.style.animation = "shake 0.8s ease";
      }

      parent.addEventListener('animationend', () => {
        parent.style.animation = "";
      });
    });
  });
};

const validateUser = (user) => {
  if (user.value.length < 6) {
    console.log("not enough characters!");
    error("rgb(189, 87, 87)");
  } else {
    error("rgb(87, 189, 130)");
    return true;
  }
};

const validateEmail = (email) => {
  const validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (validation.test(email.value)) {
    error("rgb(87, 189, 130)");
    return true;
  } else {
    error("rgb(189, 87, 87)");
  }
};

const nextSlide = (parent, nextInput) => {
  parent.classList.add("inactive");
  parent.classList.remove("active");
  nextInput.classList.add("active");
};

const error = (color) => {
  document.body.style.backgroundColor = color;
};

animatedForm();
