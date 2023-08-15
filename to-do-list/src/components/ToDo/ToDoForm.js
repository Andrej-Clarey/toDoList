import { useState } from 'react';

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