// import logo from './logo.svg';
import './App.css';

function App() {
  const num = Math.floor(Math.random()*10);

  return (
    <div className="App">
      <h1>Hello world</h1>
      <p>Buenas {num}</p>
    </div>
  );
}

export default App;
