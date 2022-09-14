import './Search.css'
import { useState } from 'react'
import {NavLink} from 'react-router-dom';

export default function Search(props){

    const [search, setSearch] = useState('')
    const {letters, setSearchArray} = props

    const getSearch = () =>{
      const newArray = letters.filter(e =>{return (e.content.toLowerCase()).includes(search.toLowerCase()) || (e.sender.toLowerCase()).includes(search.toLowerCase())})
      setSearchArray(newArray)
    }

   return(
      <div className='search-container'>
        <input className='search-input' placeholder={'Search a letter...'} onChange={(event) => setSearch(event.target.value)} />
        <NavLink to='/search' className='search-button' onClick={getSearch}>Search</NavLink>
      </div>
   )
}