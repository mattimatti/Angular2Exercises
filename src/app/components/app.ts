import { Component, View } from 'angular2/core';
import {OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouterOutlet, Location, RouteConfig, RouterLink, Router, AsyncRoute} from 'angular2/router';
import {LoggedInRouterOutlet} from '../common/LoggedInRouterOutlet';
import {Navigation} from './navigation';

// Loading data from External module with an alias
import { settings as configData } from '../assets/settings';


// navigable componennts
import { PageLogin } from './page-login';
import { PageIndex } from './page-index';
import { Containers } from './page-containers';
import { DynamicPageComponent } from './pages/DynamicPageComponent';
import { SubPage } from './page-subpage';
import { JqueryIntegration } from './pages/JqueryIntegration';


// declare var System:any;



@Component({
  selector: 'app'
})


@View({
	templateUrl: './dist/components/app.html',
	directives: [LoggedInRouterOutlet, Navigation]
})


@RouteConfig([
	{path: '/', redirectTo: ['/Index'] },
	{path: '/home',   name: 'Index',  component: PageIndex, data : configData },
	{path: '/login', name: 'Login', component: PageLogin },
	{path: '/containers', name: 'Containers', component: Containers },
	//new AsyncRoute({path: '/dynamic', name: 'DynamicPageComponent', loader: () => ComponentHelper.resolve('DynamicPageComponent', './pages/DynamicPageComponent.js'), data : configData}),
	new AsyncRoute({path: '/dynamic', name: 'DynamicPageComponent', loader: () => Promise.resolve(DynamicPageComponent), data : configData}),
	{path: '/pages/subpage', name: 'SubPage', component: SubPage,  data : configData},
	{path: '/jquery', name: 'Jquery', component: JqueryIntegration,  data : configData}
])



// class ComponentHelper{

//     static resolve(name,path){
//     	let mClass = System.import(path).then(c => c[name]);
//     	console.log('ComponentHelper:resolve', mClass);
//         return mClass;
//     }
// }


export class App {


	publicRoutes = {
      '/login': true
    };


    loginRoute = '/login';

	/**
	 * [constructor description]
	 * @param {LoginService} private _loginService The injected service
	 */
	constructor( public router: Router, location: Location) {
		//location.go('/foo');
	}


}


