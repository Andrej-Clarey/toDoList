


function ToDoList(props){
  console.log(props.tasks)
const tasksItem = props.tasks.map((tasks,index)=>{
  return(
    <li key={index} className={'strike'+tasks[1]}>
    {tasks}
    <input type="checkbox"></input>
    <button>Edit</button>
    <button>Delete</button>
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