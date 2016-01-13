/**
 * This pipe should search
 */

import {Pipe, PipeTransform} from 'angular2/core';


@Pipe({name: 'search'})
export class SearchPipe implements PipeTransform {

	transform(value: string, args: any[] = null): string {
		return value;
	}

}