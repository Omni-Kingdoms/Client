import maleAssassin from '@/assets/img/personas/equip/assassin.png';
import maleWarrior from '@/assets/img/personas/equip/warrior.png';
import maleMage from '@/assets/img/personas/equip/mage.png';
import femaleAssassin from '@/assets/img/personas/equip/assassin2.png';
import femaleWarrior from '@/assets/img/personas/equip/warrior2.png';
import femaleMage from '@/assets/img/personas/equip/mage2.png';

const options = [
  {
    class: 0,
    male: true,
    background: 'bg-male-warrior'
  }, {
    class: 0,
    male: false,
    background: 'bg-female-warrior'
  },
  {
    class: 1,
    male: true,
    background: 'bg-male-assassin'
  }, {
    class: 1,
    male: false,
    background: 'bg-female-assassin'
  },
  {
    class: 2,
    male: true,
    background: 'bg-male-mage'
  }, {
    class: 2,
    male: false,
    background: 'bg-female-mage'
  }
]

export default function getClassBackground(playerClass: number, male: boolean) {
  return options.find((option) => option.class === playerClass && option.male === male)?.background;
}