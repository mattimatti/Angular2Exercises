import { Component } from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';
import {OnInit} from 'angular2/core';
import {AuthService} from '../../services/AuthService';
import {User} from '../../models/User';
import {Router} from 'angular2/router';

@Component({
  directives: [FORM_DIRECTIVES],
  selector: 'login',
  templateUrl: './dist/components/login/login.html',
  providers: [AuthService]
})

export class Login implements OnInit {

	public model: any;

	ngOnInit() {
		this.model = {}
	}


	onSubmit() {
		this.login();
	}


	constructor(
		private authService: AuthService,
		public router: Router
	) { }


	login() {
		this.authService.login(this.model).then(user => {
			this.router.parent.navigateByUrl('/home');
		});
	}


}
