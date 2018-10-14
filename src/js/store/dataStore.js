import { observable, action, computed } from "mobx";
import { userInfo } from "os";

class DataStore {
	// @observable userInfo = [
	// 	{ flavor: 'Chocolate', color: 'black', id: 0, imgPath: "http://icons.iconarchive.com/icons/icons-land/3d-food/256/IceCream-Cone-icon.png" }];
	// @observable filterString = "";
	
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