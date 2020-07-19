import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponseResult } from '../Dtos/Common/IResponseResult';
import { filterProductInfo } from '../Dtos/Products/filterProductInfo';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public loading = true;
  constructor(private http:HttpClient) { }


getFilterdProduct():Observable<IResponseResult<filterProductInfo>>{
  
  return this.http.get<IResponseResult<filterProductInfo>>('Products/FilterProduct');
  
}




}
