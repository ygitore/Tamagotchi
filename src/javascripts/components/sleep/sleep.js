import util from '../../helpers/utilities';
import './sleep.scss';

const sleepPrint = () => {
  let domString = '';
  domString += `<div class="sleepContainer">
                  <div  class="btn-nap btn-nap-slumber">
                    <button>nap</button>
                  </div>
                  <div class="btn-slumber">
                    <button>slumber</button>
                  </div>
                </div>`;
  util.printToDom('sleep', domString);
};

export default { sleepPrint };
