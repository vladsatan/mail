import './Menu.css'

export default function Menu(props) {

const {setSectionSelection,incomingLength,readLength} = props

    return(
        <div className='menuContainer'>
            <button className='writeLetter'>Write a letter</button>
            <div className='menuPoint' onClick={()=>{setSectionSelection('incoming')}}>
                Incoming
            <div className='numberOfLetters'>{incomingLength}</div>
                </div>
            <div className='menuPoint' onClick={()=>{setSectionSelection('read')}}>
                Read
                <div className='numberOfLetters'>{readLength}</div>
                </div>
            <div className='menuPoint'>Tagged</div>
            <div className='menuPoint'>Drafts</div>
            <div className='menuPoint'>Spam</div>
        </div>
    )
}
