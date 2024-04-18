import logo from './logo.svg';
import './App.css';

function App() {
  const myVariable = process.env.REACT_APP_MY_VARIABLE;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My Environment Variable: {myVariable}
        </p>
      </header>
    </div>
  );
}

export default App;
