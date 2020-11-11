const character = document.getElementById("character");
const block = document.getElementById("block");
const playButton = document.querySelector(".start");
const againButton = document.querySelector(".again");
const face = document.querySelector(".face");
const deadface = document.querySelector(".deadface");
const loserMessage = document.querySelector(".loser-message");
const scoreDiv = document.querySelector(".points");
const maxScoreDiv = document.querySelector(".max-points");
let interval;
let score = 0;
let maxScore = 0;

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
  runScore();
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
  stopScore();
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

const runScore = () => {
  const start = new Date().getTime();
  score = 0.1;
  interval = window.setInterval(function () {
    const time = new Date().getTime() - start;

    score = Math.floor(time / 100) * 10;

    scoreDiv.innerHTML = score;
  }, 100);
};

const stopScore = () => {
  clearInterval(interval);
  calcuteMaxScore();
};

const calcuteMaxScore = () => {
  if (score > maxScore) {
    maxScore = score;
    maxScoreDiv.innerHTML = maxScore;
  }

  score = 0;
};
