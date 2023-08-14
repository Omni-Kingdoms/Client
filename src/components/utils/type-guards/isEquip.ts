import { BasicEquipmentStruct } from '@/types/DIAMOND1HARDHAT';

export default function isEquip(object: any): object is BasicEquipmentStruct {
  return 'slot' in object;
}