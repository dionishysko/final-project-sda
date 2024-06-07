import React from 'react';
import './Logout.css';


const Logout = () => {
    localStorage.setItem('users',JSON.stringify([
        {
        "email": "henribaruti@gmail.com",
        "password": "Password1"
      }]))
    const handleLogout = ()=>{
        console.log('clicked')
     localStorage.removeItem('logged_user')
     window.location.reload()
    }
  return (
    <button className="Logbutton" onClick={handleLogout}>
      Log Out
    </button>
  )
}

export default Logout