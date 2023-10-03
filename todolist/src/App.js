import './App.css';
import { Todolist } from './Todolist';
import { useState } from "react";
import uuid from 'react-uuid';


function App() {

  let [tasks, setTasks] = useState([
    { id: uuid(), title: "learn", isDone: false },
    { id: uuid(), title: "watch", isDone: false },
    { id: uuid(), title: "read", isDone: false },
    { id: uuid(), title: "sleep", isDone: false }
  ])
  let FilterValueType = "all" || "completed" || "active"


  //тоже самое что писать let [tasks, setTasks] = arr;
  let [filter, setFilter] = useState("all");


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

  function changeFilter(FilterValueType, todolistId) {
    let todolist = todolists.find(tl => tl.id === todolistId);
    if (todolist) {
      todolist.filter = FilterValueType;
      setTodolists([...todolists]);
    }
    // setFilter(FilterValueType)
  }

  let [todolists, setTodolists] = useState([
    {
      id: uuid(), title: "what to do", filter: "active",
    },
    {
      id: uuid(), title: "what buy", filter: "completed",
    }
  ])

  return (
    <div className="App">
      {
        todolists.map((tl) => {

          let taskForTodolist = tasks;
          if (tl.filter === "completed") {
            taskForTodolist = tasks.filter(i => i.isDone === true)
          }
          if (tl.filter === "active") {
            taskForTodolist = tasks.filter(i => i.isDone === false)
          }

          return <Todolist
            key={tl.id}
            id={tl.id}
            title={tl.title}
            tasks={taskForTodolist}
            removeTask={removeTask}
            changeFilter={changeFilter}
            addTask={addTask}
            changeTaskStatus={changeStatus}
            filter={tl.filter}
          />
        })
      }


    </div>
  );
}

export default App;
