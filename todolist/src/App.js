import './App.css';
import { Todolist } from './Todolist';
import { useState } from "react";
import uuid from 'react-uuid';


function App() {

  let [tasks, setTasks] = useState([
    { id: uuid(), title: "learn", isDone: false },
    { id: uuid(), title: "watch", isDone: false },
    { id: uuid(), title: "read", isDone: true },
    { id: uuid(), title: "sleep", isDone: true }
  ])
  let FilterValueType = "all" || "completed" || "active"


  //тоже самое что писать let [tasks, setTasks] = arr;
  let [filter, setFilter] = useState("all");

  function changeFilter(FilterValueType) {
    setFilter(FilterValueType)
  }


  function removeTask(id) {
    // фильтровали для того чтобы удалить таску
    let filteredTasks = tasks.filter((i) => i.id !== id)
    setTasks(filteredTasks)
  }
  function addTask(title) {
    let task = {
      id: uuid(), title: title, isDone: false,
    }
    let newTasks = [task, ...tasks]
    setTasks(newTasks)
  }
  function changeStatus(taskId, isDone) {
    let task = tasks.find(t => t.id === taskId)
    //псевдоистина
    if (task) {
      task.isDone = isDone;
    }
    setTasks([...tasks])

  }

  let taskForTodolist = tasks;
  if (filter === "completed") {
    taskForTodolist = tasks.filter(i => i.isDone === true)
  }
  if (filter === "active") {
    taskForTodolist = tasks.filter(i => i.isDone === false)
  }

  return (
    <div className="App">
      <Todolist title="what to do"
        tasks={taskForTodolist}
        removeTask={removeTask}
        changeFilter={changeFilter}
        addTask={addTask}
        changeTaskStatus={changeStatus}
      />
    </div>
  );
}

export default App;
