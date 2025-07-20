import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor(private router: Router) {}
  menuOpen = false;
  dropdownOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  goToRegistration() {
    this.router.navigate(['/registration']);
  }


  onMouseEnter() {
  this.dropdownOpen = true;
}

onMouseLeave() {
  this.dropdownOpen = false;
}

toggleDropdown() {
  this.dropdownOpen = !this.dropdownOpen;
}
}
