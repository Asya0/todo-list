import { useState } from "react";

export function Todolist(props) {
  return (
    <div>
      <h3>{props.title}</h3>

      <ul>
        {
          //рисуем здесь li
          //выводит столько li сколько id у переменной task в App.js
          props.tasks.map((i) => {
            return <li><input type='checkbox' checked={i.isDone} />
              <span>{i.title}</span>
              <button onClick={() => { props.removeTask(i.id) }}>x</button>
            </li>
          })
        }

      </ul>
      <div>
        <button onClick={() => props.changeFilter("all")}>All</button>
        <button onClick={() => props.changeFilter("active")}>Active</button>
        <button onClick={() => props.changeFilter("completed")}>Completed</button>
      </div>

    </div>
  );
}
