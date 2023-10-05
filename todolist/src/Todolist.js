import { useState } from "react";

export function Todolist(props) {
  const [newTaskTitle, setNewTaskTitle] = useState("")
  const [error, setError] = useState("")

  const onNewTaskChangeHandler = (e) => {
    setNewTaskTitle(e.currentTarget.value)
  }
  const onKeyPressHandler = (e) => {
    setError(null) //убирает error & error-mes если после ошибки юзер начинает набирать слова
    if (e.charCode === 13) {
      addTask()
    }
  }
  //пришлось сделать через !, потому что до этого добавляла таску
  const addTask = () => {
    if (newTaskTitle.trim() !== "") {
      props.addTask(newTaskTitle.trim(), props.id);
      setNewTaskTitle("");
    } else {
      setError("field request");
    }
  }
  //показывает все таски
  const onAllClickHandler = () => { props.changeFilter("all", props.id) }
  //показывает только невыполненные, когда isDone = false
  const onActiveClickHandler = () => { props.changeFilter("active", props.id) }
  //только выполненные, когда isDone = true
  const onCompletedClickHandler = () => { props.changeFilter("completed", props.id) }
  const removeTodolist = () => { props.removeTodolist(props.id); }


  return (
    <div>
      <h3>{props.title}<button onClick={removeTodolist}>x</button></h3>
      <div>
        <input
          value={newTaskTitle}
          onChange={onNewTaskChangeHandler}
          onKeyPress={onKeyPressHandler}
          className={error ? "error" : " "}
        />
        <button onClick={addTask}        >+</button>
        {error && <div className="error-message">{error}</div>}
      </div>
      <ul>
        {
          //выводит столько li сколько id у переменной task в App.js
          props.tasks.map((t) => {
            const onRemoveHandler = () => { props.removeTask(t.id, props.id) }
            const onChangeHandler = (e) => {
              props.changeTaskStatus(t.id, e.currentTarget.checked)
              console.log(props.changeTaskStatus(t.id, e.currentTarget.checked, props.id))
            }


            return <li key={t.id} className={t.isDone ? "is-done" : ""}><input
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
        <button className={props.filter === "all" ? "active-filter" : ""}
          onClick={onAllClickHandler}>All</button>
        <button className={props.filter === "active" ? "active-filter" : ""}
          onClick={onActiveClickHandler}>Active</button>
        <button className={props.filter === "completed" ? "active-filter" : ""}
          onClick={onCompletedClickHandler}>Completed</button>
      </div>

    </div >
  );
}
