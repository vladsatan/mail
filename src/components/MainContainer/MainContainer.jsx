import IncomingEmails from '../IncomingEmails/IncomingEmails'
import ReadEmails from '../ReadEmails/ReadEmails'
import CreateLetter from '../CreateLetter/CreateLetter'
import { useState, useEffect } from 'react'
import Search from '../Search/Search'
import './MainContainer.css'
import {Route, Routes} from 'react-router-dom';
  




export default function MainContainer(props){

    const {setIncomingLength, setReadLength} = props

    const [letters, setLetters] = useState([])
    const array = letters.filter(e=>{return e?.isRead === true})
    const array2 = letters.filter(e=>{return e?.isRead === false})   

    useEffect(()=>{fetch('../../../emailes.json').then((response) => response.json()).then((data) => setLetters(data))},[])



   useEffect(()=>{
            setIncomingLength(array2.length)
            setReadLength(array.length)
   }, [letters])
    
    return(

        <div className='MainContainer'>
            <Search />
            <div className='letters'>
                <Routes>
                    <Route path="/" element={<IncomingEmails letters={array2} lettersarray={letters} setLetters={setLetters} />} />
                    <Route path="/read" element={<ReadEmails letters={array} lettersarray={letters} setLetters={setLetters} />} />
                    <Route path='/createletter' element={<CreateLetter />} />
                </Routes>
            </div>
        </div>
    )
}

