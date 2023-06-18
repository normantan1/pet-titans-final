userList = [
	{
		id: 1,
		name: "Brain",
		email: "hack@brain.wtv",
		password: "encryptedPassword",
	},
	{
		id: 2,
		name: "Drake",
		email: "iam@canada.here",
		password: "encryptedPassword",
	}
]

const populateApi = (data, message, devMessage) => ({
	data: data,
	message: message,
	devMessage: devMessage,
})

// example fake api
class UserAPI {
	getUserList() {
		return Promise.resolve(populateApi(userList, "success", "getUserList success"))
	}
	getUser(id) {
		for(const user in userList) {
			if (user.id == id) return Promise.resolve(populateApi(user, "success", "getUser success"));
		}
		return Promise.reject(populateApi({},"failure","id not found"));
	}
	createUser({ name, email, password }) {
		return Promise.resolve(populateApi({}, "success", "createUser success"));
	}
	updateUser({ id, name, email, password }) {
		for(const user in userList)
			if(user.id == id)
				return Promise.resolve(populateApi(user, "success", "updateUser success"));
	}
	deleteUser(id) {
		for(const user in userList) if(user.id == id) return Promise.resolve(populateApi({}, "success", "deleteUser success"));
		return Promise.reject(populateApi({}, "failure", "deleteUser fail"));
	}
}

