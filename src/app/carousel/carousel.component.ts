import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  images: any[] = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getCarouselImages();
  }

  getCarouselImages() {
    this.http.get('http://localhost:3000/images').subscribe((response: any) => {
      this.images = response;
    })
  }
}
