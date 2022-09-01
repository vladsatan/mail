import React from 'react'
import Email from '../Email/Email'

export default function ReadEmails(props) {
 
    const {letters,lettersarray,setLetters} = props


  return (
    <div>
         <ul>
            {letters.map(email=>{
                let {id,content,isRead,sender,emailDate} = email
               return <Email key={id} id={id} content={content} isRead={isRead} sender={sender} emailDate={emailDate} lettersarray={lettersarray} setLetters={setLetters}  />
                })}
            </ul>
    </div>
  )
}
