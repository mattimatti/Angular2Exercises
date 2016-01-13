import {Directive, Attribute, ElementRef, DynamicComponentLoader, Input} from 'angular2/core';
import {Router, RouterOutlet, ComponentInstruction} from 'angular2/router';
import {AuthService} from '../services/AuthService';


@Directive({
  selector: 'router-outlet',
  providers: [AuthService]
})


/**
 *
 * 
 */
export class LoggedInRouterOutlet extends RouterOutlet {


  @Input() publicRoutes: Array<any>;


  @Input() loginRoute: string;


  /**
   * [parentRouter description]
   * @type {Router}
   */
  private parentRouter: Router;


  /**
   * [constructor description]
   * @param {ElementRef}             _elementRef        [description]
   * @param {DynamicComponentLoader} _loader            [description]
   * @param {Router}                 _parentRouter      [description]
   * @param {string}                 @Attribute('name') nameAttr      [description]
   * @param {AuthService}            public             loginService  [description]
   */
  constructor(
    _elementRef: ElementRef,
    _loader: DynamicComponentLoader,
    _parentRouter: Router,
    @Attribute('name') nameAttr: string,
    public loginService: AuthService
    ) {

    super(_elementRef, _loader, _parentRouter, nameAttr);

    this.parentRouter = _parentRouter;

  }



  /**
   * [activate description]
   * @param {ComponentInstruction} instruction [description]
   */
  activate(instruction: ComponentInstruction) {

    console.log('LoggedInRouterOutlet::activate', arguments);

    var url = this.parentRouter.lastNavigationAttempt;

    if (!this.publicRoutes[url] && !this.loginService.isLoggedIn()) {
      // TODO: redirect to Login, may be there a better way?
      this.parentRouter.navigateByUrl(this.loginRoute);
    }

    return super.activate(instruction);
  }

}
