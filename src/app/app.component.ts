import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stone-paper-scissor';
  constructor(private toastr: ToastrService) { }
  item: string = 'empty'
  computerItem: string = 'empty'
  roundCounter = 0
  humanScore = 0
  computerScore = 0
  tieScore = 0
  winMessage: string = ''
  stone: number = 3
  paper: number = 6
  sciessor: number = 9
  machineGeneratedNumber: number;


  computerLogic() {

    if (this.computerItem === 'empty') {

      this.machineGeneratedNumber = this.getRandomNumber(10)
      console.log("machineGeneratedNumber " + this.machineGeneratedNumber);



      if (this.machineGeneratedNumber >= 0 && this.machineGeneratedNumber <= 3) {
        this.computerItem = 'stone'

      }
      if (this.machineGeneratedNumber > 3 && this.machineGeneratedNumber <= 6) {
        this.computerItem = 'paper'
      }
      if (this.machineGeneratedNumber > 6 && this.machineGeneratedNumber <= 9) {
        this.computerItem = 'scissor'
      }


    } else {
      this.machineGeneratedNumber = this.getRandomNumber(10)
      console.log("machineGeneratedNumber " + this.machineGeneratedNumber);



      if (this.machineGeneratedNumber >= 0 && this.machineGeneratedNumber <= 3) {
        this.computerItem = 'stone'
      }
      if (this.machineGeneratedNumber > 3 && this.machineGeneratedNumber <= 6) {
        this.computerItem = 'paper'
      }
      if (this.machineGeneratedNumber > 6 && this.machineGeneratedNumber <= 9) {
        this.computerItem = 'scissor'
      }
    }
  }
  getRandomNumber(max: number) {
    return Math.floor(Math.random() * max);
  }

  pickStone() {



    if (this.item === 'empty') {
      this.item = 'stone'
    } else {
      this.item = 'stone'
    }
    this.computerLogic()
    this.checkWinner()

    this.roundCounter++
  }
  pickPaper() {
    if (this.item === 'empty') {
      this.item = 'paper'
    } else {
      this.item = 'paper'
    }
    this.computerLogic()
    this.checkWinner()

    this.roundCounter++

  }
  pickSciessor() {
    if (this.item === 'empty') {
      this.item = 'scissor'
    } else {
      this.item = 'scissor'
    }
    this.computerLogic()
    this.checkWinner()

    this.roundCounter++

  }
  checkWinner = () => {
    if (this.computerItem === 'stone' && this.item === 'stone') {
      this.tieScore++
      this.toastr.warning('Oops Tie')
    }
    if (this.computerItem === 'paper' && this.item === 'paper') {
      this.tieScore++
      this.toastr.warning('Oops Tie')
    }
    if (this.computerItem === 'scissor' && this.item === 'scissor') {
      this.tieScore++
      this.toastr.warning('Oops Tie')
    }

    if (this.item === 'stone') {
      // condition to check paper
      if (this.machineGeneratedNumber >= 4 && this.machineGeneratedNumber <= 6) {
        this.computerScore++;
        this.toastr.error('Computer won')
      }
      // condition to check sciessor
      if (this.machineGeneratedNumber >= 7 && this.machineGeneratedNumber <= 9) {
        this.humanScore++
        this.toastr.info('Human won')
      }
    }
    if (this.item === 'paper') {
      // condition to check stone
      if (this.machineGeneratedNumber >= 0 && this.machineGeneratedNumber <= 3) {
        this.humanScore++
        this.toastr.info('Human won')
      }
      // condition to check sciessor
      if (this.machineGeneratedNumber >= 7 && this.machineGeneratedNumber <= 9) {
        this.computerScore++
        this.toastr.error('Computer won')
      }
    }
    if (this.item === 'scissor') {
      // condition to check stone
      if (this.machineGeneratedNumber >= 0 && this.machineGeneratedNumber <= 3) {
        this.computerScore++
        this.toastr.error('Computer won')
      }
      // condition to check paper
      if (this.machineGeneratedNumber >= 4 && this.machineGeneratedNumber <= 6) {
        this.toastr.info('Human won')
        this.humanScore++;
      }
    }

  }

}



