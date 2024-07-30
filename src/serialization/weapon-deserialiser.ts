import Weapon, { WeaponShape } from "../models/weapon";

export default function deserialiseWeapon(weaponShape: WeaponShape | null) {
  if (weaponShape === null) {
    return weaponShape;
  }
  const { mount, weaponType } = weaponShape;

  return new Weapon(weaponType, mount);
}
