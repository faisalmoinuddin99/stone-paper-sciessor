import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {

  @Input() iconName: string = 'empty' // fill by parent

  empty = "assets/img/empty.png"
  stone = "assets/img/stone.png"
  paper = "assets/img/paper.png"
  scissor = "assets/img/scissors.png"
  constructor() { }

  ngOnInit(): void {
  }

}
