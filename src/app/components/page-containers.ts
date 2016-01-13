import { Component } from 'angular2/core';

// my comps
import { CommentListContainer } from './comments/CommentListContainer';

@Component({
  selector: 'page-containers',
  templateUrl: './dist/components/page-containers.html',
  directives : [CommentListContainer]
})

export class Containers {


}
