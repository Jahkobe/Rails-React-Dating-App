import React, { Component } from 'react';
import Daters from './components/Hello.js';

class App extends Component {
  render() {
    return (
      <div className="App">
         <header>
            <h1>Hello Dating World</h1>
        </header>
        <main>
          <div className="leftdaters">
            <Daters />
          </div>
          <div className="middlearea"></div>
          <div className="rightdaters">
            <Daters />
          </div>
        
        </main>
        
      </div>
    );
  }
}

export default App;