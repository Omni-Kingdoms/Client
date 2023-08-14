import ray from "@/assets/img/components/PlayerCard/icons/ray.png"
import sword from "@/assets/img/components/PlayerCard/icons/sword.png"
import shield from "@/assets/img/components/PlayerCard/icons/shield.png"
import magic from "@/assets/img/components/PlayerCard/icons/magic.png"
import life from "@/assets/img/components/PlayerCard/icons/HP.png";
import mana from "@/assets/img/components/PlayerCard/icons/Mana.png";

const icons = [
  {
    code: 0,
    icon: sword
  },
  {
    code: 1,
    icon: life,
  },
  {
    code: 2,
    icon: ray
  },
  {
    code: 3,
    icon: magic
  },
  {
    code: 4,
    icon: shield,
  },
  {
    code: 5,
    icon: mana
  }
]

export default function getStatusIcon(icon: number) {
  return icons.find((currentIcon) => currentIcon.code == icon)?.icon?.src;
}