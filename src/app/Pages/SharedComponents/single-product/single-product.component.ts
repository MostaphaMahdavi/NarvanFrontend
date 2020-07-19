import { Component, Input, OnInit } from '@angular/core';
import { productInfo } from 'src/app/Dtos/Products/productInfo';

@Component({
  selector: 'app-page-sharedComponent-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  @Input() product:productInfo;
  constructor() { }

  ngOnInit(): void {
  }

}
