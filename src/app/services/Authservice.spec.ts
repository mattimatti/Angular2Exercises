import { it, iit, describe, expect, inject, injectAsync, beforeEachProviders, fakeAsync, tick } from 'angular2/testing';


import {
	Injector,
	provide
} from 'angular2/core';

import {MockBackend, MockConnection} from 'angular2/http/testing';

import {
	ConnectionBackend,
	BaseRequestOptions,
	ResponseOptions,
	Response,
	Http
} from 'angular2/http';

import { AuthService } from './AuthService';
import { User } from '../models/User';


export function main() {

	describe('AuthService', () => {

		let injector: Injector;

		let service: AuthService;
		
		let backend: MockBackend;
		
		let response;


		beforeEach(() => {
			
			injector = Injector.resolveAndCreate([
				
				BaseRequestOptions,
				
				MockBackend,
				
				provide(Http, {
					useFactory: (connectionBackend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
						return new Http(connectionBackend, defaultOptions);
					},
					deps: [
						MockBackend,
						BaseRequestOptions
					]
				}),


				provide(AuthService, {
					useFactory: (http: Http) => {
						return new AuthService(http);
					},
					deps: [
						Http
					]
				})
			]);
			
			backend = injector.get(MockBackend);
			
			service = injector.get(AuthService);

			response = new Response(
				new ResponseOptions({body: 'FOO'})
			);

			service.logout();
			
		});

		afterEach(() => {
			backend.verifyNoPendingRequests();
			service.logout();
		});



		it('User is not Logged In', inject([], () => {
			expect(service.isLoggedIn()).toBeFalsy();
		}));



		it('Logout is undefined', inject([], () => {
			expect(service.logout()).toBeUndefined();
		}));



		it('getUser is undefined', inject([], () => {
			expect(service.getUser()).not.toBeUndefined();
		}));	



		it('Saves Authentication info in Localstorage', inject([], () => {


			let user:User = new User({});
			user.username = 'a';
			user.password = 'a';

			service.saveJwt(user);

			expect(service.isLoggedIn()).toBeTruthy();

			expect(service.getJwt()).toEqual(localStorage.getItem('identity'));

		}));



		it('Successful Login return authenticated User', inject([], () => {

			expect(service.isLoggedIn()).toBeFalsy();

			let testUserIsAuthenticated = (userP) => {
		      	expect(userP.authorized).toBeTruthy();
		    };

			let user:User = new User({});
			user.username = 'a';
			user.password = 'a';

			service.login(user).then(testUserIsAuthenticated);

		}));



		it('Failed Login return a string', inject([], () => {

			let testLoginFails = (errorString) => {
		      	expect(errorString).toEqual('Not authorized');
		    };

			const user = service.getUser();
				user.username = 'a';
				user.password = 'b';

			service.login(user).then(null, testLoginFails);
		}));



	});
}
