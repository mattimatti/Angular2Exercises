import { it, iit, describe, expect, inject, injectAsync, beforeEachProviders, fakeAsync, tick } from 'angular2/testing';


import {
	Injector,
	provide
} from 'angular2/core';

import { User } from '../models/User';


export function main() {

	describe('User Model Test', () => {

		it('User username is empty', () => {


      		var user = new User({});
      		expect(user.username).toBeUndefined();

			user = new User({username : 'pepe'});
      		expect(user.username).toEqual('pepe');

		});



		it('User authorized defaults to false', () => {

      		var user = new User({});
      		expect(user.authorized).toBeFalsy();


		});


	});
}
