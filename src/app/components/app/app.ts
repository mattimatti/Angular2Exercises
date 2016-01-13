import { Component, View } from 'angular2/core';
import {OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouterOutlet, Location, RouteConfig, RouterLink, Router} from 'angular2/router';


import {LoggedInRouterOutlet} from './LoggedInRouterOutlet';

import {User} from '../../models/User';
import { _settings } from '../../settings'


// navigable componennts
import { Login } from '../login/login';
import { Home } from '../home/home';
import { Containers } from '../containers/Containers';




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
	{ path: '/login', name: 'Login', component: Login },
	{ path: '/containers', name: 'Containers', component: Containers }
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


