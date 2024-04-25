import { Component } from '@angular/core';

interface NavigationLink {
  link: string;
  name: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  navigationLinks: NavigationLink[] = [
    { link: '', name: 'Grid View' },
    { link: 'table', name: 'Table View' },
  ];
}
