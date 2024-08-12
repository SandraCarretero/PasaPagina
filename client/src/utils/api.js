import { HEADERS } from '../constants/headers';
import { METHODS } from '../constants/methods';
import { fetchData } from './fetchData';

export const getData = async url => {
	try {
		const data = await fetchData(url, { method: METHODS.GET });
		return data;
	} catch (error) {
		console.error('Error in getData:', error);
		throw error; // Re-lanza el error para que el componente pueda manejarlo
	}
};

export const postData = async (url, body) => {
	const data = await fetchData(url, {
		method: METHODS.POST,
		body: JSON.stringify(body),
		headers: HEADERS
	});
	return data;
};

export const patchData = async (url, body) => {
	const data = await fetchData(url, {
		method: METHODS.PATCH,
		body: JSON.stringify(body),
		headers: HEADERS
	});
	return data;
};

export const deleteData = async url => {
	const data = await fetchData(url, {
		method: METHODS.DELETE,
		headers: HEADERS
	});
	return data;
};
