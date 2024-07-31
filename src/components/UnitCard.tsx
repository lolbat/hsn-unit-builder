import Unit from "../models/unit";
import { WeaponList } from "./WeaponList";
import { Mount } from "../models/mount";
import { UnitName } from "./UnitName";
import { useContext } from "react";
import DispatchContext from "../contexts/dispatch-context";

interface UnitCardProps {
  unit: Unit;
  handleUnitChange: (unit: Unit) => void;
}

export default function UnitCard({ unit, handleUnitChange }: UnitCardProps) {
  const dispatch = useContext(DispatchContext);

  const handleMountsChange = function (mounts: Mount[]) {
    unit.mounts = mounts;
    handleUnitChange(unit);
  };

  const handleNameChange = function (name: string) {
    if (name) {
      unit.name = name;
    } else {
      unit.name = unit.vehicleClass.name;
    }
    handleUnitChange(unit);
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
              {unit.modifications.map((mod) => (
                <li key={mod.name}>{mod.name}</li>
              ))}
            </ol>
          </div>
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
