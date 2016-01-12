export interface IUser {

	username: string;

	password: string;

	authorized: boolean;

	fromObject(userInfo): void;
};
