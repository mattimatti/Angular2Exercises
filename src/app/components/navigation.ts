import { Component } from 'angular2/core';
import {NgClass} from 'angular2/common';
import { RouterOutlet, RouterLink, Router, Location } from 'angular2/router';
import { AuthService } from '../services/AuthService';


@Component({
	selector: 'navigation',
	directives: [RouterOutlet, RouterLink, NgClass],
	providers: [AuthService],
	templateUrl: './dist/components/navigation.html'
})

export class Navigation {


	private authService : AuthService;


	constructor(authService: AuthService, public router:Router, public location:Location) {
		this.authService = authService;
	}


	/**
	 * Is the user loggd in ?
	 * @return {boolean} [description]
	 */
	isLoggedIn(): boolean{
		return this.authService.isLoggedIn();
	}



	/**
	 * [isCurrentPage description]
	 * @param {[type]} path [description]
	 */
	isCurrentPage(path: string):boolean {
        if(path === this.location.path()){
            return true;
        }
        else if(path.length > 0){
            return this.location.path().indexOf(path) > -1;
        }
    }


	logout() {
		this.authService.logout();
		this.router.parent.navigateByUrl('/');
	}

}
