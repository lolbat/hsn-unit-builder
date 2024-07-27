import { useCallback, useReducer } from 'react'
import { toWeaponName, WeaponName } from './models/constants';
import Unit from './models/unit';
import VehicleClass, { LightBattleVehicle, VehicleClasses } from './models/vehicle-class';
import Weapon from './models/weapon';
import { WeaponTypes } from './models/weapon-class';
import { UnitCard } from './components/UnitCard';
import { VehicleClassSelect } from './components/VehicleClassSelect';
import './App.css'

interface UnitFormState {
  clean: boolean,
  vehicleClass: VehicleClass,
  unit:  Unit
}

type WeaponSelection = WeaponName | 'None';

type UnitFormAction = 
  | {type: "classChanged", vehicleClass: string}
  | {type: "weaponChanged", mountKey: string, weaponType: WeaponSelection}

const initialState: UnitFormState = {
  clean: true,
  vehicleClass: LightBattleVehicle,
  unit: new Unit(LightBattleVehicle)
}

function App() {
  const [unitForm, dispatch] = useReducer(unitReducer, initialState)

  const handleVehicleClassChange = useCallback<React.ChangeEventHandler<HTMLSelectElement>>((e) => {
    dispatch({
      type: 'classChanged',
      vehicleClass: e.target.value
    });
  }, [dispatch]);

  const handleWeaponChange = useCallback<React.ChangeEventHandler<HTMLSelectElement>>((e) => {
    let weaponType: WeaponSelection;
    if (e.target.value === 'None') {
      weaponType = 'None'
    } else {
      weaponType = toWeaponName(e.target.value);
    }

    dispatch({
      type: 'weaponChanged',
      mountKey: e.target.name,
      weaponType: weaponType
    });
  }, [dispatch]);

  function unitReducer(unitForm: UnitFormState, action: UnitFormAction): UnitFormState {
    switch (action.type) {
      case 'classChanged': {
        let vehicleClass = VehicleClasses.find(vc => vc.name === action.vehicleClass);
        if (!vehicleClass) {
          throw Error('Unknow vehicle class: ' + action.vehicleClass);
        }
        return {
          clean: true,
          vehicleClass: vehicleClass,
          unit: new Unit(vehicleClass)
        };
      }
      case 'weaponChanged': {
        let unit = unitForm.unit;
        let {mountKey, weaponType} = action;
        let mountToEquip = unit.mounts.find((m) => m.key === mountKey)
        if (!mountToEquip) {
          throw Error('Unknow mount type: ' + mountKey);
        }

        if (weaponType === 'None') {
          mountToEquip.removeWeapon();
          return {
            ...unitForm,
            clean: false,
            unit: unit
          }; 
        }

        let weaponToEquip = WeaponTypes.find((w) => weaponType === w.name)
        if (!weaponToEquip) {
          throw Error('Unknow weapon type: ' + weaponType);
        }

        mountToEquip.setWeapon(new Weapon(weaponToEquip, mountToEquip.type.mountType));

        return {
          ...unitForm,
          clean: false,
          unit: unit
        };
      }
    }
  }

  let {vehicleClass, unit} = unitForm;

  return (
    <>
      <VehicleClassSelect vehicleClass={vehicleClass} handleVehicleClassChange={handleVehicleClassChange} />
      <UnitCard unit={unit} handleWeaponChange={handleWeaponChange} />
    </>
  )
}

export default App
