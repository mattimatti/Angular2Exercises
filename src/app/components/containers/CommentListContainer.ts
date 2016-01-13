import { Component, Input, OnInit, OnDestroy } from 'angular2/core';
import { CommentList } from './CommentList';
import { Comment } from '../../models/Comment';
import { Typeahead } from './Typeahead';
import * as _ from 'underscore';

@Component({
  selector: 'CommentListContainer',
  template: `
  <Typeahead [dataProvider]="comments" [searchText]="searchedWord" (change)="onTypeahead($event)"></Typeahead>
  <CommentList [dataProvider]="filteredComments"></CommentList>`,
  directives : [Typeahead, CommentList]
})


export class CommentListContainer implements OnInit {


	/**
	 * The searched string
	 * @type {string}
	 */
	public searchedWord:string = "";


	/**
	 * the original datasource
	 * @type {Array<Comment>}
	 */
	public comments:Array<Comment>;

	/**
	 * The filtered collection
	 * @type {Array<Comment>}
	 */
	public filteredComments:Array<Comment>;


	ngOnInit(){
		let comments = require('./CommentsMock');
		this.comments = comments.default;
		this.filteredComments = this.comments;
	}


	
	/**
	 * This event listener is binded to the typeahead
	 * @param {[type]} inputChanges [description]
	 */
	onTypeahead(str) {

	    this.searchedWord = str || '';
	    
	    this.filteredComments = this.comments.filter((e) => {

	    	if(this.searchedWord === ''){
	    		return false;
	    	}

	    	let isValid = e.text.indexOf(this.searchedWord) > -1;

	    	return isValid;
	    });

	}

}
