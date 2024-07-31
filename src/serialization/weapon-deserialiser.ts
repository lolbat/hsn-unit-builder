import Weapon, { WeaponShape } from "../models/weapon";

export default function deserialiseWeapon(weaponShape: WeaponShape | null) {
  if (weaponShape === null) {
    return weaponShape;
  }

  return Weapon.fromWeaponShape(weaponShape);
}
