import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.sass']
})

export class AddProductComponent {
    constructor(private productService: ProductsService, private router: Router) { }

    newProduct: Product = {
        id: '',
        name: '',
        type: '',
        color: '',
        price: 0
    }

    addProduct() {
        this.productService.addProduct(this.newProduct)
            .subscribe({
                next: product => {
                    this.router.navigate(['products'])
                },
                error: response => {
                    console.log(response)
                }
            })
     }
}
