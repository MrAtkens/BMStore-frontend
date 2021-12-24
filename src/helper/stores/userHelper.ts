import { USER_ID } from 'constant/storageNames';

function generateGuid() {
	let d = new Date().getTime();//Timestamp
	let d2 = (performance && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		let r = Math.random() * 16;//random number between 0 and 16
		if(d > 0){//Use timestamp until depleted
			r = (d + r)%16 | 0;
			d = Math.floor(d/16);
		} else {//Use microseconds since page-load if supported
			r = (d2 + r)%16 | 0;
			d2 = Math.floor(d2/16);
		}
		return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
	});
}

export function getUserId() {
	const userId = localStorage.getItem(USER_ID);
	if (userId || userId !== null) {
		return JSON.parse(userId);
	} else {
		let guid = generateGuid()
		localStorage.setItem(USER_ID, JSON.stringify(guid));
		console.log(guid)
		return guid;
	}
}
