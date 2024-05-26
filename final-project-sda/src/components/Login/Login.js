import React, { useState } from 'react';
import  { Link }  from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    
    
    console.log('Logging in with:', email, password);
  };

  return (
    <div className="login-container">
      <div className="login-photo">
       {/* <img src="foodLogIn.jpg" alt="Login" /> */}
      </div>
      <div className="login-form">
        <h2>Log In</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label>Password:</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit">Log In</button>
        </form>
        <p>
          Don't have an account?
        </p>
      </div>
    </div>
  );
};

export default Login;
