import React, { Component } from 'react';
// import { observer, inject } from 'mobx-react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
// import SearchForm from './js/search';
// import UserBoxs from './js/userBox';
// import { observable, action, computed } from '../node_modules/mobx';
// @inject("store")
// @observer 
class App extends Component {
    addUser(){
       axios.post('http://localhost:5000/add_user', {name:"John Gold"}, {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    )
    .then(response => {
      console.log("response from DB",response);
    })
    .catch(function (error) {
      alert("Sorry, something wrong. New client haven't added.");
      console.log(error);
    });
  }
  getUsers() {
    axios.get('http://localhost:5001/getUsers')
    .then(result => {
      console.log(result.data);
      // this.setState({ clients: result.data })
    })
  }

  render() {
    return (
      <div className="App">
        <div>Some text</div>
        
        {/* <SearchForm /> */}
        {/* <UserBoxs /> */}
        <button onClick={this.getUsers}>Add</button>
         
        
      </div>
    );
  }
}

export default App;
