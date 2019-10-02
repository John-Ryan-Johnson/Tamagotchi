import utilities from '../helpers/utilities';

const printSleep = () => {
  let domString = '';
  domString += `
  <div class="sleepContainer">
  <h3 class="sleepTitle">Sleep</h3>
  </div>
  `;
  utilities.printToDom('sleep', domString);
};

export default { printSleep };
