import { ChangeDetectorRef, Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[carousel]'
})
export class CarouselDirective implements OnInit{

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef, private cdr: ChangeDetectorRef) { }

  @Input('carouselFrom') images!: any[];

  currentimage: any;

  ngOnInit(): void {
    this.currentimage = this.images[0];
    this.createView();
  }

  createView() { 
    this.viewContainerRef.clear();
    this.viewContainerRef.createEmbeddedView(this.templateRef, {
      $implicit: this.currentimage.source,
      title: this.currentimage.title,
      controller: {
        next: () => this.next(),
        previous: () => this.previous()
      }
    })
  }

  next() {
    this.currentimage = this.images[(this.images.indexOf(this.currentimage) + 1) % this.images.length];
    this.createView();
  }

  previous() {
    if(this.images.indexOf(this.currentimage) == 0) {
      this.currentimage = this.images[this.images.length - 1];
    } else {
      this.currentimage = this.images[(this.images.indexOf(this.currentimage) - 1) % this.images.length];
    }
    this.createView();
  }

}
