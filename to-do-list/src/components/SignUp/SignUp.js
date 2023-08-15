import React, {useState} from 'react';
// import {useState} from 'react';
import './SignUp.css'
// import Header from "../Header/Header.js"
import {useNavigate, Link} from 'react-router-dom';
import ToDo from '../ToDo/ToDo.js'




function SignUp() {
  const navigate = useNavigate;

//   const handleChange = (event) =>{

// <Link to="/todolist"></Link>
//   }
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

if(Username==="" || Email==="" ||Password===""){
  return(
    <div>
    <h2>Please Create an Account</h2>
    <h1 className="error">All Fields Must Be Filled Out</h1>
    <form>
      <label>Username: </label>
      <input type="text" placeholder="username" />
    </form>
    <form>
      <label>Email: </label>
      <input type="email" placeholder="Email"/>
    </form>
    <form>
      <label>Password: </label>
      <input type="password" placeholder="Password"/>
    </form>
    {/* <button onClick={handleChange}>Sign Up</button> */}
    <Link to="/todo" className="button">Sign Up</Link>
  </div>
    
  )
}else{

  return (
    <div>
      <h2>Please Create an Account</h2>
      <form>
        <label>Username: </label>
        <input type="text" placeholder="username" />
      </form>
      <form>
        <label>Email: </label>
        <input type="text" placeholder="Email"/>
      </form>
      <form>
        <label>Password: </label>
        <input type="text" placeholder="Password"/>
      </form>
      {/* <button onClick={handleChange}>Sign Up</button> */}
      <Link to="/todo" className="button">Sign Up</Link>
    </div>
  )
 }
}

export default SignUp