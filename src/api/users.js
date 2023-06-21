userList = [
	{
		id: 1,
		name: "Norman",
		email: "hack@brain.wtv",
		password: "encryptedPassword",
        currExp: 170,
        level: 2,
        pics: 'https://picsum.photos/200/300'
	},
	{
		id: 2,
		name: "Helin",
		email: "iam@canada.here",
		password: "encryptedPassword",
		level: 5,
		currExp: 250,
		pics: 'https://picsum.photos/id/237/200/300',
		credits: 500,

	},
	{
		id: 3,
		name: "Wen Wen",
		email: "iamwenwen@gmail.com",
		password: "encryptedPassword",
		level: 1,
		currExp: 40,
		pics: 'https://picsum.photos/200/300?grayscale',
		credits: 500,

	},
	{
		id: 4,
		name: "Belinda",
		email: "iambelinda@gmail.com",
		password: "encryptedPassword",
		level: 2,
		currExp: 80,
		pics: 'https://picsum.photos/200/300?grayscale',
		credits: 500,

	},
	{
		id: 5,
		name: "Reaya",
		email: "iamreaya@mail.com",
		password: "encryptedPassword",
		level: 2,
		currExp: 150,
		pics: 'https://picsum.photos/200/300?grayscale',
		credits: 500,

	},
	{
		id: 6,
		name: "Wei hong",
		email: "iam@canada.here",
		password: "encryptedPassword",
		level: 3,
		currExp: 250,
		pics: 'https://picsum.photos/200/300?grayscale',
		credits: 500,

	},
	{
		id: 7,
		name: "Joshua",
		email: "iamjoshua@here.com",
		password: "encryptedPassword",
		level: 3,
		currExp: 230,
		pics: 'https://picsum.photos/200/300?grayscale',
		credits: 500,

	},
	{
		id: 8,
		name: "Wei hong",
		email: "iam@canada.here",
		password: "encryptedPassword",
		level: 5,
		currExp: 250,
		pics: 'https://picsum.photos/200/300?grayscale',
		credits: 500,

	},
	{
		id: 9,
		name: "Mrin",
		email: "mrin@brain.com",
		password: "encryptedPassword",
		level: 1,
		currExp: 130,
		pics: 'https://picsum.photos/200/300?grayscale',
		credits: 500,

	},
	{
		id: 10,
		name: "Brandon",
		email: "brandon@gmail.com",
		password: "encryptedPassword",
		level: 4,
		currExp: 340,
		pics: 'https://picsum.photos/200/300?grayscale',
		credits: 500,

	},
	{
		id: 11,
		name: "Alex",
		email: "alextan@gmail.com",
		password: "encryptedPassword",
		level: 5,
		currExp: 420,
		pics: 'https://picsum.photos/200/300?grayscale',
		credits: 500,

	},
]

export const currentUserId = 1;

export const getUserList = () => userList;

export const getUser = (i) => {
	for (const user in userList) {
		if (user.id == i) return user
	}
	return userList[0]
}
