import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class UserBox extends Component {

    render() {
        return (
<div>
{this.props.data.map((item,i) => {
    return(<div className="m-w-button" key={item.id}>
    <img src={item.imgUrl} alt={item.name} />
    {item.name}
    </div>
    )}
    )}
    </div>)
}
}
export default UserBox;
