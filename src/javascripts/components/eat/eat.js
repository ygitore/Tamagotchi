import util from '../../helpers/utilities';
import './eat.scss';

const printEat = () => {
  let domString = '';
  domString += `<div class="eatContainer">
                  <div class="btn-healthy-food">
                    <button id = "btn-healthy-food">healthy food</button>
                  </div>
                  <div>
                    <button id = "btn-unhealthy-food">unhealthy food</button>
                  </div>
                  <div class="progressContainer">
                    <div id = "progressIncrease" class="progressIncrease"></div>
                  </div>
                </div>`;
  util.printToDom('eat', domString);
};
export default { printEat };
