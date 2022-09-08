import React from 'react'
import "./CreateLetter.css"

export default function CreateLetter() {
  return (
    <div className='CreateLetter'>
       <div className='CreateLetter-header'>New massage</div>
       <form>
       <input type="text" placeholder='Recipient' className='inputst' />
       <input type="text" placeholder='Title' className='inputst' />
       <textarea name="textarea" id="textarea" placeholder='Wright a letter...'></textarea>
       <button className='CreateLetter-button'>Send</button>
       </form>
    </div>
  )
}
