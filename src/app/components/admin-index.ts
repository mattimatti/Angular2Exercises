import { Component } from 'angular2/core';
import {RouteData} from 'angular2/router';

@Component({
  selector: 'index',
  templateUrl: './dist/components/admin-index.html'
})

export class Index {


	 foo: string;

	 constructor(data: RouteData) {
	 	console.log('constructor with data', data);
	    this.foo = data.get('foo');
	  }

}
