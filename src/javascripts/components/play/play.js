import util from '../../helpers/utilities';
import pet from '../pet/pet';
import './play.scss';

let fun = 50;
const printPlay = () => {
  let domString = '';
  domString += `<div class="play">Play</div>
                <div class="playContainer">
                  <div class='btn-fun'>
                    <button id="super-fun">Super Fun</button>
                  </div>
                  <div>
                    <button id="slightly-fun">Slightly Fun</button>
                  </div>
                  <div class="play-progress-bar-container">
                    <div>
                      <div id="play-progress-increase"></div>
                    </div>
                  </div>
                </div>`;
  util.printToDom('play', domString);
  pet.petOverallHealth(1, fun);
  pet.petHealthStatus();
};
const superFun = () => {
  const progBar = document.getElementById('play-progress-increase');
  progBar.style.borderBottomRightRadius = '15px';
  progBar.style.borderTopRightRadius = '15px';
  progBar.textContent = `${fun}%`;
  if (fun >= 100) {
    fun = 100;
  } else {
    fun += 50;
    if (fun >= 100) {
      fun = 100;
    } else {
      progBar.style.borderBottomRightRadius = '0px';
      progBar.style.borderTopRightRadius = '0px';
    }
  }
  progBar.textContent = `${fun}%`;
  progBar.style.width = `${fun}%`;
  pet.petOverallHealth(1, fun);
  pet.petHealthStatus();
};
const slightlyFun = () => {
  const progBar = document.getElementById('play-progress-increase');
  if (fun <= 0) {
    fun = 0;
  } else {
    fun -= 2;
    progBar.style.borderBottomRightRadius = '0px';
    progBar.style.borderTopRightRadius = '0px';
  }
  progBar.textContent = `${fun}%`;
  progBar.style.width = `${fun}%`;
  pet.petOverallHealth(1, fun);
  pet.petHealthStatus();
};
const playAttachments = () => {
  document.getElementById('super-fun').addEventListener('click', superFun);
  document.getElementById('slightly-fun').addEventListener('click', slightlyFun);
};
export default { printPlay, playAttachments };
