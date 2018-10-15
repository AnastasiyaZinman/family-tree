import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class UserBox extends Component {

    render() {
   return (

    <div>
  <div className="text-center">{this.props.parent["name"]}
  <img className="img_av" src={this.props.parent["imgUrl"]} alt={this.props.parent["name"]} />
  </div>
  <div className="childrenBox">
 {this.props.children.map((item,i) => {
    return(<div className="m-w-button" key={item.id}>
    <img className="img_av" src={item.imgUrl} alt={item.name} />
    {item.name}
    </div>
    )}
    )}
    </div>
    </div>)
}
}
export default UserBox;
