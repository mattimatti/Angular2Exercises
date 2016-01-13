import { bootstrap } from 'angular2/platform/browser';
import { ROUTER_PROVIDERS, APP_BASE_HREF, LocationStrategy, HashLocationStrategy, PathLocationStrategy} from 'angular2/router';
import { HTTP_PROVIDERS, RequestOptions } from 'angular2/http';
import { App } from './components/app';
import { JsonRequestOptions } from './common/JsonRequestOptions';
import {provide}           from 'angular2/core';
// import {enableProdMode} from 'angular2/core';


bootstrap(App, [
	provide(RequestOptions, { useClass: JsonRequestOptions }),
	
	provide(APP_BASE_HREF, { useValue: '/' }),
	

	// the next is used for hash fragment navigation
	/*provide(LocationStrategy, { useClass: HashLocationStrategy }),*/

	ROUTER_PROVIDERS,
	HTTP_PROVIDERS
]);
