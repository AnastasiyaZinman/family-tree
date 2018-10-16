import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import SearchOptions from './components/SearchBox';
@inject("store")
@observer
class App extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }
  componentDidMount() {
    this.getUsers();
  }
  getUsers = () => {
    axios.get('http://localhost:5001/getUsers')
      .then(result => {
        console.log(result.data);
        this.props.store.users = result.data;
        this.props.store.selectedOption=result.data[0].id;
        // this.setState({ users: result.data })
      })
  }
  render() {
    return (
      <div className="App">
        <div className="title t-font">Family Tree</div>

        {/* <SearchForm /> */}
        {/* <UserBoxs /> */}
        <SearchOptions />
      </div>
    );
  }
}

export default App;
