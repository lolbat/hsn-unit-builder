import { EmptyMount, Mount } from "../models/mount";
import { toWeaponName, WeaponName } from "../models/constants";
import Weapon from "../models/weapon";
import WeaponTypes from "../models/weapon-types/weapon-types";
import React from "react";

interface EmptyMountListItemProps {
  mount: EmptyMount;
  handleMountChange: (mount: Mount) => void;
}

type WeaponSelection = WeaponName | "None";

export function EmptyMountListItem({
  mount,
  handleMountChange,
}: EmptyMountListItemProps) {
  function handleWeaponChange(e: React.ChangeEvent<HTMLSelectElement>) {
    let weaponType: WeaponSelection;
    if (e.target.value === "None") {
      weaponType = "None";
    } else {
      weaponType = toWeaponName(e.target.value);
    }

    if (weaponType !== "None") {
      const weaponToEquip = WeaponTypes.find((w) => weaponType === w.name);
      if (!weaponToEquip) {
        throw Error("Unknow weapon type: " + weaponType);
      }

      handleMountChange(
        mount.setWeapon(new Weapon(weaponToEquip, mount.type.mountType)),
      );
    }
  }

  const compatibleWeapons = mount
    .compatibleWeaponTypes()
    .map((w) => (
      <option value={w.name} key={w.name}>{`${w.name} (${w.cost})`}</option>
    ));

  return (
      <React.Fragment>
        <div className="value">{mount.type.mountType}</div>
        <div className="weapon-selector value">
          <select name={mount.key} onChange={handleWeaponChange}>
            <option value="">Choose a weapon...</option>
            {compatibleWeapons}
          </select>
        </div>
        <div className="value"></div>
        <div className="value left"></div>
      </React.Fragment>
  );
}
