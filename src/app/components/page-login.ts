import { Component } from 'angular2/core';
import { Login } from './login/login-form';

@Component({
  templateUrl: '<login-form></login-form>',
  directives : [Login]
})

export class PageLogin {


}
