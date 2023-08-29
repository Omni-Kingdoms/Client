import { CraftStruct } from '@/types/DIAMOND1HARDHAT';

export default function isCraft(object: any): object is CraftStruct {
  return 'cost' in object;
}