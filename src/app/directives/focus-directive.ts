import {
  Directive,
  ElementRef,
  LifecycleEvent
} from 'angular2/angular2';


@Directive({
  lifecycle: [ LifecycleEvent.OnDestroy ],
  properties: [ 'focus' ],
  selector: '[focus]'
})

export class FocusDirective {
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

  onDestroy(): void {
    this.clear();
  }

  private clear(): void {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }
}
