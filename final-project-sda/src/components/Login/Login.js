import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://yourbackendurl/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
    
      localStorage.setItem('token', data.token);
      
      setMessage('Logged in successfully!');
      setIsError(false);
    } catch (error) {
      setMessage('Login failed. Please check your credentials and try again.');
      setIsError(true);
    }
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
              className={isError ? 'error' : ''}
            />
          </div>
          <div>
            <label>Password:</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              className={isError ? 'error' : ''}
            />
          </div>
          <button type="submit">Log In</button>
        </form>
        {message && (
          <p className={isError ? 'error-message' : 'success-message'}>
            {message}
          </p>
        )}
        <p>
          Don't have an account?
        </p>
      </div>
    </div>
  );
};

export default Login;