import { Mount } from "../models/mount";
import { FilledMount, FilledMountListItem } from "./FilledMountListItem";

interface WeaponListProps {
    mounts: Mount[],
    handleWeaponChange: React.ChangeEventHandler<HTMLSelectElement>
}

export function WeaponList({mounts, handleWeaponChange}: WeaponListProps) {
    let weaponList = mounts.map((mount) => {
        if (mount.weapon !== null) {
        let filledMount = mount as FilledMount;
        return <FilledMountListItem filledMount={filledMount} handleWeaponChange={handleWeaponChange} key={mount.key} />
        }

        let compatibleWeapons = mount.compatibleWeaponTypes().map((w) =>
        <option value={w.name} key={w.name} >{`${w.name} (${w.cost})`}</option>
        );

        return (
        <li className="weapon" key={mount.key}>
            <div className="weapon-selector">
            <select name={mount.key} onChange={handleWeaponChange}>
                <option value="">Choose a weapon...</option>
                {compatibleWeapons}
            </select>
            </div>
            <div className="mount value">{mount.type.mountType}</div>
            <div className="special value"> </div>
        </li>
        );
    });

    return (
        <div className="weapons">
        <div className="weapon title">Weapons</div>
        <div className="rating title">Rating</div>
        <div className="mount title">Mount</div>
        <div className="special title">Special</div>
        <ul className="weapons-list">
            {weaponList}
        </ul>
        </div>
    )
}