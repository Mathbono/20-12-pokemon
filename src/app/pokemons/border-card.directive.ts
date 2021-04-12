import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
	selector: '[pkmBorderCard]'
})
export class BorderCardDirective {
	@Input('pkmBorderCard') private borderColor: string;
	private initialColor: string;
	private initialHeight: number;
	private defaultColor: string;

	constructor(private el: ElementRef) {
		this.initialColor = '#f5f5f5';
		this.initialHeight = 180;
		this.defaultColor = '#009688';
		this.setBorder(this.initialColor);
		this.setHeight(this.initialHeight);
	}

	private setBorder(color: string) {
		let border = 'solid 4px ' + color;
		this.el.nativeElement.style.border = border;
	}
	private setHeight(height: number) {
		this.el.nativeElement.style.height = height + 'px';
	}

	@HostListener('mouseenter') onMouseEnter() {
		this.setBorder(this.borderColor || this.defaultColor);
	}
	@HostListener('mouseleave') onMouseLeave() {
		this.setBorder(this.initialColor);
	}
}
