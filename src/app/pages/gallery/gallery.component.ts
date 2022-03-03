import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {


  galleryImgs  = [ 
    new galleryImg("assets/galeria/avante (1).png", "avante1"),
    new galleryImg("assets/galeria/avante (2).png", "avante2"),
    new galleryImg("assets/galeria/avante (3).png", "avante3"),
    new galleryImg("assets/galeria/avante (4).png", "avante4"),
    new galleryImg("assets/galeria/avante (5).png", "avante5"),
    new galleryImg("assets/galeria/avante (6).png", "avante6"),
    new galleryImg("assets/galeria/avante (8).png", "avante7"),
    new galleryImg("assets/galeria/avante (9).png", "avante8"),
    new galleryImg("assets/galeria/avante (10).png", "avante9"),
    new galleryImg("assets/galeria/fct (1).png", "fct1"),
    new galleryImg("assets/galeria/fct (2).png", "fct2"),
    new galleryImg("assets/galeria/fct (3).png", "fct3"),
    new galleryImg("assets/galeria/banda (1).jpg", "banda1"),
    new galleryImg("assets/galeria/banda (2).jpg", "banda2"),
    new galleryImg("assets/galeria/banda (3).jpg", "banda3"),
    new galleryImg("assets/galeria/banda (4).jpg", "banda4"),
    new galleryImg("assets/galeria/banda (5).jpg", "banda5"),
    new galleryImg("assets/galeria/banda (6).png", "banda6"),
    new galleryImg("assets/galeria/banda (7).jpg", "banda7"),
    new galleryImg("assets/galeria/banda (8).jpg", "banda8"),
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
