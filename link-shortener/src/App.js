import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1> URL Shortener </h1>

      <p>Too lengthy and unprofessional URL to share? Use this website to make it shorter and catchy</p>

      <input type="text" id="longurl">

      <button id="shorten">Shorten</button>
      <input type="text" id="shorturl">
      <button id="copy">copy</button>
    </div>
  );
}

export default App;
