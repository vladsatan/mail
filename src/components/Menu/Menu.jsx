import './Menu.css'

export default function Menu() {
    return(
        <div className='menuContainer'>
            <button className='writeLetter'>Write a letter</button>
            <div className='menuPoint'>Incoming</div>
            <div className='menuPoint'>Read</div>
            <div className='menuPoint'>Tagged</div>
            <div className='menuPoint'>Drafts</div>
            <div className='menuPoint'>Spam</div>
        </div>
    )
}
