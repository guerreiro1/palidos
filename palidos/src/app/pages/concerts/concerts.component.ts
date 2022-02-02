import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css']
})
export class ConcertsComponent implements OnInit {

  img2021_2 = 'assets/marco-a-partir.png';
  setList2 = ['Dar Vida', 'Doninha', 'Bolacha', 'Fronteira', 'Assado', 'Mar e Joana'];

  img1 = 'assets/poster-corroios-730x1024.png';
  setList1 = ['Dar Vida', 'Cogumelo', 'Bolacha', 'Arret', 'Fronteira', 'Onda Cinzenta', 'Memória (Estreia ao vivo)', 'Beatriz', 'Dias', 'Assado', 'Mar e Joana', 'Fronteira (Encore)'];

  setList3 = ['Cogumelo', 'Bolacha', 'Beatriz', 'Arret', 'Dias', 'Dar Vida', 'Onda Cinzenta', 'Mar e Joana', 'Assado', 'Fronteira'];

  imgpontoencontro ='assets/29-mar-19.jpg'
  setList2019_1 = ['Cogumelo', 'Bolacha', 'Arret', 'Dias', 'Dar Vida', 'Onda Cinzenta', 'Mar e Joana', 'Assado', 'Fronteira'];
 
  imgmusicamoderna = 'assets/2-mar-19.jpg';
  setList2019_2 = ['Cogumelo', 'Bolacha', 'Assado', 'Dar Vida', 'Fronteira'];

  imgAlmada = 'assets/mostramusicaalmada2018.jpg'
  setList4 = ['Cogumelo', 'Bolacha', 'Dias', 'Mar e Joana', 'Assado', 'Fronteira'];
  constructor() { }

  ngOnInit(): void {
  }

}
