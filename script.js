const startButton = document.querySelector("#start");
const winnerColor = document.querySelector("#winnerColor");
const resultButton = document.querySelector("#result");
const easy = document.querySelector("#easy");
const hard = document.querySelector("#hard");
const center = document.querySelector(".center-block");

let luckyColor;
let colorsCollection;
let isGameFinished = false;

// ================================================================================================

easy.addEventListener("click", () => {
    removeAllChildNodes(center)

    for (let i = 0; i < 3; i++) {
        const box = document.createElement("box");
        box.className = "box";
        center.appendChild(box);
      }


  const allBoxes = document.querySelectorAll(".box");

  startButton.addEventListener("click", () => {
    colorsCollection = getRandomColorsList(3);
    luckyColor = getLuckyColor(colorsCollection);

    setColorsToBoxes(colorsCollection, allBoxes);

    winnerColor.textContent = luckyColor;

    isGameFinished = false;

    startGame();
  });

  allBoxes.forEach((box) => {
    box.addEventListener("click", (e) => {
      if (!isGameFinished) {
        if (e.target.style.backgroundColor === luckyColor) {
          resultButton.textContent = "You are right";
        } else {
          resultButton.textContent = "You are wrong";
        }
      }
      isGameFinished = true;
    });
  });

});

// ================================================================================================

hard.addEventListener("click", () => {
    removeAllChildNodes(center)

    for (let i = 0; i < 6; i++) {
        const box = document.createElement("box");
        box.className = "box";
        center.appendChild(box);
      }


  const allBoxes = document.querySelectorAll(".box");

  startButton.addEventListener("click", () => {
    colorsCollection = getRandomColorsList(6);
    luckyColor = getLuckyColor(colorsCollection);

    setColorsToBoxes(colorsCollection, allBoxes);

    winnerColor.textContent = luckyColor;

    isGameFinished = false;

    startGame();
  });

  allBoxes.forEach((box) => {
    box.addEventListener("click", (e) => {
      if (!isGameFinished) {
        if (e.target.style.backgroundColor === luckyColor) {
          resultButton.textContent = "You are right";
        } else {
          resultButton.textContent = "You are wrong";
        }
      }
      isGameFinished = true;
    });
  });

});

// ================================================================================================

function generateRandomNumber(start = 0, end = 256) {
  return Math.floor(Math.random() * (end - start + 1) + start);
}

function generateRandomColor() {
  return `rgb(${generateRandomNumber()}, ${generateRandomNumber()}, ${generateRandomNumber()})`;
}

function getRandomColorsList(num) {
  let colorsList = [];
  for (let i = 0; i < num; i++) {
    colorsList.push(generateRandomColor());
  }
  return colorsList;
}

function getLuckyColor(colorsList) {
  return colorsList[generateRandomNumber(0, colorsList.length - 1)];
}

function setColorsToBoxes(colorsList, boxArr) {
  boxArr.forEach((box, index) => {
    box.style.backgroundColor = colorsList[index];
  });
}

function startGame() {
  resultButton.textContent = "waiting for your answer";
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
