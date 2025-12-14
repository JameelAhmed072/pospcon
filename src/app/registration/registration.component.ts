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
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeMWfbymD9g7F5VHTONQuiumj_4hw9M_aMrRUNZkQGeiAtMJQ/viewform';
    window.open(googleFormUrl, '_blank');
  }
    openAbstractForm(): void {
    // TODO: Replace placeholder URL with actual Google Form link
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSc0Zfo0tefAaCmlGWO0C1CYUr1F3ZKJZeIVKWJJzbqaQ-_kbA/viewform';
    window.open(googleFormUrl, '_blank');
  }
}
