import Unit from "../models/unit";
import { WeaponList } from "./WeaponList";
import { Mount } from "../models/mount";
import { UnitName } from "./UnitName";
import { useContext, useState } from "react";
import DispatchContext from "../contexts/dispatch-context";
import {
  HeavyUpgrades,
  LightHeavySuperheavyUpgrades,
  LightHeavySuperheavyUpgradesByName,
  LightUpgrades,
  SuperheavyUpgrades,
} from "../models/upgrades";
import { VehicleSize } from "../models/constants";
import Modification, { isModValidForUnit } from "../models/modifications";
import { Compromises, CompromisesByName } from "../models/compromises";

interface UnitCardProps {
  unit: Unit;
  handleUnitChange: (unit: Unit) => void;
}

const ModificationsByName = new Map([
  ...LightHeavySuperheavyUpgradesByName,
  ...CompromisesByName,
]);

export default function UnitCard({ unit, handleUnitChange }: UnitCardProps) {
  const [mod, setMod] = useState("");
  const dispatch = useContext(DispatchContext);

  const handleMountsChange = function (mounts: Mount[]) {
    const updatedUnit = Unit.fromUnit(unit);
    updatedUnit.mounts = mounts;
    handleUnitChange(updatedUnit);
  };

  const handleNameChange = function (name: string) {
    const updatedUnit = Unit.fromUnit(unit);
    if (name) {
      updatedUnit.name = name;
    } else {
      updatedUnit.name = updatedUnit.vehicleClass.name;
    }
    handleUnitChange(updatedUnit);
  };

  const handleSave = function () {
    dispatch({
      type: "save-unit",
    });
  };

  const handleLoad = function () {
    dispatch({
      type: "load-unit",
    });
  };

  const handleReset = function () {
    dispatch({
      type: "reset-unit",
    });
  };

  const handleApplyModification = function () {
    const selectedMod = ModificationsByName.get(mod);
    if (selectedMod) {
      const updatedUnit = Unit.fromUnit(unit);
      updatedUnit.modifications.push(selectedMod);
      handleUnitChange(updatedUnit);
    }
  };

  let upgradeList: readonly Modification[];
  switch (unit.vehicleClass.size) {
    case VehicleSize.Light: {
      upgradeList = LightUpgrades;
      break;
    }
    case VehicleSize.Heavy: {
      upgradeList = HeavyUpgrades;
      break;
    }
    case VehicleSize.Superheavy: {
      upgradeList = SuperheavyUpgrades;
      break;
    }
    default: {
      upgradeList = LightHeavySuperheavyUpgrades;
    }
  }

  const validUpgrades = upgradeList.filter((u) => isModValidForUnit(unit, u));

  const validCompromises = Compromises.filter((c) =>
    isModValidForUnit(unit, c),
  );

  const upgradeOptions = validUpgrades.map((u) => (
    <option value={u.name} key={u.name}>
      {u.name} ({u.cost})
    </option>
  ));

  const compromiseOptions = validCompromises.map((c) => (
    <option value={c.name} key={c.name}>
      {c.name} ({c.cost})
    </option>
  ));

  let costElement;
  if (unit.cost > unit.vehicleClass.maxCost) {
    costElement = <div className="cost value error">{unit.cost}</div>;
  } else {
    costElement = <div className="cost value">{unit.cost}</div>;
  }

  return (
    <div className="unit-card">
      <div className="unit">
        <UnitName
          name={unit.name}
          nameIsDefault={unit.name === unit.vehicleClass.name}
          handleNameChange={handleNameChange}
        />
        <div className="cost title">Cost</div>
        {costElement}
        <div className="size title">Size</div>
        <div className="size value">{unit.size}</div>
        <div className="discipline title">Discipline</div>
        <div className="discipline value">{unit.discipline}</div>
        <div className="optics title">Optics</div>
        <div className="optics value">{unit.optics}</div>
        <div className="movement title">Movement</div>
        <div className="movement value">{unit.movement}</div>
        <div className="morale title">Morale</div>
        <div className="morale value">{unit.morale}</div>
        <div className="armour title">Armour</div>
        <div className="armour value">{unit.armour.toDisplayFormat()}</div>
        <div className="hullpoints title">Hull Points</div>
        <div className="hullpoints value">{unit.hullPoints}</div>
        <div className="special title">Special</div>
        <div className="special value">{unit.special.join(", ")}</div>
        <WeaponList
          mounts={unit.mounts}
          handleMountsChange={handleMountsChange}
        />
        <div className="modifications">
          <div className="title">Modifications</div>
          <div className="modifications-list">
            <ol>
              {unit.modifications
                .toSorted((a, b) => a.name.localeCompare(b.name))
                .map((mod) => (
                  <li key={mod.name}>{mod.name}</li>
                ))}
            </ol>
          </div>
        </div>
      </div>
      <div className="modifications-selector">
        <select
          name="modifications"
          id="modifications-selector"
          value={mod}
          onChange={(e) => setMod(e.target.value)}
        >
          <option value="">Add Modifications...</option>
          <optgroup label="Upgrades">{upgradeOptions}</optgroup>
          <optgroup label="Compromises">{compromiseOptions}</optgroup>
        </select>
        <button onClick={handleApplyModification}>Apply</button>
      </div>
      <div className="button-set">
        <button onClick={handleSave}>Save</button>
        <button onClick={handleLoad}>Load</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
