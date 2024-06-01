import React, { useState } from 'react';
import './Login.css';
// import backgroundPhoto from '"../../assets/images/foodLogIn.jpeg"'
import { BrowserRouter as Router, Link,Route,Routes } from "react-router-dom";
import Register from '../Register/Register'


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  // Regular expression pattern for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Regular expression pattern for password validation (at least 8 characters, including one uppercase letter, one lowercase letter, and one digit)
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  const handleLogin = async (event) => {
    event.preventDefault();

    // Validate email and password using regex
    if (!emailRegex.test(email)) {
      setMessage('Invalid email address');
      setIsError(true);
      return;
    }

    if (!passwordRegex.test(password)) {
      setMessage('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit');
      setIsError(true);
      return;
    }

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
    <Router>
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
        <Link to="/Register" className="secondary-button">
              Register
            </Link>
      </div>
    </div>
    <Routes>
    <Route path="/Register" exact component ={Register}/>
</Routes>
</Router>
  );
};

export default Login;
