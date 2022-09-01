import IncomingEmails from '../IncomingEmails/IncomingEmails'
import ReadEmails from '../ReadEmails/ReadEmails'
import { useState, useEffect } from 'react'
import Search from '../Search/Search'
import './MainContainer.css'


export default function MainContainer(props){

    const {sectionSelection, setIncomingLength, setReadLength} = props

    const [letters, setLetters] = useState([])
    const array = letters.filter(e=>{return e?.isRead === true})
    const array2 = letters.filter(e=>{return e?.isRead === false})

    useEffect(()=>{fetch('../../../emailes.json').then((response) => response.json()).then((data) =>{setLetters(data)})},[])
    
    useEffect(()=>{
            setIncomingLength(array2.length)
            setReadLength(array.length)
   
    }, [letters])
 
    console.log(letters);
    return(
        <div className='MainContainer'>
            <Search />
            <div className='letters'>
              {sectionSelection === 'incoming'? <IncomingEmails letters={array2} lettersarray={letters} setLetters={setLetters}  /> : <ReadEmails letters={array} lettersarray={letters} setLetters={setLetters} />}
            </div>
        </div>
    )
}

