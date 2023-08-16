import { useState } from 'react';
import './ToDo.css';

function ToDoForm(){
  const [stuff, setstuff] = useState("");
  const handleChange = ()=>{
    
  }
  return(
  <div>
  <form>
        <label>Task: </label>
        <input type="text"  onChange={handleChange}/>
        <input type="submit"/>
  </form>
  </div>
  )
}

export default ToDoForm;