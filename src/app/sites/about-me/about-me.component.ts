import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html'
})
export class AboutMeComponent {

  age:number = this.yearsCalculation("05/11/1991");
  yearsOldText = `Jahre alt`;
  duration = 5000;
  visitedCountries :number = 22;
  daysInOtherCountries :number = 360;
  lineCodesInThisProject:number = 1000;
  yearsAsASoftwareEngineer:number = this.yearsCalculation("01/09/2019");
  daysToFinishHFTM: number = this.getNumberOfDays("06/30/2024");
  constructor(private route: ActivatedRoute) {
  }

  private yearsCalculation(date: string): number {
    const targetDate = new Date(date);
    const month_diff = Date.now() - targetDate.getTime();
    const age_dt = new Date(month_diff);
    const year = age_dt.getUTCFullYear();
    const age = Math.abs(year - 1970);
    return age;
  }

  private getNumberOfDays(dateTo: string): number{
    let now = new Date(Date.now());
    const endDate = new Date(dateTo);
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = endDate.getTime() - now.getTime();
    const days = Math.round(diffInTime / oneDay);
    return days;
  }
}
