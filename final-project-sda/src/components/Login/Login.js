import React, { useState } from 'react';
import './Login.css';
// import users from '../../db/users.json';
import {Link} from 'react-router-dom';

const Login = ({setIsLogged, setRegister}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  // const localUsers = JSON.parse(localStorage.getItem('users')) || []
  // const allUsers = [...users, ...localUsers]
  // console.log(allUsers)
  const handleLogin = (event) => {
    event.preventDefault();

    console.log(email, password);

    if (!emailRegex.test(email)) {
      setMessage('Invalid email address');
      setIsError(true);
      console.log('Invalid email address');
      return;
    }

    if (!passwordRegex.test(password)) {
      setMessage('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit');
      setIsError(true);
      console.log('Invalid password');
      return;
    }
    console.log(passwordRegex.test(password))
    const localUsers = JSON.parse(localStorage.getItem('users') || '[]');
  // const allUsers = [...users, ...localUsers]

    const user = localUsers.find((user) => user.email === email && user.password === password);

    console.log('user:',  user);

    if (!user) {
      setMessage('Login failed. Please check your credentials and try again.');
      setIsError(true);
      console.log('Login failed');
      return;
    }

    setMessage('Logged in successfully!');
    setIsError(false);
    console.log('Logged in successfully!');
    localStorage.setItem('logged_user',user.username)
    setIsLogged(true)
  };

  return (
    // <Router> 
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
              className={isError? 'error' : ''}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={isError? 'error' : ''}
            />
          </div>
          <button type="submit">Log In</button>
        </form>
        {message && (
          <p className={isError? 'error-message' : 'uccess-message'}>
            {message}
          </p>
        )}
      
        <Link to="/Register" onClick={()=>setRegister(true)} className="secondary-button">
          Register
        </Link>
      </div>
    </div>
    // </Router>
  );
};

export default Login;