import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C1Component } from './Comp1/C1.component';
import { C2Component } from './Comp2/C2.component';
import { C3Component } from './Comp3/C3.component';
import { C4Component } from './Comp4/C4.component';
import { C5Component } from './Comp5/C5.component';

@NgModule({
  declarations: [
    AppComponent, C1Component , C2Component , C3Component , C4Component, C5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
