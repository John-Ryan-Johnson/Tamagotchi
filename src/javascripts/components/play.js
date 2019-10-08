import utilities from '../helpers/utilities';
import './play.scss';

let fun = 50;

const printPlay = () => {
  let domString = '';
  domString += `
  <div class="playContainer">
  <h3 class="playTitle">Play</h3>
  <progress id="playBar" max="100" value="${fun}"></progress>
  <button id="goodPlay">Awesome</button>
  <button id="badPlay">Fun</button>
  </div>
  `;
  utilities.printToDom('play', domString);
};

const superFunChoice = () => {
  document.getElementById('goodPlay').addEventListener('click', () => {
    const add = fun + 50;
    if (add > 100) {
      fun = 100;
    } else {
      fun = add;
    }
    document.getElementById('playBar').value = fun;
  });
};

const slightlyFunChoice = () => {
  document.getElementById('badPlay').addEventListener('click', () => {
    fun += 2;
    document.getElementById('playBar').value = fun;
  });
};

const subtractFromPlayBar = () => {
  document.getElementById('playBar').value = fun;
  fun -= 10;
  const playSubtractByTime = () => {
    setInterval(subtractFromPlayBar, 20000);
  };
  playSubtractByTime();
};

export default {
  printPlay,
  subtractFromPlayBar,
  superFunChoice,
  slightlyFunChoice,
};
