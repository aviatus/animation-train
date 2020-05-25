import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import {AnimationPlayer, AnimationBuilder, style, animate} from '@angular/animations';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.scss']
})
export class BoxesComponent implements OnInit {

  boxCount = new Array(1000);
  player: AnimationPlayer;

  constructor() { }

  ngOnInit() { }
}
