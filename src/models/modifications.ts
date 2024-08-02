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

export function isOneOfSizes(unit: Unit, sizes: VehicleSize[]) {
  return sizes.includes(unit.vehicleClass.size);
}

export function isFlyer(unit: Unit) {
  return unit.special.find((s) => s.includes("Flyer")) !== undefined;
}

export function isNotFlyer(unit: Unit) {
  return unit.special.find((s) => s.includes("Flyer")) === undefined;
}

export function isNotFastMover(unit: Unit) {
  return unit.special.find((s) => s.includes("Fast Mover")) === undefined;
}

export function isWalker(unit: Unit) {
  return unit.special.find((s) => s.includes("Walker")) !== undefined;
}

export function isNotWalker(unit: Unit) {
  return unit.special.find((s) => s.includes("Flyer")) === undefined;
}

export function hasMount(unit: Unit, mount: MountLocation) {
  return unit.mounts.find((m) => mount === m.type.mountType) !== undefined;
}

export function hasAtLeastOneOfMounts(unit: Unit, mounts: MountLocation[]) {
  return (
    unit.mounts.find((m) => mounts.includes(m.type.mountType)) !== undefined
  );
}
