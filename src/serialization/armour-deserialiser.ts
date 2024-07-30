import Armour, { ArmourShape } from "../models/armour";

export default function deserialiseArmour({ front, sides, rear }: ArmourShape) {
  return new Armour(front, sides, rear);
}
