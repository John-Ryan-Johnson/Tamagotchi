import utilities from '../helpers/utilities';
import './fight.scss';

let strength = 100;

const printFight = () => {
  let domString = '';
  domString += `
  <div class="fightContainer">
  <h3 class="fightTitle">Fight</h3>
  <progress id="fightBar" max="100" value="${strength}"></progress>
  <button id="afraidMood">Run Away</button>
  <button id="violentMood">Go Evil</button>
  </div>
  `;
  utilities.printToDom('fight', domString);
};

const braveChoice = () => {
  document.getElementById('afraidMood').addEventListener('click', () => {
    const add = strength + 1;
    if (add > 100) {
      strength = 100;
    } else {
      strength = add;
    }
    document.getElementById('fightBar').value = strength;
  });
};

const violentChoice = () => {
  document.getElementById('violentMood').addEventListener('click', () => {
    strength -= 10;
    document.getElementById('violentMood').value = strength;
  });
};

const subtractFromFightBar = () => {
  document.getElementById('fightBar').value = strength;
  strength -= 7;
  const fightSubtractByTime = () => {
    setInterval(subtractFromFightBar, 20000);
  };
  fightSubtractByTime();
};

export default {
  printFight,
  subtractFromFightBar,
  violentChoice,
  braveChoice,
};
