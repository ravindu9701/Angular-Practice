import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

interface Position {
  x: number;
  y: number;
}

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {

  position: Position = {x: 0, y: 0};

  private startPosition!: Position;

  private isDraggable: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { 
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'grab');
    this.renderer.setStyle(this.el.nativeElement, 'user-drag', 'none');
  }

  @HostListener('mousedown', ['$event']) 
  onMouseDown(event: MouseEvent) {
    this.isDraggable = true;
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'grabbing');
    this.startPosition = {
      x: event.clientX - this.position.x,
      y: event.clientY - this.position.y
    }
    event.preventDefault();
  }

  @HostListener('window:mouseup', ['$event']) 
  onMouseUp(event: MouseEvent) {
    if(this.isDraggable) {
      this.isDraggable = false;
      this.renderer.setStyle(this.el.nativeElement, 'cursor', 'grab');
    }
  }

  @HostListener('window:mousemove', ['$event']) 
  onMouseMove(event: MouseEvent) {
    if(this.isDraggable){
      this.position.x = event.clientX - this.startPosition.x;
      this.position.y = event.clientY - this.startPosition.y;
      this.renderer.setStyle(this.el.nativeElement, 'position', 'absolute');
      this.renderer.setStyle(this.el.nativeElement, 'left', `${this.position.x}px`);
      this.renderer.setStyle(this.el.nativeElement, 'top', `${this.position.y}px`);
    }
  }

}
