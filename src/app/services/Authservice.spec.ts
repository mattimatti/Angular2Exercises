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


export function main() {

	describe('Auth service', () => {

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
			
		});

		afterEach(() => backend.verifyNoPendingRequests());

		it('simple test', inject([], () => {
			expect(4).toEqual(4);
		}));

		it('simple test2', inject([], () => {
			expect(4).toEqual(4);
		}));

	});
}
