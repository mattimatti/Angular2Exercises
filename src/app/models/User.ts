export class User {

	username: string;

	id: number;

	password: string;

	authorized: boolean = false;

	constructor(userInfo: any) {
		this.authorized = false;
		this.fromObject(userInfo);
	}

	fromObject(userInfo: any) {
		this.username = userInfo.username;
		this.password = userInfo.password;
	}
}
