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

  imgFCT = 'assets/fct2018.jpg'
  setList5 = ['Dar Vida', 'Cogumelo', 'Bolacha', 'Dias', 'Arret', 'Mar e Joana', 'Fronteira'];

  imgavante = 'assets/avante2018.jpg'
  setList6 = ['Dar Vida', 'Cogumelo', 'Bolacha', 'Dias', 'Arret', 'Mar e Joana', 'Assado', 'Fronteira'];

  imgsabotage = 'assets/sabotage.png'
  setList7 = ['Dar Vida', 'Cogumelo', 'Arret', 'Beatriz', 'Dias', 'Assado', 'Bolacha', 'Onda Cinzenta', 'Fronteira'];
  
  setList8 = ['Cogumelo', ' Bolacha', 'Assado', 'Fronteira'];

  setList9 = ['Cogumelo', 'Bolacha', 'Dias', 'Assado', 'Fronteira'];

  setList10 = ['Cogumelo', 'Bolacha', 'Dias', 'Arret', 'Assado', 'Fronteira'];

  imgSeekart2018 = 'assets/seekart2018.png'
  setList11 = ['Dar Vida', 'Cogumelo', 'Bolacha', 'Dias', 'Arret', 'Assado', 'Beatriz', 'Onda Cinzenta', 'Fronteira'];

  imgaciprestes = 'assets/aciprestes2017.png'
  setList12 = ['Dar Vida', 'Elevador', 'Bolacha', 'Cogumelo', 'Beatriz', 'Dias', 'Arret', 'Assado', 'Onda Cinzenta', 'Fronteira'];

  imgSeekart2017 = 'assets/seekart2017.png'
  setList13 = ['Cogumelo', 'Dias', 'Bolacha', 'Dar Vida', 'Elevador', 'Fronteira', 'Beatriz', 'Onda Cinzenta'];

  imgegas = 'assets/egas2017.jpg'
  setList14 = ['Cogumelo', 'Dias', 'Bolacha', 'Dar Vida', 'Elevador', 'Arret', 'Fronteira', 'Assado', 'Beatriz', 'Onda Cinzenta'];

  constructor() { }

  ngOnInit(): void {
  }

}
