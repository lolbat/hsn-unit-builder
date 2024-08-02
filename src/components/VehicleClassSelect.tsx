import VehicleClass, { VehicleClasses } from "../models/vehicle-class";

interface VehicleClassSelectProps {
  vehicleClass: VehicleClass;
  maxCost: number;
  handleVehicleClassChange(vehicleClass: VehicleClass): void;
}

export default function VehicleClassSelect({
  vehicleClass,
  maxCost,
  handleVehicleClassChange,
}: VehicleClassSelectProps) {
  const classList = VehicleClasses.map((v) => (
    <option value={v.name} key={v.name}>
      {v.name}
    </option>
  ));

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const vehicleClass = VehicleClasses.find(
      (vc) => vc.name === e.target.value,
    );
    if (!vehicleClass) {
      throw Error("Unknow vehicle class: " + e.target.value);
    }

    handleVehicleClassChange(vehicleClass);
  }

  return (
    <div className="vehicle-class-selector">
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
      <div>Max Cost: {maxCost}</div>
    </div>
  );
}
