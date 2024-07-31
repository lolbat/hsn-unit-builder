import Unit from "../models/unit";
import handleUnitDeserialisation from "../serialization/unit-deserialiser";

export function storeUnit(key: string, unit: Unit) {
  localStorage.setItem(key, JSON.stringify({ unit }));
}

export function loadUnit(key: string): Unit | null {
  const storedUnit = localStorage.getItem(key);
  if (storedUnit === null) {
    return null;
  }
  return JSON.parse(storedUnit, handleUnitDeserialisation).unit as Unit;
}
