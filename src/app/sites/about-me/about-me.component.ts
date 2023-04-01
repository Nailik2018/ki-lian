import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html'
})
export class AboutMeComponent {

  age:number = this.yearsCalculation("05/11/1991");
  duration = 5000;
  visitedCountries :number = 22;
  daysInOtherCountries :number = 360;
  lineCodesInThisProject:number = 1000;
  yearsAsASoftwareEngineer:number = this.yearsCalculation("01/08/2017");
  motivation: number = 100;
  constructor(private route: ActivatedRoute) {
  }

  private yearsCalculation(date: string): number {
    let targetDate = new Date(date);
    var month_diff = Date.now() - targetDate.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age;
  }
}
