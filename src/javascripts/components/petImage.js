import utilities from '../helpers/utilities';
import './petImage.scss';

const printImage = () => {
  const domString = `
  <img src="https://media1.giphy.com/media/nTwMXUMuH9OPS/giphy.gif?cid=790b7611513813abf951a38899b2420df5c1d3fe9ff10756&rid=giphy.gif"/>
  `;
  utilities.printToDom('pet', domString);
};

export default { printImage };
