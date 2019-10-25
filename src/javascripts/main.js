import eat from './components/eat/eat';
import play from './components/play/play';
import fight from './components/fight/fight';
import sleep from './components/sleep/sleep';
import progressbar from './components/progressbar/progressbar';
import '../styles/main.scss';

const init = () => {
  eat.printEat();
  fight.printFight();
  play.printPlay();
  sleep.sleepPrint();
  progressbar.progressbarPrint();
  eat.eatAttachments();
  fight.fightAttachments();
  play.playAttachments();
};
init();
