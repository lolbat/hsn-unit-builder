import Unit from "../models/unit";
import handleUnitDeserialisation from "../serialization/unit-deserialiser";

export function storeUnit(unit: Unit) {
  localStorage.setItem("unit-state", JSON.stringify({ unit }));
}

export function loadUnit(): Unit | null {
  const storedUnit = localStorage.getItem("unit-state");
  if (storedUnit === null) {
    return null;
  }
  return JSON.parse(storedUnit, handleUnitDeserialisation).unit as Unit;
}
