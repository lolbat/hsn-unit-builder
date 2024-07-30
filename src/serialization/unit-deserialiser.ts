import { ArmourShape } from "../models/armour";
import { MountShape } from "../models/mount";
import Unit, { UnitShape } from "../models/unit";
import { WeaponShape } from "../models/weapon";
import deserialiseArmour from "./armour-deserialiser";
import deserialiseMount from "./mount-deserialiser";
import deserialiseWeapon from "./weapon-deserialiser";

function deserialiseUnit(unit: UnitShape) {
  return Unit.fromObject(unit);
}

export default function handleUnitDeserialisation(key: string, value: object) {
  switch (key) {
    case "unit": {
      return deserialiseUnit(value as UnitShape);
    }
    case "weapon": {
      return deserialiseWeapon(value as WeaponShape);
    }
    case "armour": {
      return deserialiseArmour(value as ArmourShape);
    }
    case "mounts": {
      return (value as MountShape[]).map((m: MountShape) =>
        deserialiseMount(m),
      );
    }
    default: {
      return value;
    }
  }
}
