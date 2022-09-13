import React from 'react'
import "./SearchContainer.css"
import Email from '../Email/Email'

export default function SearchContainer(props) {

   const {searchArray} = props

  return (
    <div>
        <ul>
        {searchArray.map(email=>{
            let {id,content,isRead,sender,emailDate} = email
            return <Email key={id} id={id} content={content} isRead={isRead} sender={sender} emailDate={emailDate} lettersarray={searchArray} />
        })}
        </ul>
    </div>
  )
}
