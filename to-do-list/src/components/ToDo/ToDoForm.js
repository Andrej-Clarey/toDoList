import { useState } from 'react';
import './ToDo.css';


function ToDoForm(props){
  
  const [newTask, setNewTask] = useState("")
  const handleChange = (event)=>{
    setNewTask(event.target.value)
  }

const handleSubmit =(newTask) =>{
  // event.preventDefault();
  props.setTasks([...props.tasks, newTask])
  console.log(props.tasks)
}

  return(
  <div>
  <form>
        <label>Task: </label>
        <input type="text" value={newTask} onChange={handleChange}/>
        <input type="submit" onClick={(e)=>{
          e.preventDefault()
          handleSubmit(newTask)
        }
        }/>
  </form>
  </div>
  )
}

export default ToDoForm;