import { Component } from 'angular2/core';
import {RouteData} from 'angular2/router';

@Component({
  selector: 'page-index',
  templateUrl: './dist/components/page-index.html'
})

export class PageIndex {


	 foo: string;

	 constructor(data: RouteData) {
	 	console.log('constructor with data', data);
	    this.foo = data.get('foo');
	  }

}
