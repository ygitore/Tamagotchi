import eat from './components/eat/eat';
import play from './components/play/play';
import fight from './components/fight/fight';
import sleep from './components/sleep/sleep';
import pet from './components/pet/pet';
import '../styles/main.scss';

const init = () => {
  eat.printEat();
  fight.printFight();
  play.printPlay();
  sleep.sleepPrint();
  eat.eatAttachments();
  fight.fightAttachments();
  play.playAttachments();
  sleep.sleepAttachements();
  pet.petDomString();
};
init();
