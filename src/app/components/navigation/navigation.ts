import { Component } from 'angular2/core';
import { RouterOutlet, RouterLink, Router } from 'angular2/router';
import {AuthService} from '../../services/AuthService';


@Component({
	selector: 'navigation',
	directives: [RouterOutlet, RouterLink],
	providers: [AuthService],
	templateUrl: './dist/components/navigation/navigation.html'
})

export class Navigation {


	constructor(public authService: AuthService, public router:Router) { }


	logout() {
		this.authService.logout();
		this.router.parent.navigateByUrl('/');
	}

}
