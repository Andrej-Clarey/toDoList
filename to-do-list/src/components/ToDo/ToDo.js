import ToDoForm from './ToDoForm';
import './ToDo.css';

function ToDo(){
  return(
    <div>
      <h1 className="done">Why haven't you done this yet?</h1>
      <ToDoForm/>
    </div>
  )
}

export default ToDo