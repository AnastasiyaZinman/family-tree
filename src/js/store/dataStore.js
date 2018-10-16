import { observable, action, computed } from "mobx";

class DataStore {
	@observable users = [];
	@observable  children: [];
    @observable  parent: "";
	
	// @computed get iceCreamsFilteredCount() {
	// 	return this.filterIceCreams.length;
	// }
	// @action closeUpdateModal = () => {
	// 	this.showComponent = false;
	// }
	
	// findIceCreamIndexById = (id) => {
	// 	let index;
	// 	 this.iceCreams.forEach((iceCream, i) => {
	// 		if (iceCream.id === id)
	// 		return index=i
	// 	 })
	// 	return index
	// }
	// @action updateIceCreamInfo = (newData) => {
	// 	let index = this.findIceCreamIndexById(this.currentId);
	// 	console.log("newdata",newData);
	// 	this.changeIceCreamProperties(index,newData);
	// 	console.log("UPDATED",this.iceCreams[index])
	// }
	
}

const store = new DataStore();
window.store = store;
export default store;