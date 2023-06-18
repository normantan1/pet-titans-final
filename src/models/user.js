// user functions

import api from "../api"

export const createUser = async ({ name, email, password }) => {
	try {
		const res = api.users.createUser({ name, email, password });
		console.log(res.error);
		// TODO flash res.message to app screen
	} catch(err) {
		throw err;
	}
}
