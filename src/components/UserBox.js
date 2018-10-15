import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class UserBox extends Component {

    render() {
   return (

    <div className="userBox">
  
  <img className="img_av" src={this.props.parent["imgUrl"]} alt={this.props.parent["name"]} />
  <div className="t-font p-font text-center">{this.props.parent["name"]}
  </div>
  <div className="childrenBox">
 {this.props.children.map((item,i) => {
    return(<div className="m-w-button" key={item.id}>
    <img className="img_av" src={item.imgUrl} alt={item.name} /><br/>
    <span className="t-font">{item.name}</span>
    </div>
    )}
    )}
    </div>
    </div>)
}
}
export default UserBox;
