import { useReducer } from "react";
import Unit from "../models/unit";
import VehicleClass, {
  VehicleClasses,
  LightBattleVehicle,
} from "../models/vehicle-class";
import VehicleClassSelect from "./VehicleClassSelect";
import UnitCard from "./UnitCard";

interface UnitFormState {
  clean: boolean;
  vehicleClass: VehicleClass;
  unit: Unit;
}

type UnitFormAction =
  | { type: "classChanged"; vehicleClass: string }
  | { type: "unitChanged"; unit: Unit };

const initialState: UnitFormState = {
  clean: true,
  vehicleClass: LightBattleVehicle,
  unit: new Unit(LightBattleVehicle),
};

export default function UnitForm() {
  const [unitForm, dispatch] = useReducer(unitReducer, initialState);

  function handleVehicleClassChange(vehicleClass: VehicleClass) {
    dispatch({
      type: "classChanged",
      vehicleClass: vehicleClass.name,
    });
  }

  function handleUnitChange(unit: Unit) {
    dispatch({
      type: "unitChanged",
      unit,
    });
  }

  function unitReducer(
    unitForm: UnitFormState,
    action: UnitFormAction,
  ): UnitFormState {
    switch (action.type) {
      case "classChanged": {
        let vehicleClass = VehicleClasses.find(
          (vc) => vc.name === action.vehicleClass,
        );
        if (!vehicleClass) {
          throw Error("Unknow vehicle class: " + action.vehicleClass);
        }
        return {
          clean: true,
          vehicleClass: vehicleClass,
          unit: new Unit(vehicleClass),
        };
      }
      case "unitChanged": {
        return {
          ...unitForm,
          clean: false,
          unit: action.unit,
        };
      }
    }
  }

  let { vehicleClass, unit } = unitForm;

  return (
    <>
      <VehicleClassSelect
        vehicleClass={vehicleClass}
        handleVehicleClassChange={handleVehicleClassChange}
      />
      <UnitCard unit={unit} handleUnitChange={handleUnitChange} />
    </>
  );
}
