import React from 'react'
import "./Email.css"
import mailSVG from './mailSVG.svg'
import ReactTooltip from 'react-tooltip';

export default function Email(props) {

    const {id,content, isRead, sender, emailDate} = props

  return (
    <li key={id} className='email-let'>


         <div className='box'>
         {isRead === false? 
         <img data-tip="add to read" src={mailSVG} alt='add to read' width={'20px'} /> 
         : 
         <img data-tip="add to incoming" src={mailSVG} alt='add to incoming' width={'20px'} /> 
         }
         <p>{sender}</p>
         </div>


        <p>{content}</p>
        <p>{emailDate}</p>

        <ReactTooltip />
    </li>
    
  )
}
