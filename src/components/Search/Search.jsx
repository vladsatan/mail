import './Search.css'

export default function Search(){

   return(
      <div className='search-container'>
        <input className='search-input' placeholder={'Search a letter...'} />
        <button className='search-button'>Search</button>
      </div>
   )
}