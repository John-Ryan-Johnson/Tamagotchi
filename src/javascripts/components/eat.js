import utilities from '../helpers/utilities';

const printEat = () => {
  let domString = '';
  domString += `
  <div class="eatContainer">
    <h3 class="eatTitle">Eat</h3>
  </div>
    `;
  utilities.printToDom('eat', domString);
};

export default { printEat };
