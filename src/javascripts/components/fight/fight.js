import util from '../../helpers/utilities';
import './fight.scss';

const printFight = () => {
  let domString = '';
  domString += `<div class="fight">Fight</div>
                <div class="fightContainer">
                  <div class="btn-container">
                    <div>
                      <button class='btn-braverly'>Bravely</button>
                    </div>
                    <div>
                      <button class="violence">Violence</button>
                    </div>
                  </div>
                  <div class="fight-progress-container">
                    <div class="fight-progress-bar-container">
                      <div id="fight-progress-increase"></div>
                    </div>
                  </div>
                 </div>`;
  util.printToDom('fight', domString);
};

export default { printFight };
