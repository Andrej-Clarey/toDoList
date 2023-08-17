
import './ToDo.css'

function ToDoList(props){


  console.log(props.tasks)

const tasksItem = props.tasks.map((tasks,index)=>{
  console.log(typeof tasks)



  return(
 
    <li key={index} className={tasks.completed ? "completed" : ""}>
      {tasks}
    <input 
    type="checkbox"
    checked={tasks.completed}
    onChange={()=> props.toggleCompleted(index)}
    />
    <button onClick={() => props.editTask(index, prompt("Enter Update"))}>
      Edit
    </button>
    <button onClick={() => props.deleteTask(index)}>
      Delete
    </button>
    </li>
  )

})
return(
  <div>
    <ul>
      {tasksItem}
    </ul>
  </div>
)
}

export default ToDoList;