import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  shops: any = []

  constructor( private router: Router, private shopService: ShopService ) {}

  goToShopList(){
    this.router.navigateByUrl("/shop-list")
  }

}
