import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action, computed } from "mobx";
import  './childBox.css';
@inject(allStores => ({
    currentId: allStores.store.currentIdForAddChild,
    closeAddBox: allStores.store.closeAddBox,
    updateIceCreamInfo:allStores.store.AddChildToDB
}))
@observer
class AddChild extends Component {
    @observable 
    newUserInfo={
        name: "",
        imgUrl: ""
    }
    @action inputChange = (e) => {
        this.newUserInfo[e.target.name] = e.target.value;
    }

    updateData = ()=>{
console.log('Clicked')
        this.props.updateIceCreamInfo(this.newIceCreamInfo) 
    }

render()
{console.log("current ID", this.props.currentId)
return(
<div className="modal-body">
        <button type="button" className="close" onClick={this.props.closeAddBox}>
            <span aria-hidden="true">&times;</span>
        </button>
        <h5>Add new Child</h5>
        <div className="container">
            <div className="row">
               <div className="col col-w">Name:</div>
                    <div className="col col-w">
                        <input type="text" name="name" onChange={this.inputChange} value={this.newUserInfo.name}  />
                    </div>
                    <div className="w-100"></div>
                    <div className="col col-w">Image:</div>
                    <div className="col col-w">
                        <input type="text" name="imgUrl" onChange={this.inputChange} value={this.newUserInfo.imgUrl} />
                    </div>
            </div>
                <button type="button" className="btn btn-info btn-update" onClick={this.updateData}>Update</button>
                 {/* <input type="button" className="btn btn-info" value="Input Button" /> */}
        </div>
    </div>
)
}
}
export default AddChild;