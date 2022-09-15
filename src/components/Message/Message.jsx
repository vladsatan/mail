import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MainContainer from '../MainContainer/MainContainer'



export default function Message(props) {

     const {array} = props
     const  {emailId} = useParams()
     const navigate = useNavigate()

    const handleBackButton =()=>{
        navigate("/")
    }
 
    return (
    <div>
        <button onClick={handleBackButton}>Back</button>
        
    {array.map(e=>{
 
        if(e.id === Number(emailId)){
         return   <p style={{'color':'white'}}>{e.message}</p>
        
    }})}</div>
  )
}
