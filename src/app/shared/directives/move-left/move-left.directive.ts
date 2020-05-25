import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { AnimationPlayer, AnimationBuilder, style, animate } from '@angular/animations';

@Directive({
  selector: '[moveLeft]'
})
export class MoveLeftDirective implements OnInit, OnDestroy {
  player: AnimationPlayer;

  constructor(
    private el: ElementRef,
    private animationBuilder: AnimationBuilder
  ) { }

  ngOnInit(): void {
    this.initAnimate();
    this.player.play();
  }

  ngOnDestroy(): void {
    this.player.destroy();
  }

  initAnimate() {
    this.player = this.animationBuilder
      .build([
        style({
          transform: 'translateX(1000px)',
          opacity: 0,
        }),
        animate(
          '1.5s ease-in-out',
          style({ transform: 'translateX(0)', opacity: 1 })
        )
      ])
      .create(this.el.nativeElement);
  }
}
