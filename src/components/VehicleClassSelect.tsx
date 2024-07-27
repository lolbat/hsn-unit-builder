import VehicleClass, { VehicleClasses } from "../models/vehicle-class";

interface VehicleClassSelectProps {
  vehicleClass: VehicleClass;
  handleVehicleClassChange(vehicleClass: VehicleClass): void;
}

export default function VehicleClassSelect({
  vehicleClass,
  handleVehicleClassChange,
}: VehicleClassSelectProps) {
  let classList = VehicleClasses.map((v) => (
    <option value={v.name} key={v.name}>
      {v.name}
    </option>
  ));

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    let vehicleClass = VehicleClasses.find((vc) => vc.name === e.target.value);
    if (!vehicleClass) {
      throw Error("Unknow vehicle class: " + e.target.value);
    }

    handleVehicleClassChange(vehicleClass);
  }

  return (
    <div>
      <label>
        <select
          name="vehicle-class"
          id="vehicle-class"
          value={vehicleClass.name}
          onChange={handleChange}
        >
          {classList}
        </select>
      </label>
      <div>Base Cost: {vehicleClass.baseCost}</div>
      <div>Max Cost: {vehicleClass.maxCost}</div>
    </div>
  );
}
