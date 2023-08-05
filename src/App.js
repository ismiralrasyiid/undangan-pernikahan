import './App.css';
import FirstLayer from './components/FirstLayer';
import SecondLayer from './components/SecondLayer';
import ThirdLayer from './components/ThirdLayer';

function App() {
  return (
    <>
      <header>
        <h1>Welcome To Our Invitation, Best Regards. Claudia & Richard</h1>
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
