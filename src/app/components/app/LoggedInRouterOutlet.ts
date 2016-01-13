import {Directive, Attribute, ElementRef, DynamicComponentLoader} from 'angular2/core';
import {Router, RouterOutlet, ComponentInstruction} from 'angular2/router';
import {AuthService} from '../../services/AuthService';

@Directive({
  selector: 'router-outlet',
  providers: [AuthService]
})


export class LoggedInRouterOutlet extends RouterOutlet {

  publicRoutes: any;


  private parentRouter: Router;


  constructor(
    _elementRef: ElementRef,
    _loader: DynamicComponentLoader,
    _parentRouter: Router,
    @Attribute('name') nameAttr: string,
    public loginService: AuthService
    ) {

    super(_elementRef, _loader, _parentRouter, nameAttr);

    this.parentRouter = _parentRouter;

    this.publicRoutes = {
      '/login': true
    };

  }





  activate(instruction: ComponentInstruction) {

    console.log('LoggedInRouterOutlet::activate', arguments);


    var url = this.parentRouter.lastNavigationAttempt;

    console.log('currentUrl', url);




    //if (!this.publicRoutes[url] && !this.loginService.isLoggedIn()) {
      // todo: redirect to Login, may be there a better way?
      //this.parentRouter.navigateByUrl('/login');
    //}

    this.parentRouter.navigateByUrl('/containers');



    return super.activate(instruction);
  }

}
