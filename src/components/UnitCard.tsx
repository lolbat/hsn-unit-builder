import Unit from "../models/unit";
import { WeaponList } from "./WeaponList";
import { MountSet } from "../models/mount";
import { UnitName } from "./UnitName";
import { useContext, useState } from "react";
import DispatchContext from "../contexts/dispatch-context";
import { Upgrades, UpgradesByName } from "../models/modifications/upgrades";
import { toModificationName } from "../models/constants";
import {
  costToApplyModification,
  isModValidForUnit,
  UnimplementedModifications,
} from "../models/modifications/modifications";
import { Compromises, CompromisesByName } from "../models/modifications/compromises";

interface UnitCardProps {
  unit: Unit;
  handleUnitChange: (unit: Unit) => void;
}

const ModificationsByName = new Map([...UpgradesByName, ...CompromisesByName]);

export default function UnitCard({ unit, handleUnitChange }: UnitCardProps) {
  const [mod, setMod] = useState("");
  const dispatch = useContext(DispatchContext);

  const handleMountsChange = function (mounts: MountSet) {
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
    if (mod === "") {
      return;
    }

    const modName = toModificationName(mod);
    if (modName === null) {
      return;
    }

    const selectedMod = ModificationsByName.get(modName);
    if (selectedMod) {
      const updatedUnit = unit.applyModification(selectedMod);
      handleUnitChange(updatedUnit);
    }
  };

  const validUpgrades = Upgrades.filter((u) => isModValidForUnit(unit, u));

  const validCompromises = Compromises.filter((c) =>
    isModValidForUnit(unit, c),
  );

  const upgradeOptions = validUpgrades.map((u) => {
    const className = UnimplementedModifications.includes(u.name)
      ? "error"
      : "";

    return (
      <option value={u.name} key={u.name} className={className}>
        {u.name} ({costToApplyModification(unit, u)})
      </option>
    );
  });

  const compromiseOptions = validCompromises.map((c) => {
    const className = UnimplementedModifications.includes(c.name)
      ? "error"
      : "";

    return (
      <option value={c.name} key={c.name} className={className}>
        {c.name} ({costToApplyModification(unit, c)})
      </option>
    );
  });

  let costElement;
  if (unit.cost > unit.maxCost) {
    costElement = <div className="cost value error">{unit.cost}</div>;
  } else {
    costElement = <div className="cost value">{unit.cost}</div>;
  }

  const modificationsElement = unit.modifications
    .toSorted((a, b) => a.modification.name.localeCompare(b.modification.name))
    .map((m) => {
      if (m.quantity === 1) {
        return <li key={m.modification.name}>{m.modification.name}</li>;
      }
      return (
        <li key={m.modification.name}>
          {m.modification.name} ({m.quantity})
        </li>
      );
    });

  return (
    <div className="unit-card">

      <div className="unit">
        
        <UnitName
            name={unit.name}
            nameIsDefault={unit.name === unit.vehicleClass.name}
            handleNameChange={handleNameChange}
          />

        <div className="unitStats">

          <div className="title">Cost</div>
          <div className="title">Size</div>
          <div className="title">Discipline</div>
          <div className="title">Optics</div>
          <div className="title">Movement</div>
          
          {costElement}
          <div className="value">{unit.size}</div>
          <div className="value">{unit.discipline}</div>
          <div className="value">{unit.optics}</div>
          <div className="value">{unit.movement}</div>
      
          <div className="title">Morale</div>
          <div className="title">Armour</div>
          <div className="title">Hull Points</div>
          <div className="title grid-col-span-2 left">Special</div>

          <div className="value">{unit.morale}</div>
          <div className="value">{unit.armour.toDisplayFormat()}</div>
          <div className="value">{unit.hullPoints}</div>
          <div className="value grid-col-span-2 left">{unit.special.join(", ")}</div>
        
        </div>

        <WeaponList
          mountSet={unit.mounts}
          handleMountSetChange={handleMountsChange}
        />

        <div className="modifications">
          <div className="title">Modifications</div>
          <div className="modifications-list">
            <ol>{modificationsElement}</ol>
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
        <button id="apply-modification" onClick={handleApplyModification}>
          Apply
        </button>
        <div>
          <i>Modifications in red are not yet implemented</i>
        </div>
      </div>

      <div className="button-set">
        <button onClick={handleSave}>Save</button>
        <button onClick={handleLoad}>Load</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
