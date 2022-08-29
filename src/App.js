import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import React, {useState} from 'react'
import MainContainer from './components/MainContainer/MainContainer';



function App() {

  const [isLogin, setIsLogin] = useState(false)

  return (
    <div className="App">
    <Header isLogin={isLogin} setIsLogin={setIsLogin} />
    {isLogin? (


      <div className='container'>
      <Menu />
      <MainContainer />
      </div>
    
    
    ):null}
    
    </div>
  );
}

export default App;
