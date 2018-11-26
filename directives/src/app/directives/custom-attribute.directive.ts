import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appCustomAttribute]'
})
export class CustomAttributeDirective {
  @HostBinding('style.opacity') private opacity;
  @HostBinding('style.borderColor') private borderColor;

  @Input() set outerBorderColor(value: string) {
    this.borderColor = value;
  }

  @HostListener('mouseover')
  private onMouseOver() {
    this.opacity = 1;
  }

  @HostListener('mouseout')
  private onMouseOut() {
    this.opacity = 0.3;
  }

}
