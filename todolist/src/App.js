import './App.css';
import { Todolist } from './Todolist';
import { useState } from "react";


function App() {

  let initTasks = [
    { id: 1, title: "learn", isDone: false },
    { id: 2, title: "watch", isDone: false },
    { id: 3, title: "read", isDone: true },
    { id: 4, title: "sleep", isDone: true }
  ]
  let FilterValueType = "all" || "completed" || "active"

  let [tasks, setTasks] = useState(initTasks)
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
      />
    </div>
  );
}

export default App;
