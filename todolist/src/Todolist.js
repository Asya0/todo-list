import { useState } from "react";

export function Todolist(props) {
  const [newTaskTitle, setNewTaskTitle] = useState("")

  // setNewTaskTitle = newTaskTitle.onChange()


  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.currentTarget.value)}
          onKeyPress={(e) => {
            if (e.charCode === 13) {
              props.addTask(newTaskTitle);
              setNewTaskTitle("");
            }
          }}
        />
        <button onClick={() => {
          props.addTask(newTaskTitle);
          setNewTaskTitle("");
        }}>+</button>
      </div>
      <ul>
        {
          //рисуем здесь li
          //выводит столько li сколько id у переменной task в App.js
          props.tasks.map((i) => {
            return <li><input type='checkbox' checked={i.isDone} />
              <span>{i.title}</span>
              <button onClick={(e) => { props.removeTask(i.id) }}>x</button>
            </li>
          })
        }

      </ul>
      <div>
        <button onClick={(e) => props.changeFilter("all")}>All</button>
        <button onClick={(e) => props.changeFilter("active")}>Active</button>
        <button onClick={(e) => props.changeFilter("completed")}>Completed</button>
      </div>

    </div >
  );
}
