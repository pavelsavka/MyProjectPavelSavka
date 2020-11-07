import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

name:string;
model:string;
speed:number;
colors:Colors;
options:string[];
isEdit:boolean = false;


  constructor() { }

  ngOnInit(): void {

    }

    addOpt(option){
      this.options.unshift(option);
      return false;
    }

    deleteOpt(option){
      for(let i = 0; i<this.options.length; i++){
        if(this.options[i] == option){
          this.options.splice(i, 1);
          break;
        }
      }


    }

    showEdit(){
      this.isEdit = !this.isEdit;
    }

    carSelect(carName){
      if(carName=='bmw'){
        this.name ='BMW';
        this.model ='X5';
        this.colors = {
          car: 'Red',
          calon: 'Red',
          wheels: 'Blue'
      };
      this.options =["abs", "autopilot", "autoparking", "airconditional"];
      this.speed = 235;

      }else if(carName =='audi'){
    this.name ='Audi';
    this.model ='A5';
    this.colors = {
      car: 'Black',
      calon: 'Green',
      wheels: 'Red'
  };
  this.options =["abs", "autopilot"];
  this.speed = 156;
}else {
  this.name ='Mercedes';
  this.model ='320XL';
  this.colors = {
    car: 'Green',
    calon: 'Green',
    wheels: 'Green'
};
this.options =["abs", "autopilot", "Hamburger placer"];
this.speed = 167;
    }
  }
}




interface Colors{
            car:string,
            calon:string,
            wheels:string
}
