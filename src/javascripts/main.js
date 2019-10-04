import '../styles/main.scss';
import eat from './components/eat';
import play from './components/play';
import fight from './components/fight';
import sleep from './components/sleep';

const init = () => {
  eat.printEat();
  play.printPlay();
  fight.printFight();
  sleep.printSleep();
  eat.subtractFromEatBar();
  eat.badChoice();
  eat.goodChoice();
  play.subtractFromPlayBar();
  play.superFunChoice();
  play.slightlyFunChoice();
  fight.subtractFromFightBar();
  fight.braveChoice();
  fight.violentChoice();
  sleep.subtractFromSleepBar();
  sleep.slumberChoice();
  sleep.napChoice();
};

init();
