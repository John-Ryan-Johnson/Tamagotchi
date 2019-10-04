import utilities from '../helpers/utilities';

let energy = 50;

const printSleep = () => {
  let domString = '';
  domString += `
  <div class="sleepContainer">
  <h3 class="sleepTitle">Sleep</h3>
  <progress id="sleepBar" max="100" value="${energy}"></progress>
  <button id="goodSleep">Sleep</button>
  <button id="badSleep">Nap</button>
  </div>
  `;
  utilities.printToDom('sleep', domString);
};

const slumberChoice = () => {
  document.getElementById('goodSleep').addEventListener('click', () => {
    const add = energy + 60;
    if (add > 100) {
      energy = 100;
    } else {
      energy = add;
    }
    document.getElementById('sleepBar').value = energy;
  });
};

const napChoice = () => {
  document.getElementById('badSleep').addEventListener('click', () => {
    energy += 50;
    document.getElementById('sleepBar').value = energy;
  });
};

const subtractFromSleepBar = () => {
  document.getElementById('sleepBar').value = energy;
  energy -= 1;
  const sleepSubtractByTime = () => {
    setInterval(subtractFromSleepBar, 3000);
  };
  sleepSubtractByTime();
};

export default {
  printSleep,
  subtractFromSleepBar,
  napChoice,
  slumberChoice,
};
