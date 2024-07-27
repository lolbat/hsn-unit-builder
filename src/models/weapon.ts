import { MountLocation } from "./constants";
import { WeaponType } from "./weapon-class";

class Weapon {
    private readonly weaponType: WeaponType;
    readonly mount: MountLocation;

    constructor(weaponType: WeaponType, mountType: MountLocation) {
        this.weaponType = weaponType;
        this.mount = mountType;
    }

    get name() {
        return this.weaponType.name;
    }

    get rating() {
        return this.weaponType.rating;
    }

    get special() {
        return this.weaponType.special;
    }

    get cost() {
        return this.weaponType.cost;
    }

    get type() {
        return this.weaponType;
    }
}

export default Weapon;