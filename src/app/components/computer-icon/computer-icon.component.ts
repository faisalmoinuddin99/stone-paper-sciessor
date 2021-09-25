import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-computer-icon',
  templateUrl: './computer-icon.component.html',
  styleUrls: ['./computer-icon.component.css']
})
export class ComputerIconComponent implements OnInit {

  @Input() iconName: string = 'empty' // fill by parent

  constructor() { }

  ngOnInit(): void {
  }
  empty = "assets/img/empty.png"
  stone = "assets/img/stone.png"
  paper = "assets/img/paper.png"
  scissor = "assets/img/scissors.png"

}
