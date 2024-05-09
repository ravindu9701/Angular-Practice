import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAssignment]'
})
export class AssignmentDirective implements OnInit{

  @Input() priorityLevel!: string; 

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    if(this.priorityLevel === 'High') {
      this.el.nativeElement.style.backgroundColor = 'red';
    } else if (this.priorityLevel === 'Medium') {
      this.el.nativeElement.style.backgroundColor = 'yellow';
    } else {
      this.el.nativeElement.style.backgroundColor = 'transparent';
    }
  }


}
