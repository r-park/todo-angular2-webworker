import { ViewEncapsulation } from 'angular2/angular2';
import { document } from 'angular2/src/facade/browser';


const isShadowDomSupported: boolean = Boolean(document && document.body && document.body.createShadowRoot);
export const encapsulation: ViewEncapsulation = isShadowDomSupported ? ViewEncapsulation.NATIVE : ViewEncapsulation.EMULATED;
