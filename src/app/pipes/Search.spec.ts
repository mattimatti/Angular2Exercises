import {
	describe,
	it,
	expect,
	beforeEach
} from 'angular2/testing';

import {SearchPipe} from './Search';

export function main() {


	// the  suite

	describe('SearchPipe', () => {
		
		let pipe;
		let str;
		let upper;
		let lower;


		beforeEach(() => {
			pipe = new SearchPipe();
			str = 'something';
			lower = 'something';
			upper = 'SOMETHING';
		});


		describe('transform', () => {
			
			it('should return same', () => {

				let val = pipe.transform(upper);
				expect(val).toBe(upper);
			});



		});
	});
}