import { useLocation } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const { hash } = useLocation();

  console.log("hash", hash);
  const hashValue = (hash && hash.replace("#", "")) || undefined;

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
          Learn React {hashValue}
        </a>
      </header>
    </div>
  );
}

export default App;
