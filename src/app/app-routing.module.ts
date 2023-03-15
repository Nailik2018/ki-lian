import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './sites/about-me/about-me.component';
import { KiLianComponent } from './sites/ki-lian/ki-lian.component';

const routes: Routes = [
  { path: '', component: KiLianComponent },
  { path: 'about-me', component: AboutMeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
