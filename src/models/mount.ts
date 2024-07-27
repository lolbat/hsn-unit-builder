import { WeaponType, WeaponTypes } from "./weapon-class";
import { compatibleWeaponClasses, MountType } from "./mount-type";

export class Mount {
    readonly type: MountType;
    readonly index: number;

    constructor(type: MountType, index: number) {
        this.type = type;
        this.index = index;
    }

    compatibleWeaponTypes() {
        return compatibleWeaponTypes(this.type);
    }
}