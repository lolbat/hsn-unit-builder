import { Changelog as LogList, Todos } from "../models/changelog";

export default function Changelog() {
  const changelogList = LogList.toSorted((a, b) => {
    return b.index - a.index;
  }).map((c) => (
    <li key={c.version.toString()}>
      {c.date}: Version {c.version.toString()} &ndash; {c.description}
    </li>
  ));

  const todoList = Todos.map((item, index) => <li key={index}>{item}</li>);

  return (
    <>
      <div id="changelog" className="changelog">
        <h2>Changelog</h2>
        <ol>{changelogList}</ol>
      </div>
      <div id="todo" className="todo">
        <h2>Todo</h2>
        <ul>{todoList}</ul>
      </div>
    </>
  );
}
