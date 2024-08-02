import { useContext } from "react";
import Unit from "../models/unit";
import VehicleClassSelect from "./VehicleClassSelect";
import UnitCard from "./UnitCard";
import VehicleClass from "../models/vehicle-class";
import DispatchContext from "../contexts/dispatch-context";

interface UnitFormProps {
  vehicleClass: VehicleClass;
  unit: Unit;
}

export default function UnitForm({ vehicleClass, unit }: UnitFormProps) {
  // const [clean, setClean] = useState(true);
  const dispatch = useContext(DispatchContext);

  function handleVehicleClassChange(vehicleClass: VehicleClass) {
    // setClean(true);
    dispatch({
      type: "vehicle-class-change",
      vehicleClass: vehicleClass,
    });
  }

  function handleUnitChange(unit: Unit) {
    // setClean(false);
    dispatch({
      type: "unit-change",
      unit,
    });
  }

  return (
    <>
      <VehicleClassSelect
        vehicleClass={vehicleClass}
        maxCost={unit.maxCost}
        handleVehicleClassChange={handleVehicleClassChange}
      />
      <UnitCard
        unit={unit.modifications.reduce((u, m) => m.applyToUnit(u), unit)}
        handleUnitChange={handleUnitChange}
      />
    </>
  );
}
