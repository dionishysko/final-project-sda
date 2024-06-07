import React, { useState } from 'react';
// import users from '../../db/users.json';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Import the CSS file

const Register = ({setRegister}) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Password validation regex
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  
    // Check if passwords match and meet the regex criteria
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    } else if (!passwordRegex.test(formData.password)) {
      alert(
        'Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number.'
      );
      return;
    }
  
    // Proceed with the registration logic
    const data = JSON.parse(localStorage.getItem('users') || '[]');
    data.push(formData);
    localStorage.setItem('users', JSON.stringify(data));
    console.log('Registration data:', data);
    setRegister(false);
    navigate('/');
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
