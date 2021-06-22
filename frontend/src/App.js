import logo from './logo.svg';
import './App.css';
import PetList from './components/PetList.jsx'
import AddPet from './components/AddPet.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <PetList />
      <AddPet />
    </div>
  );
}

export default App;
