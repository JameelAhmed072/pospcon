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
  dropdownOpen1 = false;
  dropdownOpen2 = false;
  dropdownOpen3 = false;

  goToRegistration() {
    this.router.navigate(['/registration']);
  }

  onMouseEnter(menu: number) {
    if (menu === 1) this.dropdownOpen1 = true;
    if (menu === 2) this.dropdownOpen2 = true;
    if (menu === 3) this.dropdownOpen3 = true;
  }

  onMouseLeave(menu: number) {
    if (menu === 1) this.dropdownOpen1 = false;
    if (menu === 2) this.dropdownOpen2 = false;
    if (menu === 3) this.dropdownOpen3 = false;
  }


}
