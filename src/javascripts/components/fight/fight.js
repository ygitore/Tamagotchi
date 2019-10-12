import util from '../../helpers/utilities';
import './fight.scss';

const printFight = () => {
  let domString = '';
  domString += `<div class="fightContainer">
                  <div class='btn-braverly'>
                    <button>bravely</button>
                  </div>
                  <div>
                    <button>violence</button>
                  </div>
                 </div>`;
  util.printToDom('fight', domString);
};

export default { printFight };
