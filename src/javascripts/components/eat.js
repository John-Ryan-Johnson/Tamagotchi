import utilities from '../helpers/utilities';

let full = 100;

const printEat = () => {
  let domString = '';
  domString += `
  <div class="eatContainer">
  <h3 class="eatTitle">Eat</h3>
  <progress id="eatBar" max="100" value="${full}"></progress>
  <button id="goodFood">Good</button>
  <button id="badFood">Bad</button>
  </div>
  `;
  utilities.printToDom('eat', domString);
};

const goodChoice = () => {
  document.getElementById('goodFood').addEventListener('click', () => {
    const add = full + 10;
    if (add > 100) {
      full = 100;
    } else {
      full = add;
    }
    document.getElementById('eatBar').value = full;
  });
};

const badChoice = () => {
  document.getElementById('badFood').addEventListener('click', () => {
    full -= 3;
    document.getElementById('eatBar').value = full;
  });
};

const subtractFromEatBar = () => {
  document.getElementById('eatBar').value = full;
  full -= 1;
  const eatSubtractByTime = () => {
    setInterval(subtractFromEatBar, 20000);
  };
  eatSubtractByTime();
};

export default {
  printEat,
  goodChoice,
  subtractFromEatBar,
  badChoice,
};
