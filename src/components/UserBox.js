import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
@inject("store")
@observer
class UserBox extends Component {
    addChild =(id)=>{
        console.log("id",id);
        this.props.store.addChildBox=true;
        this.props.store.currentIdForAddChild=id;
    }
    
    render() {
        return (

            <div className="userBox">
                <img className="img_av" src={this.props.store.parent["imgUrl"]} alt={this.props.store.parent["name"]} />
                <div className="t-font p-font text-center">{this.props.store.parent["name"]} </div>
                <button type="button" className="btn btn-success btn-round" onClick={() => { this.addChild(this.props.store.parent.id)}} id={this.props.store.parent.id}>+</button> 
               
                <div className="childrenBox">
                    {this.props.store.children.map((item, i) => {
                        return (<div className="m-w-button" key={item.id}>
                            <img className="img_av" src={item.imgUrl} alt={item.name} /><br />
                            <span className="t-font">{item.name}</span>
                            <div><button type="button" id={item.id} onClick={() => { this.addChild(item.id)}} className="btn btn-success btn-round">+</button></div>
                        </div>
                        )
                    }
                    )}
                </div>
            </div>)
    }
}
export default UserBox;
