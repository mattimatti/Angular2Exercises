import { Http, Response, Request } from 'angular2/http';
// normally this would be imported from 'angular2/core'
// but in our compiler we're pulling the dev version of angular2
import { Injectable } from 'angular2/core';
import { User } from '../models/User';

// @Injectable() - normally for Dart but since we just have to have metadata
// on our object to make it inject Http into the constructor
// we use this annotation. We also could have done an
// @Inject(http) in the parameter as an alternative, but this
// is a bit drier and works for multiple constructor DI args.
// see http://blog.thoughtram.io/angular/2015/09/17/resolve-service-dependencies-in-angular-2.html
@Injectable()
export class UserService {
  

  /**
   * [constructor description]
   * @param {Http} public http [description]
   */
  constructor(public http: Http) {
    console.log('user Service created.', http);
  }

  /**
   * [getTasks description]
   */
  getUsers() {
    // return an observable
    return this.http.get('/api/v1/user')
    .map( (responseData) => {
      return responseData.json();
    })
    .map((tasks: Array<any>) => {
      let result:Array<User> = [];
      if (tasks) {
        tasks.forEach((user) => {
          result.push(new User(user));
        });
      }
      return result;
    });
  }


  addUser(username:string, password: string) {
    console.log('adding user - start', username, password);
    
    var user = new User({username, password});

    return this.http.post('/api/v1/user', JSON.stringify(user));
  }



}