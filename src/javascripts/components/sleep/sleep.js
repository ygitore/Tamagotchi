import util from '../../helpers/utilities';
import pet from '../pet/pet';

import './sleep.scss';

let energy = 50;
const sleepPrint = () => {
  let domString = '';
  domString += `<div class="sleep">Sleep</div>
                <div class="sleepContainer">
                  <div  class="btn-nap btn-nap-slumber">
                    <button id = "btn-nap" class="nap">Nap</button>
                  </div>
                  <div id = "btn-slumber" class="btn-slumber">
                    <button>Slumber</button>
                  </div>
                  <div class="sleep-progress-bar-container">
                    <div>
                      <div id="sleep-progress-increase"></div>
                    </div>
                  </div>
                </div>`;
  util.printToDom('sleep', domString);
  pet.petOverallHealth(3, energy);
  pet.petHealthStatus();
};
const takeNap = () => {
  const progBar = document.getElementById('sleep-progress-increase');
  progBar.style.borderBottomRightRadius = '15px';
  progBar.style.borderTopRightRadius = '15px';
  progBar.textContent = `${energy}%`;
  if (energy >= 100) {
    energy = 100;
  } else {
    energy += 50;
    if (energy >= 100) {
      energy = 100;
    } else {
      progBar.style.borderBottomRightRadius = '0px';
      progBar.style.borderTopRightRadius = '0px';
    }
  }
  progBar.textContent = `${energy}%`;
  progBar.style.width = `${energy}%`;
  pet.petOverallHealth(3, energy);
  pet.petHealthStatus();
};
const deepSlumber = () => {
  const progBar = document.getElementById('sleep-progress-increase');
  progBar.style.borderBottomRightRadius = '15px';
  progBar.style.borderTopRightRadius = '15px';
  progBar.textContent = `${energy}%`;
  if (energy >= 100) {
    energy = 100;
  } else {
    energy += 60;
    if (energy >= 100) {
      energy = 100;
    } else {
      progBar.style.borderBottomRightRadius = '0px';
      progBar.style.borderTopRightRadius = '0px';
    }
  }
  progBar.textContent = `${energy}%`;
  progBar.style.width = `${energy}%`;
  pet.petOverallHealth(3, energy);
  pet.petHealthStatus();
};
const sleepAttachements = () => {
  document.getElementById('btn-nap').addEventListener('click', takeNap);
  document.getElementById('btn-slumber').addEventListener('click', deepSlumber);
};
const getEnergy = () => energy;
export default { sleepPrint, sleepAttachements, getEnergy };
