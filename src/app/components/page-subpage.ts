import { Component } from 'angular2/core';
import {RouteData} from 'angular2/router';

@Component({
  selector: 'subpage',
  template: "<h1>Subpage</h1> <p>I'm data passed from route : {{foo}}</p>"
})

export class SubPage {


	 foo: string;

	 constructor(data: RouteData) {
	 	console.log('constructor with data', arguments);
	    this.foo = data.get('foo');
	    console.log('foo ', this.foo);
	  }

}
