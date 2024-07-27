import VehicleClass, { VehicleClasses } from "../models/vehicle-class";

interface VehicleClassSelectProps {
  vehicleClass: VehicleClass;
  handleVehicleClassChange: React.ChangeEventHandler<HTMLSelectElement>;
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
  return (
    <div>
      <label>
        <select
          name="vehicle-class"
          id="vehicle-class"
          value={vehicleClass.name}
          onChange={handleVehicleClassChange}
        >
          {classList}
        </select>
      </label>
      <div>Base Cost: {vehicleClass.baseCost}</div>
      <div>Max Cost: {vehicleClass.maxCost}</div>
    </div>
  );
}
