import { AdvancedCraftStruct } from '@/types/DIAMOND1HARDHAT';

export default function isAdvancedCraft(object: any): object is AdvancedCraftStruct {
  return 'treasure' in object;
}