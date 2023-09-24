import './App.css';
import { Todolist } from './Todolist';

function App() {

let tasks1 = [
  {id: 1, title: "learn", isDone: false}, 
  {id: 2, title: "watch", isDone: false},
  {id: 3, title: "read", isDone: true},
]

  return (
    <div className="App">
      <Todolist title="what wacthing" tasks={tasks1} />
    </div>
  );
}

export default App;
