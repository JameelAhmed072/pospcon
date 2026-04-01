import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pospcon';
  showAnnouncement = false;

  ngOnInit(): void {
    const dismissed = sessionStorage.getItem('announcementDismissed');
    if (!dismissed) {
      this.showAnnouncement = true;
    }
  }

  closeAnnouncement(): void {
    this.showAnnouncement = false;
    sessionStorage.setItem('announcementDismissed', 'true');
  }

  closeOnBackdrop(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('announcement-overlay')) {
      this.closeAnnouncement();
    }
  }
}
