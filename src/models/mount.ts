import { compatibleWeaponTypes, MountType } from "./mount-type";
import Weapon from "./weapon";

export class Mount {
    readonly type: MountType;
    readonly index: number;
    private _weapon: Weapon | null;

    constructor(type: MountType, index: number) {
        this.type = type;
        this.index = index;
        this._weapon = null;
    }

    get weapon() {
        return this._weapon || null;
    }

    get key() {
        return `${this.type.size}-${this.type.mountType}-${this.index}`;
    }

    setWeapon(weapon: Weapon) {
        if (!compatibleWeaponTypes(this.type).includes(weapon.type)) {
            throw new Error(`Incompatible weapon type: ${weapon.type.name}`);
        }
        this._weapon = weapon;
    }

    removeWeapon() {
        this._weapon = null;
    }

    compatibleWeaponTypes() {
        return compatibleWeaponTypes(this.type);
    }
}