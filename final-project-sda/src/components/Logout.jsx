import React from 'react'

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
    <button onClick={handleLogout}>
      Log Out
    </button>
  )
}

export default Logout