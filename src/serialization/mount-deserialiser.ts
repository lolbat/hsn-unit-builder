import { EmptyMount, FilledMount, MountShape } from "../models/mount";

export default function deserialiseMount(mountShape: MountShape) {
  if (Object.prototype.hasOwnProperty.call(mountShape, "maximumWeaponWeight")) {
    return mountShape;
  }

  if (mountShape.weapon === null) {
    return new EmptyMount(mountShape.type, mountShape.index);
  }
  return new FilledMount(mountShape.type, mountShape.index, mountShape.weapon);
}
