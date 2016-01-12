import {Injectable} from 'angular2/core';
import {User} from '../models/User';
import {Http, Headers} from 'angular2/http';


// http://blog.thoughtram.io/angular/2015/09/17/resolve-service-dependencies-in-angular-2.html

@Injectable()
export class AuthService {


	/**
	 * The user 
	 * 
	 * @type {User}
	 */
	identity: User;


	/**
	 * [constructor description]
	 */
	constructor(public http: Http) {
		//
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




	authenticate(data) {
		var username = data.credentials.username;
		var password = data.credentials.password;

		var creds = "username=" + username + "&password=" + password;

		var headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded');

		this.http.post('http://localhost:3001/sessions/create', creds, {
			headers: headers
		})

			// map the response
			.map(res => res.json())

			// subscribe to the http
			.subscribe((data) => {
				this.saveJwt(data.id_token)
			}, (err) => {
				this.logError(err)
			}, () => { console.log('Authentication Complete') });

	}

	saveJwt(jwt) {
		if (jwt) {
			localStorage.setItem('id_token', jwt)
		}
	}


	logError(err) {
		console.error('There was an error: ' + err);
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
