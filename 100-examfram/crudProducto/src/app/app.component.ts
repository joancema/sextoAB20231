import { Component } from '@angular/core';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(
    private productosService: ProductosService
  ) { }
  title = 'crudProducto';
  ngOnInit() {
    this.productosService.getAllData()
      .subscribe(data => {
        console.log(data)
      })
  }
  submitData(value: any) {
    let body = {
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


