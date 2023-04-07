import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
const listTasks = [
  {name: "buy a new gaming laptop"},
  {name: "complete a previous task"},
  {name: "create video for YouTube"},
];


function App() {
  return (
    <div className="App">
      <Header/>
      <input type="text" name="newTask"/>  
                <button onClick={function(){
                  console.log("hola")
                }}>Agregar</button>
      <TaskList list={listTasks}/>
    </div>
  );
}

export default App;
