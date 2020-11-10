import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID lkvWUmwPatLgVrGC-W6TMckYp0klLmKuaSmE7VF9r7c',
	},
});
