import Unit from "../models/unit";
import { WeaponList } from "./WeaponList";

interface UnitCardProps {
    unit: Unit,
    handleWeaponChange: React.ChangeEventHandler<HTMLSelectElement>
}

export default function UnitCard({unit, handleWeaponChange}: UnitCardProps) {
    return (
        <div className="unit">
        <div className="name">{unit.name}</div>
        <div className="cost title">Cost</div>
        <div className="cost value">{unit.cost}</div>
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
        <div className="armour value">{unit.armour.front}/{unit.armour.sides}/{unit.armour.rear}</div>
        <div className="hullpoints title">Hull Points</div>
        <div className="hullpoints value">{unit.hullPoints}</div>
        <div className="special title">Special</div>
        <div className="special value">{unit.special}</div>
        <WeaponList mounts={unit.mounts} handleWeaponChange={handleWeaponChange}  />
        <div className="modifications">
            <div className="title">Modifications</div>
            <div className="modifications-list">
            <ul></ul>
            </div>
        </div>
        </div>
    );
}