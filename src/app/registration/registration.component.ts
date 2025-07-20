import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  
  downloadForm(): void {
    window.open('/assets/Registration-Form-POSPCON-2026.pdf', '_blank');
  }
}
