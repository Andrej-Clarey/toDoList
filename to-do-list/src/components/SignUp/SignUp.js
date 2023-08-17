import React, { useState } from "react";
// import {useState} from 'react';
import "./SignUp.css";
// import Header from "../Header/Header.js"
import { useNavigate, Link } from "react-router-dom";
import ToDo from "../ToDo/ToDo.js";

function SignUp() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // on submit method
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleNameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    navigate("/todo");
  };

  return (
    <div>
      <h2>Please Create an Account</h2>

      <form onSubmit={handleSignUp}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          required
          value={username}
          onChange={handleNameChange}
        />

        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          value={email}
          required
          onChange={handleEmailChange}
        />

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />

        {/*   
  <Link to="/todo" className="button" >Sign Up</Link> */}

        <button type="submit"> SignUp</button>
      </form>
    </div>
  );
}

export default SignUp;
