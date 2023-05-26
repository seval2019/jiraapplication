import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask =async (title, taskDesc) => {

    const response=await axios.post('http://localhost:3004/tasks',{
      title,
      taskDesc
    });
    
    const createdTasks = [
      ...tasks,   
        response.data    
    ];
    setTasks(createdTasks);
  };
  const fetchTasks=async()=>{
    const sonuc= await axios.get('http://localhost:3004/tasks');
    setTasks(sonuc.data);
  }

  useEffect(()=>{
    fetchTasks();
  },[])

  const deleteTaskById =async (id) => {
    const sonuc= await axios.delete('http://localhost:3004/tasks/$');
    const afterDeleteTask = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeleteTask);
  };

  const editTaskById = async(id, updatedTitle, updatedTaskDesc) => {
    const sonuc= await axios.update('http://localhost:3004/tasks');
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, taskDesc: updatedTaskDesc };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
      />
    </div>
  );
}

export default App;
