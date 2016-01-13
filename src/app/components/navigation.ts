import { Component } from 'angular2/core';
import {NgClass} from 'angular2/common';
import { RouterOutlet, RouterLink, Router } from 'angular2/router';
import { AuthService } from '../services/AuthService';


@Component({
	selector: 'navigation',
	directives: [RouterOutlet, RouterLink, NgClass],
	providers: [AuthService],
	templateUrl: './dist/components/navigation.html'
})

export class Navigation {


	private authService : AuthService;


	constructor(authService: AuthService, public router:Router) {
		this.authService = authService;
	}


	/**
	 * Is the user loggd in ?
	 * @return {boolean} [description]
	 */
	isLoggedIn(): boolean{
		return this.authService.isLoggedIn();
	}


	logout() {
		this.authService.logout();
		this.router.parent.navigateByUrl('/');
	}

}
