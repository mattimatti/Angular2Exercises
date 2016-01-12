
import {Headers, BaseRequestOptions} from 'angular2/http';


/**
 * Set request oprtions globally 
 * @see bootstrap
 */
export class JsonRequestOptions extends BaseRequestOptions {
  headers : Headers = new Headers({
      'Content-Type' : 'application/json'
  })
}