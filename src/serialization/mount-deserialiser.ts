import { Mount, MountShape } from "../models/mount";

export default function deserialiseMount(mountShape: MountShape) {
  if (Object.prototype.hasOwnProperty.call(mountShape, "maximumWeaponWeight")) {
    return mountShape;
  }

  return Mount.fromMountShape(mountShape);
}
