import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-getal',
  templateUrl: './getal.component.html',
  styleUrls: ['./getal.component.css']
})
export class GetalComponent implements OnInit {

  randomNumber: number = Math.ceil(Math.random()*100);
  aantalBeurten: number = 10;


  constructor() { }

  ngOnInit(): void {

  }


  feedback: string = null;

  welkGetal = (value) => {
    this.aantalBeurten = this.aantalBeurten - 1;
    if (value == this.randomNumber) {
      this.feedback = "Proficiat!";
    } else if (value < this.randomNumber) {
      this.feedback = "Je gok was te laag.";
    } else {
      this.feedback = "Gok een lager getal.";
    }
  }

  reset = () => {
    this.randomNumber = Math.ceil(Math.random()*100);
    this.aantalBeurten = 10;
    this.feedback = null;
  }


}
