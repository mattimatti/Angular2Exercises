import { Component } from 'angular2/core';
import { Navigation } from '../navigation/navigation';

// my comps
import { CommentListContainer } from './CommentListContainer';

@Component({
  selector: 'Containers',
  templateUrl: './dist/components/containers/containers.html',
  directives : [Navigation,CommentListContainer]
})

export class Containers {


}
