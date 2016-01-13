import { Component, Input, Output, OnInit, OnDestroy, EventEmitter } from 'angular2/core';
import { NgModelDirective } from '../../common/NgModelDirective';

@Component({
		selector: 'Typeahead', 
		templateUrl: './dist/components/comments/typeahead.html',
		directives : [NgModelDirective]
	}
)

export class Typeahead implements OnInit, OnDestroy {


	ngOnInit(){
 		console.log('ngOnInit');
	}


	ngOnDestroy() {
	    console.log('ngOnDestroy');
	}


	@Input() dataProvider;

	@Input() searchText:string;

	@Output() change:EventEmitter<any> = new EventEmitter();


	constructor(){
	  console.log('constructor');
	}


	/**
	 * handles the text field change and propagates the event using the change emitter
	 * 
	 * @param {[type]} event [description]
	 */
	textChanges(event) {
		//console.log('textChanges',arguments);
		this.change.next(this.searchText);
	}



}