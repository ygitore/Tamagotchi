import util from '../helpers/utilities';

let statAverage = 0;
const overallHealth = [];

const petDomString = () => {
  let domString = '';
  domString += '<div id="kill-pet" class="pet-container">';
  domString += '<img src="../../../assets/pet.gif">';
  domString += '</div>';
  util.printToDom('pet', domString);
};

const healthStat = (stat, value) => {
  overallHealth[stat] = value;

  statAverage = 0;
  statAverage = overallHealth.reduce((a, b) => a + b, 0) / 4;

  let domString = '';
  domString += '<div class="health-bar">';
  domString += '<div>Health</div>';
  domString += `<div id="health-stat">${statAverage}</div>`;
  domString += `<progress id="health-bar" class="health-progress" max="100" value=${statAverage}></progress>`;
  domString += '</div>';

  util.printToDom('progress', domString);
};

const checkHealth = () => {
  if (statAverage === 25) {
    const petImage = '<img src="../../../assets/dead-pet.jpg">';
    util.printToDom('kill-pet', petImage);
  }
};

export default { petDomString, healthStat, checkHealth };
