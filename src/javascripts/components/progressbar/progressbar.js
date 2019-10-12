import util from '../../helpers/utilities';
import './progressbar.scss';

const progressbarPrint = () => {
  let domString = '';
  domString += `<div class="prgr-overall-health">
                  <h4>Over all health</h4>
                  <div class="progressPercentageContainer">
                  <div class="progressPercentage">
                  <div>
                </div>
                  </>
                </div>`;
  util.printToDom('progress', domString);
};

export default { progressbarPrint };
