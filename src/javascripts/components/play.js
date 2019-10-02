import utilities from '../helpers/utilities';

const printPlay = () => {
  let domString = '';
  domString += `
  <div class="playContainer">
  <h3 class="playTitle">Play</h3>
  </div>
  `;
  utilities.printToDom('play', domString);
};

export default { printPlay };
