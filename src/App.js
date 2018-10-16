import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
// import SearchForm from './js/search';
import UserBox from './components/UserBox';
import { observable, action, computed } from '../node_modules/mobx';
@inject("store")
@observer
class App extends Component {
  constructor() {
    super();
    this.state = {
      // users: [],
      selectedOption: 1,
    }
  }
  generateOptions() {
    return this.props.store.users.map((item, i) => {
      let optionValue = item.name;
      return (<option
        value={item.id}
        key={i}>{optionValue}
      </option>)   //the power of JSX!

    })
  }


  updateSelectedOption = (e) => {
    console.log("selected value", e.target.value);
    this.setState({ selectedOption: e.target.value })
  }

  componentDidMount() {
    this.getUsers();
  }
  getUsers = () => {
    axios.get('http://localhost:5001/getUsers')
      .then(result => {
        console.log(result.data);
        this.props.store.users = result.data;
        // this.setState({ users: result.data })
      })
  }
  getChildren = () => {
    let userId = this.state.selectedOption;
    console.log("userId", userId);
    axios.get(`http://localhost:5001/getChildren/${userId}`)
      .then(result => {
        console.log(result.data);
        this.setState({
          parent: result.data,
          children: result.data["Children"] })
          this.props.store.parent=result.data;
          this.props.store.children=result.data["Children"]     
      })
  }

  render() {
    return (
      <div className="App">
        <div className="title t-font">Family Tree</div>

        {/* <SearchForm /> */}
        {/* <UserBoxs /> */}
        <select onChange={this.updateSelectedOption}>
          {this.generateOptions()}
        </select>

        <button type="button" className="ml-5 btn btn-primary btn-sm" onClick={this.getChildren}>Find childs</button>
        {(this.state.parent ? <UserBox parent={this.state.parent} children={this.state.children} /> : null)}
      </div>
    );
  }
}

export default App;
