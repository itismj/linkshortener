import logo from './logo.svg';
import './App.css';
import InputShortener from './inputShortener';
import BackgroundAnimation from './BackgroundAnimation';
import LinkResult from './LinkResult';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState("")

  return (
    <div className='container'>
      <InputShortener setInputValue={setInputValue} />
      <BackgroundAnimation />
      <LinkResult inputValue={inputValue}/>
    </div>
  );
}

export default App;
