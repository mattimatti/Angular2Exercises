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

import { UserService } from './UserService';
import { User } from '../models/User';


export function main() {

	describe('UserService', () => {

		let injector: Injector;

		let service: UserService;
		
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


				provide(UserService, {
					useFactory: (http: Http) => {
						return new UserService(http);
					},
					deps: [
						Http
					]
				})
			]);
			
			backend = injector.get(MockBackend);
			
			service = injector.get(UserService);

			response = new Response(
				new ResponseOptions({body: 'FOO'})
			);
			
		});

		afterEach(() => {
			backend.verifyNoPendingRequests();
		});



	});
}
