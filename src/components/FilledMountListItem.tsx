import { useState } from "react";
import { Mount, FilledMount } from "../models/mount";
import Weapon from "../models/weapon";
import { toWeaponName, WeaponName } from "../models/constants";
import { WeaponTypes } from "../models/weapon-type";

interface FilledMountListItemProps {
  mount: FilledMount;
  handleMountChange: (mount: Mount) => void;
}

type WeaponSelection = WeaponName | "None";

export function FilledMountListItem({
  mount,
  handleMountChange,
}: FilledMountListItemProps) {
  const [open, setOpen] = useState<boolean>(false);

  function handleWeaponChange(e: React.ChangeEvent<HTMLSelectElement>) {
    let weaponType: WeaponSelection;
    if (e.target.value === "None") {
      weaponType = "None";
    } else {
      weaponType = toWeaponName(e.target.value);
    }

    if (weaponType === "None") {
      handleMountChange(mount.removeWeapon());
    } else {
      const weaponToEquip = WeaponTypes.find((w) => weaponType === w.name);
      if (!weaponToEquip) {
        throw Error("Unknow weapon type: " + weaponType);
      }

      mount.setWeapon(new Weapon(weaponToEquip, mount.type.mountType));

      handleMountChange(
        mount.setWeapon(new Weapon(weaponToEquip, mount.type.mountType)),
      );
    }
  }

  if (open) {
    const compatibleWeapons = (mount as Mount)
      .compatibleWeaponTypes()
      .map((w) => (
        <option value={w.name} key={w.name}>{`${w.name} (${w.cost})`}</option>
      ));

    return (
      <li className="weapon" key={mount.key} onBlur={() => setOpen(false)}>
        <div className="weapon-selector">
          <select
            autoFocus
            name={mount.key}
            defaultValue={mount.weapon.name}
            onChange={(e) => {
              handleWeaponChange(e);
              e.target.blur();
            }}
          >
            <option value="None" key="None">
              None
            </option>
            {compatibleWeapons}
          </select>
        </div>
        <div className="mount value">{mount.type.mountType}</div>
        <div className="special value"> </div>
      </li>
    );
  }

  return (
    <li className="weapon">
      <div className="weapon value" onClick={() => setOpen(true)}>
        {mount.weapon.name}
      </div>
      <div className="rating value">{mount.weapon.rating}</div>
      <div className="mount value">{mount.type.mountType}</div>
      <div className="special value">{mount.weapon.special}</div>
    </li>
  );
}
