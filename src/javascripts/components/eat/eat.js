import util from '../../helpers/utilities';
import './eat.scss';

const printEat = () => {
  let domString = '';
  domString += `<div>
                  <div class="eat-quadrant">Eat</div>
                  <div class = "eatContainer">
                    <div class="btn-healthy-food">
                      <button id = "btn-healthy-food">Healthy Food</button>
                    </div>
                    <div>
                      <button id = "btn-unhealthy-food">Unhealthy Food</button>
                    </div>
                    <div class="progressContainer">
                      <div>
                        <div id = "progressIncrease"></div>
                      </div>
                    </div>
                  </div>
                </div>`;
  util.printToDom('eat', domString);
};
export default { printEat };
