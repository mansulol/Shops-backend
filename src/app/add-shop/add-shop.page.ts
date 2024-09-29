import { Component, OnInit } from '@angular/core';
import { ShopService } from '../services/shop.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-shop',
  templateUrl: './add-shop.page.html',
  styleUrls: ['./add-shop.page.scss'],
})
export class AddShopPage implements OnInit {

  shopForm: FormGroup

  constructor(private shopService: ShopService, public formBuilder: FormBuilder) {
      this.shopForm = formBuilder.group([{

      brand: ['', Validators.compose([Validators.required])],
      model: ['', Validators.compose([Validators.required])]
    }])
  }


  ngOnInit() {
  }

  createShop(){
    if( !this.shopForm.valid ){
      console.log("No es valido")
      return
    }else{

      const brand = this.shopForm.value.brand
      const model = this.shopForm.value.model

      this.shopService.create(brand, model).subscribe( (res) =>{
        console.log("Se creo la tienda")
      })
    }
  }

  getFormControl(field: string){
    return this.shopForm.get(field)
  }

}
