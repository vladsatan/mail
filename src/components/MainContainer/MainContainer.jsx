import IncomingEmails from '../IncomingEmails/IncomingEmails'
import ReadEmails from '../ReadEmails/ReadEmails'
import { useState, useEffect } from 'react'
import Search from '../Search/Search'
import './MainContainer.css'


export default function MainContainer(props){

    const {sectionSelection} = props

    const [letters, setLetters] = useState([])
    const [readArray, setReadArray] = useState([])
    const [incomingArray, setIncomingArray] = useState([])

    useEffect(()=>{fetch('../../../emailes.json').then((response) => response.json()).then((data) =>{setLetters(data)})},[])
    
    useEffect(()=>{
        if(letters.length>1){
            const array = letters.filter(e=>{return e.isRead === true})
            const array2 = letters.filter(e=>{return e.isRead === false})
            setReadArray(array)
            setIncomingArray(array2)
         }
    }, [letters])


    return(
        <div className='MainContainer'>
            <Search />
            <div className='letters'>
              {sectionSelection === 'incoming'? <IncomingEmails letters={incomingArray}/> : <ReadEmails letters={readArray} />}
            </div>
        </div>
    )
}

