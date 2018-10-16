import { observable, action, computed } from "mobx";
import axios from 'axios';
class DataStore {
	@observable users = [];
	@observable children=[];
	@observable parent= "";
	@observable  selectedOption= 0;

	// @computed get iceCreamsFilteredCount() {
	// 	return this.filterIceCreams.length;
	// }
	// @action closeUpdateModal = () => {
	// 	this.showComponent = false;
	// }


	@action getChildren = () => {
		let userId = this.selectedOption;
		console.log("userId", userId);
		axios.get(`http://localhost:5001/getChildren/${userId}`)
			.then(result => {
				console.log(result.data);
				this.parent=result.data;
				this.children=result.data["Children"];
				console.log("this children",result.data["Children"]);
		})
	}

}

const store = new DataStore();
window.store = store;
export default store;