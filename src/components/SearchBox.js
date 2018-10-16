import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import UserBox from '../components/UserBox';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
@inject("store")
@observer
class SearchOptions extends Component {
    constructor() {
        super();
        this.state = {
         
        }
      }
    generateOptions() {
        // this.props.store.selectedOption=this.props.store.users[0].id;
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
        // this.setState({ selectedOption: e.target.value })
        this.props.store.selectedOption =e.target.value;
    }

    render() {
        return (
            <div>
            <select onChange={this.updateSelectedOption}>
                {this.generateOptions()}
            </select>
              <button type="button" className="ml-5 btn btn-primary btn-sm" onClick={this.props.store.getChildren}>Find childs</button>
              {(this.props.store.parent ? <UserBox /> : null)}
            </div>
        )
    }
}
    export default SearchOptions;