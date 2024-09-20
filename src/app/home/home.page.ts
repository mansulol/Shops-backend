import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  shops: Array<any> = [
    {
      marca: "Ford",
      modelo: " F150 Raptor"
    },
    {
      marca: "Toyota",
      modelo: " Cammry"
    },
    {
      marca: "Mercedes",
      modelo: " CLK GTR"
    }
  ]

  constructor() {}

}
