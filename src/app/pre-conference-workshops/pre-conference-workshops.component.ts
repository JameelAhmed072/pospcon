import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-pre-conference-workshops',
  templateUrl: './pre-conference-workshops.component.html',
  styleUrls: ['./pre-conference-workshops.component.css']
})
export class PreConferenceWorkshopsComponent implements OnInit, OnDestroy {
  // Add your image URLs here
  images: string[] = [
    'assets/childfoot4.jpeg',
    'assets/childfoot3.jpeg',
    'assets/childfoot2.jpeg',
    'assets/childfoot6.jpeg',
        'assets/childfoot7.jpeg',
    'assets/childfoot8.jpeg',
    'assets/childfoot9.jpeg',
    'assets/childfoot5.jpeg'

  ];

  currentSlide: number = 0;
  private slideInterval: any;

  ngOnInit() {
    this.startSlideShow();
  }

  ngOnDestroy() {
    this.stopSlideShow();
  }

  startSlideShow() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Change slide every 2 seconds
  }

  stopSlideShow() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.stopSlideShow();
    this.startSlideShow(); // Restart auto-play after manual selection
  }
}
