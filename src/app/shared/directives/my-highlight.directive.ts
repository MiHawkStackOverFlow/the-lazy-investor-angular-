import { Directive, HostListener, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { HostBinding } from '@angular/core';

@Directive({
  selector: '[appMyHighlight]'
})
export class MyHighlightDirective implements OnInit {
  @Input() backgroundColor:string = 'white';
	@Input() foregroundColor:string = 'black';

  @Input() hoverBackgroundColor:string = '';
	@Input() hoverForegroundColor:string = '';

  @HostBinding('style.backgroundColor') bgColor! :string;
	@HostBinding('style.color') color! :string;

  constructor() {}

  ngOnInit() {
		this.setBackAndForeGroundColor();
  }

  setBackAndForeGroundColor() {
    this.bgColor = this.backgroundColor;
		this.color = this.foregroundColor;
  }

  @HostListener('mouseenter') onMouseEnter(eventData: Event) {
		this.bgColor = this.hoverBackgroundColor;
		this.color = this.hoverForegroundColor;
  }

  @HostListener('mouseleave') onMouseLeave(eventData: Event) {
    this.setBackAndForeGroundColor();
  }
}
