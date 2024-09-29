import { Component, OnInit } from '@angular/core';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.page.html',
  styleUrls: ['./shop-list.page.scss'],
})
export class ShopListPage implements OnInit {

  shops: any = []

  constructor(private shopService: ShopService) { }

  ngOnInit() {
    this.getAllShop()
  }

  getAllShop(){
    this.shopService.getAll().subscribe( data => {
      this.shops = data
    } )
  }

  goToDelete( id: number, index: number ){
    this.shopService.delete(id)
    this.shops.splice(index, 1)
  }

}
