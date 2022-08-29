import React, {useState} from 'react'
import Search from '../Search/Search'
import './MainContainer.css'

export default function MainContainer(){

    return(
        <div className='MainContainer'>
            <Search />
            <div className='letters'></div>
        </div>
    )
}