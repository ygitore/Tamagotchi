import util from '../../helpers/utilities';
import './play.scss';

const printPlay = () => {
  let domString = '';
  domString += `<div class="playContainer">
                  <div class='btn-fun'>
                  <button>super fun</button>
                  </div>
                  <div>
                  <button>slightly fun</button>
                  </div>
                </div>`;
  util.printToDom('play', domString);
};


export default { printPlay };
