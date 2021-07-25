import axios from 'axios';

const baseURL = "https://hacker-news.firebaseio.com";
const version = "v0";
const apiURL = `${baseURL}/${version}`;
const MAX_STORIES = 30;


const getItems = async () => {
	console.log("/getItems/ running");
	const response = await axios.get(`${apiURL}/topstories.json`);
	let first10Stories = response.data.slice(0, MAX_STORIES);
	console.log("/first10Stories/", first10Stories);
	let results = [];
	for (const id of first10Stories) {
		console.log("fetching single", id);
		let resp = await getItem(id);
		results.push(resp);
	}
	return results;
}


const getComments =  async (ids: Array<number>) => {
	let results = [];
	for (const id of ids) {
		console.log("Fetching comments: ", id);
		let resp = await getItem(id);
		if (resp.type !== 'comment') {
			continue;
		}
		results.push(resp);
	}
	return results;
}


const getItem = async (id: number) => {
	console.log("/getItem/ running");
	const response = await axios.get(`${apiURL}/item/${id}.json`);
	console.log("/getItem/ data:", response.data);
	return response.data;
}


export {
	getItems,
	getComments,
	getItem
};
