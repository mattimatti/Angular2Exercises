import {ElementRef, Inject} from 'angular2/core';

declare var jQuery:any;

export class DomComponent {

	/**
	 * This holds the dom node attached
	 * @type {ElementRef}
	 */
    elementRef: ElementRef;

    constructor(elementRef: ElementRef) {
    	// the injected element ref
        this.elementRef = elementRef;
    }

    /**
     * Return the Jquerized root element 
     */
    el() {
    	return jQuery(this.elementRef.nativeElement);
    }

   
}