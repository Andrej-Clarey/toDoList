import ToDoForm from './ToDoForm';
import './ToDo.css';
import { useState } from 'react';
import ToDoList from './ToDoList';

function ToDo(){
  const [tasks, setTasks] = useState([]);
  
  const editTask = (index, newText)=>{
    const updatedTasks = [...tasks];
    updatedTasks[index]= [newText];
    setTasks(updatedTasks)
  };

  const deleteTask = ({index})=>{
      const confirmation = window.confirm("Do you really want to delete this?");
      const updatedTasks = [...tasks];

      if(confirmation === true) {
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks)
      }
  };

  const toggleCompleted = (tasks, index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed
    setTasks(updatedTasks);
  }

  return(
    <div>
      <h1 className="done">Why haven't you done this yet?</h1>
      <ToDoForm
      tasks={tasks}
      setTasks={setTasks}
      />
      <ToDoList
      tasks={tasks}
      editTask={editTask}
      deleteTask={deleteTask}
      toggleCompleted={toggleCompleted}
      />
    </div>
  )
}

export default ToDo