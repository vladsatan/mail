import React, { useState} from 'react'
import { TailSpin } from  'react-loader-spinner'
import './Header.css'

export default function Header(props) {
    
    const {isLogin, setIsLogin} = props
    const [loader, setLoader] = useState(false)

   

    const handleLogin = ()=>{ 

       if(isLogin === false){
        setLoader(true)
        setTimeout(()=>{
          setLoader(false)
          setIsLogin(!isLogin)
        },3000)
       }
       else{
        setIsLogin(!isLogin)
        setLoader(true)
        setTimeout(()=>{
          setLoader(false)
        },3000)
       }
        
    }
    

  return (
    <>{
      loader? <div className='loader'><TailSpin color="red" height={200} width={200} /></div>: 
      <header>
      <div className='headerContainer'> 
      <h1>Mail <span>@</span></h1>
      <div className='userInfo'>
    <div className='user'><p>{isLogin? 'degtiarevskiy@gmail.com': 'unknown'}</p></div>
    <button className='loginBtn' onClick={handleLogin}>{isLogin? 'logout': 'login'}</button>
    </div>  
    </div> 
    </header>
    }
    
 
  </>
  )
}
