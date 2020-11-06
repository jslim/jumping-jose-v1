const character = document.getElementById("character");
const block = document.getElementById("block");
const playButton = document.querySelector(".start");
const againButton = document.querySelector(".again");
const face = document.querySelector(".face");
const deadface = document.querySelector(".deadface");
const loserMessage = document.querySelector(".loser-message");

playButton.addEventListener("click", () => {
  playButton.style.display = "none";
  setTimeout(() => {
    play();
  }, 500);
});

againButton.addEventListener("click", () => {
  reset();
  againButton.style.display = "none";
  setTimeout(() => {
    play();
  }, 1500);
});

const reset = () => {
  block.style.display = "block";
  live();
};

const play = () => {
  window.addEventListener("click", () => {
    jump();
  });

  window.addEventListener("keyup", () => {
    jump();
  });

  animateBlock();
};

const jump = () => {
  if (character.classList !== "animateCharacter") {
    character.classList.add("animateCharacter");
  }

  setTimeout(() => {
    character.classList.remove("animateCharacter");
  }, 500);
};

const animateBlock = () => {
  block.classList.add("animateBlock");
};

const checkLose = setInterval(() => {
  const charTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );

  const blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );

  if (blockLeft <= 30 && blockLeft > 0 && charTop >= 120) {
    die();
    block.classList.remove("animateBlock");
    block.style.display = "none";
  }
}, 10);

const die = () => {
  face.style.display = "none";
  deadface.style.display = "block";
  loserMessage.style.display = "block";
  againButton.style.display = "block";
};

const live = () => {
  loserMessage.style.display = "none";
  face.style.display = "block";
  deadface.style.display = "none";
  againButton.style.display = "none";
};
