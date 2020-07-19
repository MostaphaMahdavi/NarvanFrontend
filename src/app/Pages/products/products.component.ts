import { Component, OnInit } from '@angular/core';
import { filterProductInfo } from 'src/app/Dtos/Products/filterProductInfo';
import { productInfo } from 'src/app/Dtos/Products/productInfo';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public loading = true;
  filterProduct:filterProductInfo=null;
  product:productInfo[]=null;

  constructor(
    private productService:ProductService
  ) { }

  ngOnInit(): void {

    this.productService.getFilterdProduct().subscribe(res=>{
      this.loading=false;
      console.log(res);
      if(res.status==="success")
      {
        this.loading=false;
        this.filterProduct=res.data;
        this.product=res.data.Products;

        console.log("FProduct"+this.filterProduct.Products);
        console.log("Product"+this.product);
      }
      
    });
  }

}
