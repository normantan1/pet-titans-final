

userList = [
	{
		id: 1,
		name: "Norman",
		email: "hack@brain.wtv",
		password: "encryptedPassword",
        currExp: 170,
        level: 3,
        pics: 'https://picsum.photos/200/300'
	},
	{
		id: 2,
		name: "Helin",
		email: "iam@canada.here",
		password: "encryptedPassword",
        level: 5,
        currExp: 250,
        pics: 'https://picsum.photos/id/237/200/300'
	},
    {
		id: 2,
		name: "Wei hong",
		email: "iam@canada.here",
		password: "encryptedPassword",
        level: 5,
        currExp: 250,
        pics: 'https://picsum.photos/200/300?grayscale'
	},
    {
		id: 2,
		name: "Wei hong",
		email: "iam@canada.here",
		password: "encryptedPassword",
        level: 5,
        currExp: 250,
        pics: 'https://picsum.photos/200/300?grayscale'
	},
    {
		id: 2,
		name: "Wei hong",
		email: "iam@canada.here",
		password: "encryptedPassword",
        level: 5,
        currExp: 250,
        pics: 'https://picsum.photos/200/300?grayscale'
	},
    {
		id: 2,
		name: "Wei hong",
		email: "iam@canada.here",
		password: "encryptedPassword",
        level: 5,
        currExp: 250,
        pics: 'https://picsum.photos/200/300?grayscale'
	},
    {
		id: 2,
		name: "Wei hong",
		email: "iam@canada.here",
		password: "encryptedPassword",
        level: 5,
        currExp: 250,
        pics: 'https://picsum.photos/200/300?grayscale'
	},
    {
		id: 2,
		name: "Wei hong",
		email: "iam@canada.here",
		password: "encryptedPassword",
        level: 5,
        currExp: 250,
        pics: 'https://picsum.photos/200/300?grayscale'
	},
    {
		id: 2,
		name: "Wei hong",
		email: "iam@canada.here",
		password: "encryptedPassword",
        level: 5,
        currExp: 250,
        pics: 'https://picsum.photos/200/300?grayscale'
	},
    {
		id: 2,
		name: "Wei hong",
		email: "iam@canada.here",
		password: "encryptedPassword",
        level: 5,
        currExp: 250,
        pics: 'https://picsum.photos/200/300?grayscale'
	},
    {
		id: 2,
		name: "Wei hong",
		email: "iam@canada.here",
		password: "encryptedPassword",
        level: 5,
        currExp: 250,
        pics: 'https://picsum.photos/200/300?grayscale'
	},
    {
		id: 2,
		name: "Wei hong",
		email: "iam@canada.here",
		password: "encryptedPassword",
        level: 5,
        currExp: 250,
        pics: 'https://picsum.photos/200/300?grayscale'
	},
    {
		id: 2,
		name: "Wei hong",
		email: "iam@canada.here",
		password: "encryptedPassword",
        level: 5,
        currExp: 250,
        pics: 'https://picsum.photos/200/300?grayscale'
	},
    {
		id: 2,
		name: "Wei hong",
		email: "iam@canada.here",
		password: "encryptedPassword",
        level: 5,
        currExp: 250,
        pics: 'https://picsum.photos/200/300?grayscale'
	},
    {
		id: 2,
		name: "Wei hong",
		email: "iam@canada.here",
		password: "encryptedPassword",
        level: 5,
        currExp: 250,
        pics: 'https://picsum.photos/200/300?grayscale'
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

