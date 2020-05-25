import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxesComponent } from './boxes/boxes.component';
import { MoveLeftDirective } from './shared/directives/move-left/move-left.directive';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MoveLeftIonicDirective } from './shared/directives/move-left-ionic/move-left-ionic.directive';

@NgModule({
  declarations: [
    AppComponent,
    BoxesComponent,
    MoveLeftDirective,
    MoveLeftIonicDirective
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
