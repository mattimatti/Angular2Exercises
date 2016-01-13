import {Component, View, ElementRef, Inject, OnInit} from 'angular2/core';
import {DomComponent} from '../../common/DomComponent';


@Component({
    selector: 'jquery-integration'
})


@View({
    template: `
    <div class="btn btn-success">VISIBLE</div>
    <div id="invisible" class="btn btn-default">INVISIBLE</div>
    <p>Should see only VISIBLE button</p>`
})



/**
 * 
 */
export class JqueryIntegration extends DomComponent implements OnInit {


	/**
	 * [constructor description]
	 * @param {ElementRef} @Inject(ElementRef) elementRef [description]
	 */
    constructor(@Inject(ElementRef) elementRef: ElementRef) {
        super(elementRef);
    }


    /**
     * [ngOnInit description]
     */
    ngOnInit() {
        this.el().find('#invisible').hide();
    }
}