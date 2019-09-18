import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material.module';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { DeviceDetectorModule } from 'ngx-device-detector';

import * as Hammer from 'hammerjs';

import {HammerGestureConfig} from '@angular/platform-browser';
import { ScrollService } from './scroll.service';

export class HammerConfig extends HammerGestureConfig{
  overrides = <any> {
    swipe: {direction: Hammer.DIRECTION_HORIZONTAL},
    pinch: {enable: false},
    rotate: {enable: false},
    press: {enable: false},
    pan: {enable: false},
    tap: {enable: false}
  }
}

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutComponent,
    ResumeComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    AppRoutingModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig
    },
    ScrollService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
