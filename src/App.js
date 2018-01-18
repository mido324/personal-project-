import React, { Component } from 'react';

import './App.css';
import Item from './Components/Articles/Item'
import Header from './Components/Header/Header' 

class App extends Component {
  constructor() {
    super() 
    

  }
  render() {

    return (
      <div className="App">
      
       <Header />
      
      
      <Item />

      </div>
    );
  }
}

export default App;
