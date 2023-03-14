import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit() {
    const tabTitle = document.title;

    window.addEventListener("blur", () => {
      document.title = "Come back 😢";
    });

    window.addEventListener("focus", () => {
      document.title = 'You are back😀';
    });
  }

}
