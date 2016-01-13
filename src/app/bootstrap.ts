import { bootstrap } from 'angular2/platform/browser';
import { ROUTER_PROVIDERS } from 'angular2/router';
import { HTTP_PROVIDERS, RequestOptions } from 'angular2/http';
import { App } from './components/app';
import { JsonRequestOptions } from './common/JsonRequestOptions';

// Add these symbols to override the `LocationStrategy`
import {provide}           from 'angular2/core';

import {LocationStrategy,HashLocationStrategy} from 'angular2/router';
// import {enableProdMode} from 'angular2/core';

bootstrap(App, [
	provide(RequestOptions, { useClass: JsonRequestOptions }),
	ROUTER_PROVIDERS,
	HTTP_PROVIDERS
]);
