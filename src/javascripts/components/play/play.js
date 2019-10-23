import util from '../../helpers/utilities';
import './play.scss';

const printPlay = () => {
  let domString = '';
  domString += `<div class="play">Play</div>
                <div class="playContainer">
                  <div class='btn-fun'>
                    <button>Super Fun</button>
                  </div>
                  <div>
                    <button>Slightly Fun</button>
                  </div>
                  <div class="play-progress-bar-container">
                    <div>
                      <div id="play-progress-increase"></div>
                    </div>
                  </div>
                </div>`;
  util.printToDom('play', domString);
};


export default { printPlay };
