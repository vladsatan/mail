import React from 'react'
import "./LoginPage.css"
import { useEffect, useState } from 'react'
import { TailSpin } from  'react-loader-spinner'

export default function LoginPage(props) {

    const {isLogin, setIsLogin,setUser} = props

    const [usersData,setUsersData ] = useState([])
    const [login,setLogin] = useState('')
    const [password,setPassword] = useState('')
    const [loader, setLoader] = useState(false)

    useEffect(()=>{
       fetch("../../../users.json").then((response) => response.json()).then((data) =>{setUsersData(data)})
    }, [isLogin])

    const checkLoginInfo =()=>{
        usersData.forEach(e=>{
            if(e.login === login && e.password === password){
                localStorage.setItem('isLogin', true)
                setUser(e.login)
                if(isLogin === false){
                    setLoader(true)
                    setTimeout(()=>{
                      setLoader(false)
                      setIsLogin(!isLogin)
                    },3000)
                   }
              }
        })
    }
    
    return (
        <>
        {loader? <div className='loader'><TailSpin color="red" height={200} width={200} /></div>:
        <div className='login-container'>
        <div className='login-window'>
            <h1><span className='span'>MAIL</span>@</h1>
            <input type="text" className='login-input' placeholder='Login...' onChange={event=>{setLogin(event.target.value)}} />
            <input type="password" className='password-input' placeholder='Password...' onChange={event=>{setPassword(event.target.value)}} />
            <button className='lb' onClick={checkLoginInfo}>Login</button>
        </div>
    </div>
    }</>
  )
}
