import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import React, {useState, useEffect} from 'react'
import MainContainer from './components/MainContainer/MainContainer';



function App() {

  const [isLogin, setIsLogin] = useState(false)
  const [sectionSelection, setSectionSelection] = useState('incoming')

  return (
    <div className="App">
    <Header isLogin={isLogin} setIsLogin={setIsLogin} />
    {isLogin? (


      <div className='container'>
      <Menu setSectionSelection={setSectionSelection} />
      <MainContainer sectionSelection={sectionSelection} />
      </div>
    
    
    ):null}
    
    </div>
  );
}

export default App;
