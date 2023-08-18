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
    smug: 'Strength'
  },
  {
    code: 1,
    icon: life,
    smug: 'Life'
  },
  {
    code: 2,
    icon: ray,
    smug: 'Agility'
  },
  {
    code: 3,
    icon: magic,
    smug: 'Magic'
  },
  {
    code: 4,
    icon: shield,
    smug: 'Defense'
  },
  {
    code: 5,
    icon: mana,
    smug: 'Mana'
  }
]

export default function getStatusInfo(icon: number) {
  return icons.find((currentIcon) => currentIcon.code == icon);
}