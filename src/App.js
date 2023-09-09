import logo from './logo.svg';
import './App.css';
import Joblist from './components/Joblist';



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
    <div className="myApp">
      <div className='header'>
        <div className='headerContent'>
          <div className='headingText'>
            <h2>devjobs</h2>
          </div>
          <div>
            <i className="fa-solid fa-bars" style={{color: '#ffffff'}}></i>
          </div>
        </div>
      </div>
      <div className='joblist'>
        <Joblist />
      </div>
    </div>
  );
}