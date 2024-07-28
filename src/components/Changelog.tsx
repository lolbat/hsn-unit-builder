export default function Changelog() {
  return (
    <>
      <div id="changelog" className="changelog">
        <h2>Changelog</h2>
        <ol>
          <li>
            2024-07-28: Version 0.0.2 &ndash; Edit unit name. Add contact
            details.
          </li>
          <li>2024-07-27: Version 0.0.1 &ndash; Initial release</li>
        </ol>
      </div>
      <div id="todo" className="todo">
        <h2>Todo</h2>
        <ul>
          <li>99% of the UI formatting and layout</li>
          <li>Add support for Mega-turret sponsons</li>
          <li>
            Display a warning when current cost exceeds max cost for class
          </li>
          <li>Upgrades and Compromises</li>
          <li>Rules text for special rules and upgrades/modifications</li>
          <li>Display armour values correctly for walkers and fast movers</li>
          <li>Save unit to browser local storage</li>
          <li>List units saved to storage</li>
          <li>Delete a stored unit</li>
          <li>Modify a stored unit</li>
          <li>Print unit</li>
          <li>Support for platoons</li>
          <li>Etc, etc, etc...</li>
        </ul>
      </div>
    </>
  );
}
