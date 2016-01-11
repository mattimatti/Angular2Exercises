import { Component, View } from 'angular2/core';
import { Login } from '../login/login';
import { Home } from '../home/home';
import {OnInit} from 'angular2/core';
import { RouterOutlet } from 'angular2/router';

import {Location, RouteConfig, RouterLink, Router} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {User} from '../../models/User';

import {LoggedInRouterOutlet} from './LoggedInRouterOutlet';




@Component({
  selector: 'app'
})

@View({
	templateUrl: './dist/components/app/app.html',
	directives: [LoggedInRouterOutlet]
})


@RouteConfig([
	{ path: '/', redirectTo: ['/Home'] },
	{path: '/home',   name: 'Home',  component: Home },
	{ path: '/login', name: 'Login', component: Login }
])

export class App {


	/**
	 * [constructor description]
	 * @param {LoginService} private _loginService The injected service
	 */
	constructor(
		public router: Router
	) { }




}


