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

  openGoogleForm(): void {
    // TODO: Replace placeholder URL with actual Google Form link
    const googleFormUrl = 'https://docs.google.com/forms/d/1QBy5muupEW1eP2ZdeGi6oiBMUCf8EaT7lpSzQaRTe5Q/edit';
    window.open(googleFormUrl, '_blank');
  }
}
