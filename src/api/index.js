import axios from 'axios';

function apiTest() {
	try {
		return axios.get(`https://jsonplaceholder.typicode.com/todos/1`);
	} catch (err) {
		console.log(err);
	}
}

export { apiTest };
