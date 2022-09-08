import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import React, {useState, useEffect} from 'react'
import MainContainer from './components/MainContainer/MainContainer';
import { BrowserRouter as Router } from 'react-router-dom';



function App() {

  const [isLogin, setIsLogin] = useState(true)
  const [sectionSelection, setSectionSelection] = useState('incoming')
  const [incomingLength, setIncomingLength] = useState('')
  const [readLength, setReadLength] = useState('')

  return (
<Router>
    <div className="App">
    <Header isLogin={isLogin} setIsLogin={setIsLogin} />
    {isLogin? (


      <div className='container'>
      <Menu setSectionSelection={setSectionSelection} incomingLength={incomingLength} readLength={readLength} />
      <MainContainer sectionSelection={sectionSelection} setIncomingLength={setIncomingLength} setReadLength={setReadLength} />
      </div>
    
    
    ):null}
    
    </div>
</Router>
  );
}

export default App;
