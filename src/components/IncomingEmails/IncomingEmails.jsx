import React from 'react'
import Email from '../Email/Email'


export default function IncomingEmails(props) {

  const {letters} = props


    return (
        <div>
           <ul>
            {letters.map(email=>{
                let {id,content,isRead,sender,emailDate} = email
               return <Email key={id} id={id} content={content} isRead={isRead} sender={sender} emailDate={emailDate} />
                })}
            </ul>
         </div>
      ) 
}
