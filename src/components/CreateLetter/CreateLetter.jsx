import React from 'react'
import "./CreateLetter.css"
import { useState } from 'react'
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";
polyfillCountryFlagEmojis();

export default function CreateLetter(props) {
     
     const {array,setLetters} = props;
     const [recipient, setRecipient] = useState('')
     const [title, setTitle] = useState('')
     const [message, setMessage] = useState('')

     const setObject =(e)=>{
    if(recipient === "" || title === "" ||  message === ""){
      alert('Заполните все поля')
      return
    }
        array.push()
        const newArray = array.concat([{id: Math.random() ,content: title, isRead: false, sender: recipient, emailDate: new Date().toLocaleString(), message: message}])
        console.log(newArray);
        setLetters(newArray)
        localStorage.removeItem('emails')
        localStorage.setItem('emails', JSON.stringify(newArray))
    }

  return (
    <div className='CreateLetter'>
       <div className='CreateLetter-header'>New massage</div>
       <form>
       <input type="text" placeholder='Recipient' className='inputst' onChange={(event)=>{setRecipient(event.target.value)}} />
       <input type="text" placeholder='Title' className='inputst' onChange={(event)=>{setTitle(event.target.value)}} />
       <textarea name="textarea" id="textarea" placeholder='Wright a letter...' onChange={(event)=>{setMessage(event.target.value)}}></textarea>
       <button className='CreateLetter-button' onClick={setObject}>Send</button>
       </form>
    </div>
  )
}
