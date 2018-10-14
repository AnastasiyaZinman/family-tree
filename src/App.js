import React, { Component } from 'react';
// import { observer, inject } from 'mobx-react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import SearchForm from './js/search';
// import UserBoxs from './js/userBox';

// import { observable, action, computed } from '../node_modules/mobx';

// @inject("store")
// @observer 
class App extends Component {
  
  fetchAllUser(){
      console.log("here");
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div>Some text</div>
        {/* <SearchForm /> */}
        {/* <UserBoxs /> */}
         
        </header>
      </div>
    );
  }
}

export default App;
