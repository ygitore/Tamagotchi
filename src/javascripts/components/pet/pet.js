import util from '../../helpers/utilities';

import './pet.scss';

const overallHealth = [];
let averagePetHealthstatus = 0;

const petOverallHealth = (quad, arrVal) => {
  overallHealth[quad] = arrVal;
  averagePetHealthstatus = overallHealth.reduce((x, y) => x + y, 0) / 4;
  let domString = '<div>';
  domString += '<div class="overall-health">Overall Health</div>';
  domString += `<div id="average-pet-health">${averagePetHealthstatus}%</div>`;
  domString += `<progress class="health-progress" max="100" value =${averagePetHealthstatus}></progress>`;
  domString += '</div>';
  util.printToDom('progress', domString);
};
const petHealthStatus = () => {
  if (averagePetHealthstatus === 12.5) {
    const deadPet = '<img class = "dead-pet-img" src="../../../../../assets/dead-pet.jpeg">';
    util.printToDom('dead-pet', deadPet);
  }
};
const petDomString = () => {
  const domString = `<div id="dead-pet">
      <img src="../../../assets/pet.gif">
      </div>`;
  util.printToDom('pet', domString);
};
export default { petDomString, petHealthStatus, petOverallHealth };
