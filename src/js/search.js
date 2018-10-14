import React, { Component } from 'react';
import { observable, action } from "mobx";
import { observer, inject } from 'mobx-react';

class UserBox extends Component {
    @observable userInfo = {
        name: "",
        id: 0,
        img:""
    };
    @action inputChange = (e) => {
        this.iceCream[e.target.name] = e.target.value;
    }
    submitForm = (e) => {
        e.preventDefault();
        // this.props.addUser();
        this.props.fetchAllUsers;
    }

    render() {
        
        return (
            <div className="container text-center">
                <input className="text-center" type="button" onClick={this.submitForm} value="Add newPerson" />
                {/* <input className="text-center" type="button" onClick={this.submitForm} value="Add IceCream" /> */}
            </div>
           );
    }
}
export default UserBox;
