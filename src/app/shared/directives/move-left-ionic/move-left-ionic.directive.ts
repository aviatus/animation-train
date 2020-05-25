import { Directive, OnInit, OnDestroy, ElementRef, AfterViewInit } from '@angular/core';
import { AnimationController, Animation } from '@ionic/angular';

@Directive({
  selector: '[moveLeftIonic]'
})
export class MoveLeftIonicDirective implements OnInit, OnDestroy {

  animation: Animation;

  constructor(
    private el: ElementRef,
    private animationControl: AnimationController
  ) { }

  ngOnInit() {
    this.initAnimate();
    this.animation.play();
  }

  initAnimate() {
    this.animation = this.animationControl.create()
      .addElement(this.el.nativeElement)
      .duration(1500)
      .easing('ease-in-out')
      .fromTo('transform', 'translateX(1000px)', 'translateX(0)')
      .fromTo('opacity', '0', '1');
  }

  ngOnDestroy(): void {
    this.animation.destroy();
  }
}
