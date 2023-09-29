import { useState } from "react";

export function Todolist(props) {
  const [newTaskTitle, setNewTaskTitle] = useState("")

  const onNewTaskChangeHandler = (e) => {
    setNewTaskTitle(e.currentTarget.value)
  }
  const onKeyPressHandler = (e) => {
    if (e.charCode === 13) {
      addTask()
    }
  }
  const addTask = () => {
    props.addTask(newTaskTitle);
    setNewTaskTitle("");
  }

  const onAllClickHandler = () => {
    props.changeFilter("all")
  }
  const onActiveClickHandler = () => {
    props.changeFilter("active")
  }
  const onCompletedClickHandler = () => {
    props.changeFilter("completed")
  }


  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input
          value={newTaskTitle}
          onChange={onNewTaskChangeHandler}
          onKeyPress={onKeyPressHandler}
        />
        <button onClick={addTask}
        >+</button>
      </div>
      <ul>
        {
          //рисуем здесь li
          //выводит столько li сколько id у переменной task в App.js
          props.tasks.map((i) => {
            const onRemoveHandler = () => {
              props.removeTask(i.id)
            }
            return <li><input type='checkbox' checked={i.isDone} />
              <span>{i.title}</span>
              <button onClick={onRemoveHandler}>x</button>
            </li>
          })
        }

      </ul>
      <div>
        <button onClick={onAllClickHandler}>All</button>
        <button onClick={onActiveClickHandler}>Active</button>
        <button onClick={onCompletedClickHandler}>Completed</button>
      </div>

    </div >
  );
}
