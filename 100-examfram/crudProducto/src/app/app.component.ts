import { Component } from '@angular/core';
import { ProductosService } from './services/productos.service';
import { IProduct, IProducts } from './interfaces/IProducto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {


  dataProducts:IProducts = { sum:0, products:[] };
  title:string = 'Productos';

  constructor(
    private productosService: ProductosService
  ) { 
    
  }
  ngOnInit() {
     this.productosService.getAllData()
      .subscribe(data => {
        this.dataProducts= data;
      })
  }
  submitData(value: IProduct) {
    let body:IProduct = {
      name: value.name,
      cost: value.cost,
      price: value.price,
      minimum: value.minimum,
    }

    this.productosService.postData(body)
      .subscribe(response => {
        console.log(response)
      })
  }

}


