


function ToDoList(props){
  console.log(props.tasks)
const tasksItem = props.tasks.map((tasks,index)=>{
  return(
    <li key={index} className={'strike'+tasks[1]}>
    {tasks}
    <input 
    type="checkbox"
    checked={tasks.completed}
    onChange={()=> props.toggleCompleted(index)}
    ></input>
    <button onClick={() => props.editTask(index, prompt("Enter Update"))}>Edit</button>
    <button onClick={() => props.deleteTask(index)}>Delete</button>
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