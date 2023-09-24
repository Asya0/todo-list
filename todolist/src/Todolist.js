import { useState } from "react";

export function Todolist(props) {
  
  return (
    <div>
      {/* TODO LIST */}
      <h3>{props.title}</h3>

      <ul>
        <li><input type='checkbox' checked={props.tasks[0].isDone} /><span>html&css</span></li>
        <li><input type='checkbox' checked={props.tasks[1].isDone} /><span>js</span></li>
        <li><input type='checkbox' checked={props.tasks[2].isDone} /><span>react</span></li>
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>

    </div>
  );
}
