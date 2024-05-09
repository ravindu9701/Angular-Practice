import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHost]'
})
export class HostDirective {
  
  possibleColors = [
    'darksalmon',
    'hotpink',
    'lightskyblue',
    'goldenrod',
    'peachpuff',
    'mediumspringgreen',
    'cornflowerblue',
    'blanchedalmond',
    'lightslategrey'
  ];

  @Input('highlightColor') highlightColor!: string;

  @HostBinding('style.backgroundColor') backgroundColor!: string;
  @HostBinding('style.color') color!: string;
  @HostBinding('style.border-color') borderColor!: string;

  @HostListener('keydown') 
  newColor() {
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);
    this.color = this.borderColor = this.possibleColors[colorPick];
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.backgroundColor = this.highlightColor || 'red';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.backgroundColor =  'transparent';
  }

  constructor() { }

}
