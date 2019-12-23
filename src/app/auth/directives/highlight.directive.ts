import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    const { style } = this.el.nativeElement;

    style.padding = '10px';
    style.borderRadius = '7px';
    style.transition = '0.3s';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#eee');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
