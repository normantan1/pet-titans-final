// user functions

import api from "../api"

export const createUser = async ({ name, email, password }) => {
	try {
		const res = await api.users.createUser({ name, email, password });
		// TODO check if environ is dev, then print
		console.log(res.devMessage);
		// TODO flash res.message to app screen
	} catch(err) {
		throw err;
	}
}
