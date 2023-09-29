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
  console.log(tasks)
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
    let newTask = {
      id: uuid(), title: title, isDone: false,
    }
    let newTasks = [newTask, ...tasks]
    setTasks(newTasks)
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
      />
    </div>
  );
}

export default App;
