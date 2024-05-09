import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

export interface MathContext {
  $implicit: number;
  root: number;
  power: number;
  exponent: number;
  test: number;
  controller: { increment: () => void; };
}

@Directive({
  selector: '[math]'
})
export class MathDirective implements OnInit, OnDestroy {

  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>) { }
  ngOnInit(): void {
    this.createView();
  }
  ngOnDestroy(): void {
    this.viewContainerRef.clear();
  }

  @Input() math!: number;

  @Input() mathTest!: number;

  @Input() mathExponent!: number;

  private createView() {
    this.viewContainerRef.clear();
    this.viewContainerRef.createEmbeddedView(this.templateRef, {
        $implicit: this.math,
        root: Math.pow(this.math, 1 / this.mathExponent),
        power: Math.pow(this.math, this.mathExponent),
        exponent: this.mathExponent,
        test: this.mathTest,
        controller: {
            increment: () => this.increment()
        }
    });
}

  private increment() {
    this.math++;
    this.createView();
  }

  
}
