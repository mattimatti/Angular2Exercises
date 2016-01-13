import { Component, Input, ChangeDetectionStrategy } from 'angular2/core';
import {NgClass} from 'angular2/common';
// import { CommentItemRenderer } from './CommentItemRenderer';


@Component({
  selector: 'CommentList',
  //changeDetection:ChangeDetectionStrategy.OnPush,
  template: `
  <ul [ngClass]="{hidden: ! hasElements()}" class="list-group">
  	<li *ngFor="#comment of dataProvider" class="list-group-item" comment="comment">{{comment.text}}</li>
  </ul>
  <p [ngClass]="{hidden: hasElements()}">No elements match your selection</p>
  `,
  directives: [NgClass]
})

export class CommentList {

	@Input() dataProvider;

	/**
	 * [hasElements description]
	 */
	hasElements(): boolean{
		return (this.dataProvider && this.dataProvider.length > 0);
	}

}
