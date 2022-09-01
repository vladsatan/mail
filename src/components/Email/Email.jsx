import React from 'react'
import "./Email.css"
import mailSVG from './mailSVG.svg'
import ReactTooltip from 'react-tooltip';

export default function Email(props) {

    const {id,content, isRead, sender, emailDate,lettersarray,setLetters} = props
    console.log(lettersarray, 'lettersarray');
    const moveToRead=()=>{
    const newArray = lettersarray.map(e=>{
        if(e.id === id){
         e.isRead=true
         return e
        }
        return e
      })
     setLetters(newArray)
     console.log(newArray);
    }

    
    const moveToIncoming=()=>{
      const newArray = lettersarray.map(e=>{
        if(e.id === id){
          e.isRead=false  
          return e
        }
          return e
      })
      setLetters(newArray)
    }

  return (
    <li key={id} className='email-let'>


         <div className='box'>
         {isRead === false? 
         <img data-tip="add to read" src={mailSVG} alt='add to read' width={'20px'} onClick={moveToRead} /> 
         : 
         <img data-tip="add to incoming" src={mailSVG} alt='add to incoming' width={'20px'} onClick={moveToIncoming} /> 
         }
         <p>{sender}</p>
         </div>


        <p>{content}</p>
        <p>{emailDate}</p>

        <ReactTooltip />
    </li>
    
  )
}
