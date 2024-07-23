// import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="unit">
        <div className="name">Arcus Heavy Tank</div>
        <div className="cost title">Cost</div>
        <div className="cost value">20</div>
        <div className="size title">Size</div>
        <div className="size value">Heavy</div>
        <div className="discipline title">Discipline</div>
        <div className="discipline value">3</div>
        <div className="optics title">Optics</div>
        <div className="optics value">8</div>
        <div className="movement title">Movement</div>
        <div className="movement value">6</div>
        <div className="morale title">Morale</div>
        <div className="morale value">4</div>
        <div className="armour title">Armour</div>
        <div className="armour value">2/2/1</div>
        <div className="hullpoints title">Hull Points</div>
        <div className="hullpoints value">8</div>
        <div className="special title">Special</div>
        <div className="special value">Relentless</div>
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
