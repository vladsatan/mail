import './Menu.css'

export default function Menu(props) {

const {setSectionSelection} = props

    return(
        <div className='menuContainer'>
            <button className='writeLetter'>Write a letter</button>
            <div className='menuPoint' onClick={()=>{setSectionSelection('incoming')}}>Incoming</div>
            <div className='menuPoint' onClick={()=>{setSectionSelection('read')}}>Read</div>
            <div className='menuPoint'>Tagged</div>
            <div className='menuPoint'>Drafts</div>
            <div className='menuPoint'>Spam</div>
        </div>
    )
}
