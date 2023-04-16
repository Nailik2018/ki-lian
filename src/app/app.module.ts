import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KiLianComponent } from './sites/ki-lian/ki-lian.component';
import { AboutMeComponent } from './sites/about-me/about-me.component';
import { CountUpDirective } from './sites/about-me/count-up.directive';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SkillsComponent } from './sites/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    KiLianComponent,
    AboutMeComponent,
    CountUpDirective,
    NavigationComponent,
    SkillsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
