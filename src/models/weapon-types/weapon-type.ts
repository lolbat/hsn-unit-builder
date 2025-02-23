import { WeaponName, WeaponCategory, WeaponWeightClass } from "../constants";

export default interface WeaponType {
  readonly name: WeaponName;
  readonly weight: WeaponWeightClass;
  readonly category: WeaponCategory;
  readonly rating: number;
  readonly special: string[];
  readonly cost: number;
}