import React, { Component } from 'react';
import {ProfilePic} from './components/profilePic'
import {Info} from './components/info';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="parent">
          <div className="App">
        <div className="container">
              <div>
              <ProfilePic/>
              </div>
              <div>
                <Info/>
              </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
