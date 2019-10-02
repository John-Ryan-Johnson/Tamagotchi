import utilities from '../helpers/utilities';

const printFight = () => {
  let domString = '';
  domString += `
  <div class="fightContainer">
  <h3 class="fightTitle">Fight</h3>
  </div>
  `;
  utilities.printToDom('fight', domString);
};

export default { printFight };
