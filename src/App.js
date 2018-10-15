import React, { Component } from 'react';
// import { observer, inject } from 'mobx-react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
// import SearchForm from './js/search';
import UserBox from './components/UserBox';
// import { observable, action, computed } from '../node_modules/mobx';
// @inject("store")
// @observer 
class App extends Component {
  constructor() {
    super();
    this.state = {
      users: ["one"],
      selectedOption:1,
      children:[]
    }
  }
  generateOptions() {
    return this.state.users.map((item, i) => {
      let optionValue = item.name;
      return (<option
        value={item.id}
        key={i}>{optionValue}
      </option>)   //the power of JSX!

    })
  }

  //   addUser(){
  //      axios.post('http://localhost:5000/add_user', {name:"John Gold"}, {
  //       headers: {
  //           'Content-Type': 'application/json',
  //       }
  //   }
  //   )
  //   .then(response => {
  //     console.log("response from DB",response);
  //   })
  //   .catch(function (error) {
  //     alert("Sorry, something wrong. New client haven't added.");
  //     console.log(error);
  //   });
  // }

  updateSelectedOption = (e) => {
    console.log("selected value",e.target.value);
    this.setState({selectedOption: e.target.value})
  }

  componentDidMount() {
    this.getUsers();
  }
  getUsers = () => {
    axios.get('http://localhost:5001/getUsers')
      .then(result => {
        console.log(result.data);
        this.setState({ users: result.data })
      })
  }
  getChildren = () => {
    let userId=this.state.selectedOption;
    console.log("userId",userId);
    axios.get(`http://localhost:5001/getChildren/${userId}`)
      .then(result => {
        console.log(result.data);
        this.setState({ children: result.data["Children"] })
      })
  }

  render() {
    return (
      <div className="App">
        <div>Some text</div>

        {/* <SearchForm /> */}
        {/* <UserBoxs /> */}
        <select onChange={this.updateSelectedOption}>
          {this.generateOptions()}
        </select>

        <button onClick={this.getChildren}>Find childs</button>
        {(this.state.children?<UserBox data={this.state.children}/>:null)}
      </div>
    );
  }
}

export default App;
