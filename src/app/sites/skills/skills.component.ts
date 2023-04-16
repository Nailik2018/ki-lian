import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html'
})
export class SkillsComponent implements OnInit {

  ngOnInit() {
    this.getProgress(95, 50, '#46C2FF');
    // this.getProgress(95, 50, '#46C2FF');
    // this.getProgress(95, 50, '#46C2FF');
  }

  getProgress(value: number, speed: number, color: string) {
    let circularProgressbar = document.querySelector('.cirucular-progress');
    let  progressValue = document.querySelector('.progress-value');

    let progressStartValue = 0;
    let progressEndValue = value;

    let progess = setInterval(() => {
      progressStartValue++;

      // @ts-ignore
      progressValue.textContent = `${progressStartValue}%`;
      // @ts-ignore
      circularProgressbar.style.background = `conic-gradient(${color}, ${progressStartValue * 3.6}deg, #ededed 0deg)`;

      if(progressStartValue === progressEndValue){
        clearInterval(progess);
      }
    }, speed);
  }
}
