import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending-details7',
  templateUrl: './trending-details7.component.html',
  styleUrls: ['./trending-details7.component.css']
})
export class TrendingDetails7Component implements OnInit {

  galleryImgs  = [ 
    new galleryImg("assets/galeria/Titanic (2).jpg", "titanic1"),
    new galleryImg("assets/galeria/Titanic (1).jpg", "titanic2"),
    new galleryImg("assets/galeria/30 Jul 22 (4).jpg", "corroios1"),
    new galleryImg("assets/galeria/30 Jul 22 (5).jpg", "corroios2"),
    new galleryImg("assets/galeria/30 Jul 22 (6).jpg", "corroios3"),
    new galleryImg("assets/galeria/feijo22 (1).jpg", "feijo1"),
    new galleryImg("assets/galeria/feijo22 (2).png", "feijo2"),
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

export class galleryImg {
  src: string = ''
  description: string = 'unavailable'
  constructor(src: string, description: string ) {
    this.src = src;
    this.description = description;
  }

}
