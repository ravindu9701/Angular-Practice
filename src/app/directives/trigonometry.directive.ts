import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTrigonometry]'
})
export class TrigonometryDirective {

  private isViewCreated = false;
  private readonly context = new TrigonometryContext();

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

  @Input('appTrigonometry') set angle(angle: number) {
    const angleInRadians = toRadians(angle);
    this.context.sin = Math.sin(angleInRadians);
    this.context.cos = Math.cos(angleInRadians);
    this.context.tan = Math.tan(angleInRadians);

    if(!this.isViewCreated) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, this.context);
      this.isViewCreated = true;
    }
  }

}


class TrigonometryContext {
  sin = 0;
  cos = 0;
  tan = 0;
}

function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}