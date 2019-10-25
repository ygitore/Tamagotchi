import util from '../../helpers/utilities';
import './eat.scss';

let full = 100;
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
const eatHealthyfood = () => {
  const progBar = document.getElementById('progressIncrease');
  progBar.style.borderBottomRightRadius = '15px';
  progBar.style.borderTopRightRadius = '15px';
  if (full >= 100) {
    full = 100;
  } else {
    full += 10;
    if (full > 100) {
      full = 100;
    } else {
      progBar.style.borderBottomRightRadius = '0px';
      progBar.style.borderTopRightRadius = '0px';
    }
  }
  progBar.textContent = `${full}%`;
  progBar.style.width = `${full}%`;
};
const eatUnhealthyfood = () => {
  const progBar = document.getElementById('progressIncrease');
  if (full <= 0) {
    full = 0;
  } else {
    full -= 3;
    progBar.style.borderBottomRightRadius = '0px';
    progBar.style.borderTopRightRadius = '0px';
  }
  progBar.textContent = `${full}%`;
  progBar.style.width = `${full}%`;
};
const eatAttachments = () => {
  document.getElementById('btn-healthy-food').addEventListener('click', eatHealthyfood);
  document.getElementById('btn-unhealthy-food').addEventListener('click', eatUnhealthyfood);
};
export default { printEat, eatAttachments };
