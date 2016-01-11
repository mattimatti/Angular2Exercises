import {Injectable} from 'angular2/core';
import {User} from '../models/User';

@Injectable()
export class AuthService {


	/**
	 * The user
	 * @type {User}
	 */
	identity: User;


	/**
	 * [constructor description]
	 */
	constructor() {
		this.identity = new User({ username: '' });
	}


	/**
	 * [getUser description]
	 * @return {User} [description]
	 */
	getUser(): User {
		return this.identity;
	}


	/**
	 * [logout description]
	 */
	logout() {
		return localStorage.removeItem('identity');
	}


	/**
	 * [isLoggedIn description]
	 */
	isLoggedIn() {
		return localStorage.getItem('identity');
	}


	/**
	 * [login description]
	 * @param  {User} user [description]
	 * @return {any}       [description]
	 */
	login(user: User): any {

		console.log('login', user);

		if (user.username === 'a' && user.password === 'a') {

			this.identity.authorized = true;

			console.log('LOGIN SUCCESS!');

			localStorage.setItem('identity', JSON.stringify(this.identity));

			return Promise.resolve(this.identity);

		}

		console.log('LOGIN FAILS');

		return Promise.reject(new Error('unauthorized'));

	}

}
