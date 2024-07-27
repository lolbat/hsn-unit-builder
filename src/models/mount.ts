import { WeaponClass, WeaponClasses } from "./weapon-class";
import { compatibleWeaponClasses, MountType } from "./mount-type";

export class Mount {
    readonly type: MountType;
    readonly index: number;

    constructor(type: MountType, index: number) {
        this.type = type;
        this.index = index;
    }

    compatibleWeaponClasses() {
        return compatibleWeaponClasses(this.type);
    }
}