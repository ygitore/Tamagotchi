import util from '../../helpers/utilities';
import './sleep.scss';

const sleepPrint = () => {
  let domString = '';
  domString += `<div class="sleep">Sleep</div>
                <div class="sleepContainer">
                  <div  class="btn-nap btn-nap-slumber">
                    <button class="nap">Nap</button>
                  </div>
                  <div class="btn-slumber">
                    <button>Slumber</button>
                  </div>
                  <div class="sleep-progress-bar-container">
                    <div>
                      <div id="sleep-progress-increase"></div>
                    </div>
                  </div>
                </div>`;
  util.printToDom('sleep', domString);
};

export default { sleepPrint };
