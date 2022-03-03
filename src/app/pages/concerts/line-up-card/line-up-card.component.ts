import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-line-up-card',
  templateUrl: './line-up-card.component.html',
  styleUrls: ['./line-up-card.component.css']
})
export class LineUpCardComponent implements OnInit {

  @Input() img = '';
  // text, if subtitle
  @Input() setList: string[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
