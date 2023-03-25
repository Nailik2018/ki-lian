import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  navItems = [
    {label: 'Home', link: '/'},
    {label: 'Über mich', link: '/about-me'}
  ];
  showMenu = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
