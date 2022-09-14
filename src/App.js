import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import React, {useState,useEffect} from 'react'
import MainContainer from './components/MainContainer/MainContainer';
import LoginPage from './components/LoginPage/LoginPage';
import { BrowserRouter as Router } from 'react-router-dom';
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";
polyfillCountryFlagEmojis();



export default function App() {

  const [isLogin, setIsLogin] = useState(false)
  const [user, setUser] = useState('')
  const [sectionSelection, setSectionSelection] = useState('incoming')
  const [incomingLength, setIncomingLength] = useState('')
  const [readLength, setReadLength] = useState('')

  const status = localStorage.getItem('isLogin')

useEffect(()=>{
  if(status){
    setIsLogin(status)
  }
},[isLogin])
  

  return (
<Router>
    <div className="App">
  
    {isLogin? (
      <>
      <Header user={user} setIsLogin={setIsLogin} />
      <div className='container'>
      <Menu setSectionSelection={setSectionSelection} incomingLength={incomingLength} readLength={readLength} />
      <MainContainer sectionSelection={sectionSelection} setIncomingLength={setIncomingLength} setReadLength={setReadLength} />
      </div>
      </>
    
    ):
    <LoginPage isLogin={isLogin} setIsLogin={setIsLogin} setUser={setUser} />
    }
    
    </div>
</Router>
  );
}


