import { Directive, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[animate]'
})
export class AnimateDirective implements OnInit{
  @Input() thresholdMax = 0.8;
  @Input() thresholdMin = 0.4;
  @Input() animateClass: string = '';
  @Output() isVisible = new EventEmitter<string>();
  constructor(private element: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    this.createObserver();
  }

  addClassName(className: string) {
    this.renderer.addClass(this.element.nativeElement, className);
    this.isVisible.emit();
  }

  removeClassName(className: string) {
    if (this.element.nativeElement.classList.contains(className)) {
      this.renderer.removeClass(this.element.nativeElement, className);
    }
  }

  createObserver() {
    const options = {
      threshold: [this.thresholdMin, this.thresholdMax],
    };

    const callback = (entries: any) => {
      entries &&
        entries.forEach((entry: any) => {
          if (entry.isIntersecting) {
            this.addClassName(this.animateClass);
          } else {
            this.removeClassName(this.animateClass);
          }
        });
    };

    const observer = new IntersectionObserver(callback, options);
    const target = this.element.nativeElement;
    target && observer.observe(target);
  }
}
