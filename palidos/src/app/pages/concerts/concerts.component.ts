import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css']
})
export class ConcertsComponent implements OnInit {

  img1 = 'assets/poster-corroios-730x1024.png';
  setList1 = ['Dar Vida', 'Cogumelo', 'Bolacha', 'Arret', 'Fronteira', 'Onda Cinzenta', 'Memória (Estreia ao vivo)', 'Beatriz', 'Dias', 'Assado', 'Mar e Joana', 'Fronteira (Encore)'];


  constructor() { }

  ngOnInit(): void {
  }

}
