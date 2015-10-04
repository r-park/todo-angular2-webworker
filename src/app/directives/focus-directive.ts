import {
  Directive,
  ElementRef,
  LifecycleEvent,
  OnDestroy
} from 'angular2/angular2';


@Directive({
  properties: [ 'focus' ],
  selector: '[focus]'
})

export class FocusDirective implements OnDestroy {
  element: ElementRef;
  timeout: number;

  constructor(element: ElementRef) {
    this.element = element;
  }

  set focus(value: boolean) {
    this.clear();
    if (value) {
      this.timeout = setTimeout(() => {
        this.element.nativeElement.focus();
      });
    }
  }

  clear(): void {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  onDestroy(): void {
    this.clear();
  }
}
