import { MountLocation } from "./constants";
import { WeaponClass } from "./weapon-class";

class Weapon {
    private readonly weaponClass: WeaponClass;
    readonly mount: MountLocation;

    constructor(weaponClass: WeaponClass, mountType: MountLocation) {
        this.weaponClass = weaponClass;
        this.mount = mountType;
    }

    get name() {
        return this.weaponClass.name;
    }

    get rating() {
        return this.weaponClass.rating;
    }

    get special() {
        return this.weaponClass.special;
    }

    get cost() {
        return this.weaponClass.cost;
    }
}

export default Weapon;