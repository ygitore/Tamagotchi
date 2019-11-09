import util from '../../helpers/utilities';
import pet from '../pet/pet';

import './fight.scss';

let strength = 100;
const printFight = () => {
  let domString = '';
  domString += `<div class="fight">Fight</div>
                <div class="fightContainer">
                  <div class="btn-container">
                    <div>
                      <button id = "btn-braverly" class='btn-braverly'>Bravely</button>
                    </div>
                    <div>
                      <button id = "violence" class="violence">Violence</button>
                    </div>
                  </div>
                  <div class="fight-progress-container">
                    <div class="fight-progress-bar-container">
                      <div id="fight-progress-increase"></div>
                    </div>
                  </div>
                 </div>`;
  util.printToDom('fight', domString);
  pet.petOverallHealth(2, strength);
  pet.petHealthStatus();
};
const committingViolence = () => {
  const progBar = document.getElementById('fight-progress-increase');
  if (strength <= 0) {
    strength = 0;
  } else {
    strength -= 10;
    progBar.style.borderBottomRightRadius = '0px';
    progBar.style.borderTopRightRadius = '0px';
  }
  progBar.textContent = `${strength}%`;
  progBar.style.width = `${strength}%`;
  pet.petOverallHealth(2, strength);
  pet.petHealthStatus();
};
const runningAway = () => {
  const progBar = document.getElementById('fight-progress-increase');
  progBar.style.borderBottomRightRadius = '15px';
  progBar.style.borderTopRightRadius = '15px';
  progBar.textContent = `${strength}%`;
  if (strength >= 100) {
    strength = 100;
  } else {
    strength += 1;
    if (strength >= 100) {
      strength = 100;
    } else {
      progBar.style.borderBottomRightRadius = '0px';
      progBar.style.borderTopRightRadius = '0px';
    }
  }
  progBar.textContent = `${strength}%`;
  progBar.style.width = `${strength}%`;
  pet.petOverallHealth(2, strength);
  pet.petHealthStatus();
};
const fightAttachments = () => {
  document.getElementById('btn-braverly').addEventListener('click', runningAway);
  document.getElementById('violence').addEventListener('click', committingViolence);
};
export default { printFight, fightAttachments };
