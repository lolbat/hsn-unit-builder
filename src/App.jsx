// import { useState } from 'react'
import './App.css'
import Armour from './models/armour';
import Class from './models/class';
import Unit from './models/unit';

let klass = new Class(
  'Heavy Battle Vehicle',
  10,
  22,
  'Heavy',
  3,
  8,
  6,
  3,
  new Armour(2, 1, 1),
  8,
  ['Hull', 'Sponsons', 'Turret'],
  ['Relentless']
);

let unit = new Unit(klass);

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
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
        <div className="weapons">
          <div className="weapon title">Weapons</div>
          <div className="rating title">Rating</div>
          <div className="mount title">Mount</div>
          <div className="special title">Special</div>
          <ul className="weapons-list">
            <li className="weapon">
              <div className="name">Battle Cannon</div>
              <div className="rating">9</div>
              <div className="mount">Turret</div>
              <div className="special">d</div>
            </li>
          </ul>
        </div>
        <div className="modifications">
          <div className="title">Modifications</div>
          <div className="modifications-list">
            <div className="modification">Reinforced Side Armour</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
