import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C1Component } from './Comp1/C1.component';
import { C2Component } from './Comp2/C2.component';
import { C3Component } from './Comp3/C3.component';
import { C4Component } from './Comp4/C4.component';
import { C5Component } from './Comp5/C5.component';
import { PollComponent } from './Poll_Comp/Poll.component';
import { TextComponent } from './Text_Comp/Text.component';
import { ImgComponent } from './Img_comp/Img.component';

@NgModule({
  declarations: [
    AppComponent, C1Component , C2Component , C3Component , C4Component, C5Component, ImgComponent, TextComponent, PollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
