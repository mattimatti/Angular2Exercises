import { Component, Input, ChangeDetectionStrategy } from 'angular2/core';


@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'CommentItemRenderer',
  template: '<li><a (click)="toggleComment()" href="#">{{comment.text}}</a></li>',
  directives : []
})

export class CommentItemRenderer {

	@Input() comment;


	toggleComment(){
		this.comment.toggle();
	}

}
