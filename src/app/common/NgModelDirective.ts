import { Directive, EventEmitter, Input, Output } from 'angular2/core';

@Directive({
  selector: '[ngModel]',
  host: {
    "[value]": 'ngModel',
    "(input)": "ngModelChange.next($event.target.value)"
  }
})

export class NgModelDirective {

  @Input() ngModel:any; // stored value

  @Output() ngModelChange:EventEmitter<any> = new EventEmitter() // an event emitter

  constructor(){

  }

  onChanges(inputChanges) {
		console.log('onChanges',inputChanges);
  }

}
