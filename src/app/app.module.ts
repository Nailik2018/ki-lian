import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KiLianComponent } from './sites/ki-lian/ki-lian.component';
import { AboutMeComponent } from './sites/about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    KiLianComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
