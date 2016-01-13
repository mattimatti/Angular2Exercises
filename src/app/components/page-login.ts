import { Component } from 'angular2/core';
import { Login } from './login/login-form';

@Component({
  selector: 'page-login',
  template: '<login-form></login-form>',
  directives : [Login]
})

export class PageLogin {


}
