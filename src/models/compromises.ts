import Modification, {
  hasAtLeastOneOfMounts,
  isNotFlyer,
  isOneOfSizes,
} from "./modifications";
import { ModificationType, VehicleSize, MountLocation } from "./constants";
import Unit from "./unit";

export const EnginePowerReduction: Modification = {
  type: ModificationType.Compromise,
  name: "Engine Power Reduction",
  cost: 2,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
    VehicleSize.Behemoth,
  ],
  isValidForUnit: function (unit: Unit) {
    return isOneOfSizes(unit, this.compatibleVehicleSizes) && isNotFlyer(unit);
  },
  applyToUnit: function (unit: Unit) {
    return unit;
  },
};

export const Flammable: Modification = {
  type: ModificationType.Compromise,
  name: "Flammable",
  cost: 2,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
    VehicleSize.Behemoth,
  ],
  isValidForUnit: function (unit: Unit) {
    return isOneOfSizes(unit, this.compatibleVehicleSizes);
  },
  applyToUnit: function (unit: Unit) {
    return unit;
  },
};

export const GreenCrew: Modification = {
  type: ModificationType.Compromise,
  name: "Green Crew",
  cost: 4,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
    VehicleSize.Behemoth,
  ],
  isValidForUnit: function (unit: Unit) {
    return isOneOfSizes(unit, this.compatibleVehicleSizes);
  },
  applyToUnit: function (unit: Unit) {
    return unit;
  },
};

export const LightFrontArmour: Modification = {
  type: ModificationType.Compromise,
  name: "Light Front Armour",
  cost: 3,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
    VehicleSize.Behemoth,
  ],
  isValidForUnit: function (unit: Unit) {
    return isOneOfSizes(unit, this.compatibleVehicleSizes);
  },
  applyToUnit: function (unit: Unit) {
    return unit;
  },
};

export const LightSecondaryArmour: Modification = {
  type: ModificationType.Compromise,
  name: "Light Secondary Armour",
  cost: 2,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
    VehicleSize.Behemoth,
  ],
  isValidForUnit: function (unit: Unit) {
    return isOneOfSizes(unit, this.compatibleVehicleSizes);
  },
  applyToUnit: function (unit: Unit) {
    return unit;
  },
};

export const LowMorale: Modification = {
  type: ModificationType.Compromise,
  name: "Low Morale",
  cost: 2,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
    VehicleSize.Behemoth,
  ],
  isValidForUnit: function (unit: Unit) {
    return isOneOfSizes(unit, this.compatibleVehicleSizes);
  },
  applyToUnit: function (unit: Unit) {
    return unit;
  },
};

export const MainGunRetrofit: Modification = {
  type: ModificationType.Compromise,
  name: "Main Gun Retrofit",
  cost: 1,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
    VehicleSize.Behemoth,
  ],
  isValidForUnit: function (unit: Unit) {
    return (
      isOneOfSizes(unit, this.compatibleVehicleSizes) &&
      hasAtLeastOneOfMounts(unit, [
        MountLocation.Arm,
        MountLocation.Fixed,
        MountLocation.Turret,
      ])
    );
  },
  applyToUnit: function (unit: Unit) {
    return unit;
  },
};

export const PoorOptics: Modification = {
  type: ModificationType.Compromise,
  name: "Poor Optics",
  cost: 1,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
    VehicleSize.Behemoth,
  ],
  isValidForUnit: function (unit: Unit) {
    return isOneOfSizes(unit, this.compatibleVehicleSizes);
  },
  applyToUnit: function (unit: Unit) {
    return unit;
  },
};

export const WeakHull: Modification = {
  type: ModificationType.Compromise,
  name: "Weak Hull",
  cost: 1,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
    VehicleSize.Behemoth,
  ],
  isValidForUnit: function (unit: Unit) {
    return isOneOfSizes(unit, this.compatibleVehicleSizes);
  },
  applyToUnit: function (unit: Unit) {
    return unit;
  },
};

export const Compromises: readonly Modification[] = [
  EnginePowerReduction,
  Flammable,
  GreenCrew,
  LightFrontArmour,
  LightSecondaryArmour,
  LowMorale,
  MainGunRetrofit,
  PoorOptics,
  WeakHull,
];

export const CompromisesByName = new Map(Compromises.map((c) => [c.name, c]));
