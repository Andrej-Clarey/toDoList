import ToDoForm from './ToDoForm';
import './ToDo.css';
import { useState } from 'react';
import ToDoList from './ToDoList';

function ToDo(){
  const [tasks, setTasks] = useState([]);

  return(
    <div>
      <h1 className="done">Why haven't you done this yet?</h1>
      <ToDoForm
      tasks={tasks}
      setTasks={setTasks}
      />
      <ToDoList
      tasks={tasks}
      />
    </div>
  )
}

export default ToDo