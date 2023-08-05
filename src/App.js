import { useState } from 'react';
import './App.css';
import FirstLayer from './components/FirstLayer';
import SecondLayer from './components/SecondLayer';
import ThirdLayer from './components/ThirdLayer';

function App() {
  const [ isActive, setIsActive ] = useState(true);

  const onClickButton = () => {
    const audioElement =  document.getElementById('audio');
    audioElement.volume = 0.4;
    audioElement.play();

    setIsActive(!isActive)
  }

  return (
    <>
      <header className={isActive ? "active" : ""}>
        <h1>Welcome To Our Invitation, Best Regards. Claudia & Richard</h1>
        <button className={isActive ? "" : "active"} onClick={onClickButton}>Open</button>
      </header>
      <div className="App">
        <FirstLayer />
        {/* <SecondLayer /> */}
        {/* <ThirdLayer /> */}
      </div>
      <footer>Made by <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">NK Digital Desain</a></footer>
    </>
    
  );
}

export default App;
