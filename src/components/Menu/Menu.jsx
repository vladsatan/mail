import './Menu.css'
import {NavLink} from 'react-router-dom';

export default function Menu(props) {

const {incomingLength,readLength} = props

    return(

        <div className='menuContainer'>
            <NavLink to='/createletter' className='writeLetter'>Write a letter</NavLink>
            <NavLink to='/' className='menuPoint'>
                Incoming
            <div className='numberOfLetters'>{incomingLength}</div>
                </NavLink>
            <NavLink to='/read' className='menuPoint'>
                Read
                <div className='numberOfLetters'>{readLength}</div>
                </NavLink>
            <NavLink to='/tagged' className='menuPoint'>Tagged</NavLink>
            <NavLink to='/drafts' className='menuPoint'>Drafts</NavLink>
            <NavLink to='/spam' className='menuPoint'>Spam</NavLink>
            
        </div>
    )
}
