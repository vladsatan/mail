import React from 'react'

import './Header.css'

export default function Header(props) {
    
    const {user,setIsLogin} = props

    const handleLogin = ()=>{ 
      localStorage.removeItem('isLogin')
      setIsLogin(false)
    }


      return (
      <header>
      <div className='headerContainer'> 
      <h1>Mail <span>@</span></h1>
      <div className='userInfo'>
    <div className='user'><p>{user}</p></div>
    <button className='loginBtn' onClick={handleLogin}>logout</button>
    </div>  
    </div> 
    </header>

  )

}
