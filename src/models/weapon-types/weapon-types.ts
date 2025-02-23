import { BombWeaponTypes } from "./bomb-weapon-types";
import { CloseCombatWeaponTypes } from "./close-combat-weapon-types";
import { HeavyWeaponTypes } from "./heavy-weapon-types";
import { LightWeaponTypes } from "./light-weapon-types";
import { SuperheavyWeaponTypes } from "./superheavy-weapon-types";
import WeaponType from "./weapon-type";

const WeaponTypes: ReadonlyArray<WeaponType> = [
    ...LightWeaponTypes,
    ...HeavyWeaponTypes,
    ...SuperheavyWeaponTypes,
    ...BombWeaponTypes,
    ...CloseCombatWeaponTypes,
];

export default WeaponTypes;