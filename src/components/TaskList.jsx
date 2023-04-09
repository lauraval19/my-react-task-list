import { useEffect, useState } from "react";
import {TaskCard} from "./TaskCard";
export const TaskList = (props) => {
    const [newTask,setNewTask] = useState([])


    const handleCompleteClick = (taskUpdateName) => {
      console.log(taskUpdateName);
      const localStorageComplete = JSON.parse(localStorage.getItem("taskList"));
      
        localStorageComplete.map(task => {
          if(task.name === taskUpdateName){
            task.complete = !task.complete;
          }
        });
      setNewTask(localStorageComplete);      
      localStorage.setItem("taskList",JSON.stringify(localStorageComplete));  

   };

    useEffect(() =>{

      const localStorageData = localStorage.getItem("completeTask");
      const storedTask = JSON.parse(localStorageData);
      if(storedTask !== null){
        setNewTask(storedTask);
      }else{
        setNewTask([]);
      }
      
    },[]);

    useEffect(() =>{

      const localStorageData = localStorage.getItem("taskList");
      const storedTask = JSON.parse(localStorageData);
      if(storedTask !== null){
        setNewTask(storedTask);
      }else{
        setNewTask([]);
      }
      
    },[]);

    const addTask = (newTaskName) => {
        let newListTask = [...newTask];
        newListTask = [...newTask,{name:newTaskName,complete:false}];
        setNewTask(newListTask);
        localStorage.setItem("taskList",JSON.stringify(newListTask));
    };

    return (
        <div>
          <div>
          <input id="newtask" type="Text"></input>
          <button onClick={() => {addTask(document.getElementById("newtask").value)}}>agregar</button>
          </div>
          {newTask.map(task =>
            <TaskCard name={task.name} 
            onNewTaskClick={handleCompleteClick}
            isComplete={task.complete}
            />
            )}
        </div>
      );
}