import './App.css';
import { Todolist } from './Todolist';
import { useState } from "react";


function App() {

  let tasks = [
    { id: 1, title: "learn", isDone: false },
    { id: 2, title: "watch", isDone: false },
    { id: 3, title: "read", isDone: true },
    { id: 4, title: "sleep", isDone: true }
  ]

  useState(tasks)

  function removeTask(id) {
    tasks = tasks.filter((i) => i.id !== id)
    debugger
    console.log(tasks)
  }

  return (
    <div className="App">
      <Todolist title="what wacthing" tasks={tasks} removeTask={removeTask} />
    </div>
  );
}

export default App;
