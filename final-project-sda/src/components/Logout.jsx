import React from 'react'

const Logout = () => {
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