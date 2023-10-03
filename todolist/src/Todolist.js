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
    if (newTaskTitle.trim() === "") {
      return;
    }
    props.addTask(newTaskTitle);
    setNewTaskTitle("");
  }
  //показывает все таски
  const onAllClickHandler = () => {
    props.changeFilter("all")
  }
  //показывает только невыполненные, когда isDone = false
  const onActiveClickHandler = () => {
    props.changeFilter("active")
  }
  //только выполненные, когда isDone = true
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
          //выводит столько li сколько id у переменной task в App.js
          props.tasks.map((t) => {
            const onRemoveHandler = () => { props.removeTask(t.id) }
            const onChangeHandler = (e) => {
              props.changeTaskStatus(t.id, e.currentTarget.checked)
              console.log(props.changeTaskStatus(t.id, e.currentTarget.checked))
            }


            return <li><input
              type='checkbox'
              onChange={onChangeHandler}
            />
              <span>{t.title}</span>
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
