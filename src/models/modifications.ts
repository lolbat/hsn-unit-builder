import { ModificationType, MountLocation, VehicleSize } from "./constants";
import Unit from "./unit";

export default interface Modification {
  readonly type: ModificationType;
  readonly name: string;
  readonly cost: number;
  readonly compatibleVehicleSizes: VehicleSize[];
  isValidForUnit(unit: Unit): boolean;
  applyToUnit(unit: Unit): Unit;
}

export function doesNotHaveModification(
  unit: Unit,
  modification: Modification,
) {
  return unit.modifications.every((m) => m.name !== modification.name);
}

export function isOneOfSizes(unit: Unit, sizes: VehicleSize[]) {
  return sizes.includes(unit.vehicleClass.size);
}

export function isFlyer(unit: Unit) {
  return unit.special.some((s) => s.includes("Flyer"));
}

export function isNotFlyer(unit: Unit) {
  return unit.special.every((s) => !s.includes("Flyer"));
}

export function isNotFastMover(unit: Unit) {
  return unit.special.every((s) => !s.includes("Fast Mover"));
}

export function isWalker(unit: Unit) {
  return unit.special.some((s) => s.includes("Walker"));
}

export function isNotWalker(unit: Unit) {
  return unit.special.every((s) => !s.includes("Flyer"));
}

export function hasMount(unit: Unit, mount: MountLocation) {
  return unit.mounts.some((m) => mount === m.type.mountType);
}

export function hasAtLeastOneOfMounts(unit: Unit, mounts: MountLocation[]) {
  return unit.mounts.some((m) => mounts.includes(m.type.mountType));
}
