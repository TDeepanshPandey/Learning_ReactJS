import {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name: 'Deepansh Pandey',
      company: 'Start Your Masters',
    }
  }
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> Hi {this.state.name}! </p>
          <button 
            onClick={() => {
              this.setState({name:'TDP'});
          }}> Change Name </button>
          <a
            className="App-link"
            href="https://deepanshpandey.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit My Website
          </a>
        </header>
      </div>
    );
  }  
}

export default App;
