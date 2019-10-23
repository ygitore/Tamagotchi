import util from '../../helpers/utilities';
import './progressbar.scss';

const progressbarPrint = () => {
  let domString = '';
  domString += `<div class="prgr-overall-health">
                  <div class ="over-all-health">Over All Health</div>
                  <div class="progressPercentageContainer">
                    <div class="progressbar-container">
                      <div id="progressPercentage"></div>
                    </div>
                  </div>
                </div>`;
  util.printToDom('progress', domString);
};

export default { progressbarPrint };
