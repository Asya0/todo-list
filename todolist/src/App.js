import './App.css';
import { Todolist } from './Todolist';
import { useState } from "react";
import uuid from 'react-uuid';
import {AddItemForm} from "./AddItemForm";


function App() {

  let FilterValueType = "all" || "completed" || "active"


  //тоже самое что писать let [tasks, setTasks] = arr;
  let [filter, setFilter] = useState("all");


  function removeTask(id, todolistId) {
    let tasks = tasksObj[todolistId];
    // фильтровали для того чтобы удалить таску
    let filteredTasks = tasks.filter((t) => t.id !== id)
    tasksObj[todolistId] = filteredTasks;
    setTasks({ ...tasksObj })
  }
  function addTask(title, todolistId) {
    let task = { id: uuid(), title: title, isDone: false, }
    let tasks = tasksObj[todolistId];
    let newTasks = [task, ...tasks]
    tasksObj[todolistId] = newTasks;
    setTasks({ ...tasksObj })
  }

  function changeStatus(taskId, isDone, todolistId) {
    let tasks = tasksObj[todolistId];
    if (tasks) {
      let task = tasks.find(t => t.id === taskId);
      if (task) {
        task.isDone = isDone;
        setTasks({ ...tasksObj });
      }
    }
  }

  function changeFilter(FilterValueType, todolistId) {
    let todolist = todolists.find(tl => tl.id === todolistId);
    if (todolist) {
      todolist.filter = FilterValueType;
      setTodolists([...todolists]);
    }
  }

  let todolistId1 = uuid();
  let todolistId2 = uuid();

  let [todolists, setTodolists] = useState([
    {
      id: todolistId1, title: "what to do", filter: "all",
    },
    {
      id: todolistId2, title: "what buy", filter: "all",
    }
  ])

  let removeTodolist = (todolistId) => {
    let filteredTodolist = todolists.filter(tl => tl.id !== todolistId)
    setTodolists(filteredTodolist);
    delete tasksObj[todolistId]
    setTasks({ ...tasksObj })
  }

  let [tasksObj, setTasks] = useState({
    [todolistId1]: [
      { id: uuid(), title: "learn", isDone: false },
      { id: uuid(), title: "watch", isDone: false },
      { id: uuid(), title: "read", isDone: false },
      { id: uuid(), title: "sleep", isDone: false },
    ],
    [todolistId2]: [
      { id: uuid(), title: "book", isDone: false },
      { id: uuid(), title: "milk", isDone: true },
    ]
  })

  function addTodolist(title) {
    let todolist = {
      id: uuid(),
      filter: "all",
      title: title
    }
    setTodolists([todolist, ...todolists]);
    setTasks({
      ...tasksObj,
      [todolist.id]: []
    })
  }

  return (
    <div className="App">
      <AddItemForm addItem={(addTodolist)}/>
      {
        todolists.map((tl) => {

          let taskForTodolist = tasksObj[tl.id];
          if (tl.filter === "completed") {
            taskForTodolist = taskForTodolist.filter(i => i.isDone === true)
          }
          if (tl.filter === "active") {
            taskForTodolist = taskForTodolist.filter(i => i.isDone === false)
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
            removeTodolist={removeTodolist}
          />
        })
      }


    </div>
  );
}

export default App;
