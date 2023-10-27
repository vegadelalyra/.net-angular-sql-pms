import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.sass']
})

export class ProductsComponent implements OnInit {
    products: Product[] = []

    constructor(private productsService: ProductsService, private router: Router) {}

    ngOnInit(): void {
        this.productsService.getAllProducts()   
            .subscribe({
                next: products => {
                    this.products = products
                },
                error: response => {
                    console.log(response)
                }
            })
    }

    deleteProduct(id: string) {
        this.productsService.deleteProduct(id)
            .subscribe({
                next: response => {
                    let currentUrl = this.router.url
                    this.router.navigateByUrl('/', {skipLocationChange: true})
                    .then(() => this.router.navigate([currentUrl]))
                },
                error: response => {
                    console.log(response)
                }
            })
    }
}
