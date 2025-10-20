import { useState } from "react";
import { Mount, FilledMount } from "../models/mount";
import Weapon from "../models/weapon";
import { toWeaponName, WeaponName } from "../models/constants";
import WeaponTypes from "../models/weapon-types/weapon-types";
import React from "react";

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
      <React.Fragment>
        
        <div className="value">{mount.type.mountType}</div>
        <div className="weapon-selector" key={mount.key} onBlur={() => setOpen(false)}>
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
        <div className="value"></div>
        <div className="value left"></div>
      
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <div className="value">{mount.type.mountType}</div>
      <div className="value" onClick={() => setOpen(true)}>
        {mount.weapon.name}
      </div>
      <div className="value">{mount.weapon.rating}</div>
      <div className="value left">{mount.weapon.special.join(", ")}</div>
    </React.Fragment>
  );
}
