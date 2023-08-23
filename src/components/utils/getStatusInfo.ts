import ray from "@/assets/img/components/PlayerCard/icons/ray.png"
import sword from "@/assets/img/components/PlayerCard/icons/sword.png"
import shield from "@/assets/img/components/PlayerCard/icons/shield.png"
import magic from "@/assets/img/components/PlayerCard/icons/magic.png"
import life from "@/assets/img/components/PlayerCard/icons/HP.png";
import mana from "@/assets/img/components/PlayerCard/icons/Mana.png";

const icons = [
  {
    code: 0,
    icon: sword,
    smug: 'Strength',
    short: 'STG',
  },
  {
    code: 1,
    icon: life,
    smug: 'Life',
    short: 'LIFE',
  },
  {
    code: 2,
    icon: ray,
    smug: 'Agility',
    short: 'DEX',
  },
  {
    code: 3,
    icon: magic,
    smug: 'Magic',
    short: 'MAG',
  },
  {
    code: 4,
    icon: shield,
    smug: 'Defense',
    short: 'DEF',
  },
  {
    code: 5,
    icon: mana,
    smug: 'Mana',
    short: 'MANA'
  }
]

export default function getStatusInfo(icon: number) {
  return icons.find((currentIcon) => currentIcon.code == icon);
}