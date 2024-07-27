import { useState } from 'react';
import { Mount } from '../models/mount';
import { MountType } from '../models/mount-type';
import Weapon from '../models/weapon';

interface FilledMountListItemProps {
    filledMount: FilledMount,
    handleWeaponChange: React.ChangeEventHandler<HTMLSelectElement>
}

export interface FilledMount {
    readonly type: MountType;
    readonly index: number;
    readonly weapon: Weapon;
    readonly key: string;
}

export function FilledMountListItem({filledMount, handleWeaponChange}: FilledMountListItemProps) {
    const [open, setOpen] = useState<boolean>(false);
  
    if (open) {
      let compatibleWeapons = (filledMount as Mount).compatibleWeaponTypes().map((w) =>
        <option value={w.name} key={w.name} >{`${w.name} (${w.cost})`}</option>
      );
  
      return (
        <li className="weapon" key={filledMount.key} onBlur={(e) => setOpen(false)}>
          <div className="weapon-selector">
            <select autoFocus name={filledMount.key} defaultValue={filledMount.weapon.name}  onChange={(e) => {handleWeaponChange(e); e.target.blur()}}>
              <option value="None" key="None">None</option>
              {compatibleWeapons}
            </select>
          </div>
          <div className="mount value">{filledMount.type.mountType}</div>
          <div className="special value"> </div>
        </li>
      );
    }
  
    return (
      <li className="weapon">
        <div className="weapon value" onClick={(e) => setOpen(true)}>{filledMount.weapon.name}</div>
        <div className="rating value">{filledMount.weapon.rating}</div>
        <div className="mount value">{filledMount.type.mountType}</div>
        <div className="special value">{filledMount.weapon.special}</div>
      </li>
    );
  }