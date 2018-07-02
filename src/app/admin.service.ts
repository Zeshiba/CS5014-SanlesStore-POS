import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ViewProdItem } from './POS/view-prod/view-prod-datasource';
import { product_type } from './POS/add-product-type/product_type';
import { Product } from './POS/add-product/product';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  http:HttpClient;
  constructor(http:HttpClient) { 
    this.http = http;
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  
  body={
    username:'admin',
    password:'test1234'
  }
  
  prodTypeBody:product_type;

  productBody:Product;

  updatedProductBody:Product;

  updatedProductTypeBody:product_type;

  getProductsUrl = 'http://localhost:9000/product/';

  loginUrl = 'http://localhost:9000/login/';

  getTransactionsUrl = 'http://localhost:9000/transaction/';

  deleteProductURL = 'http://localhost:9000/deleteProduct/:id/';

  deleteProductTypeURL = 'http://localhost:9000/deleteProductType/:id/';

  addProdTypeURL = 'http://localhost:9000/addProductType/';

  getProductTypeUrl = 'http://localhost:9000/productType/';
  
  addProductUrl = 'http://localhost:9000/addProduct/';

  getCertainProductUrl = 'http://localhost:9000/product/:id/';

  updateProductURL = 'http://localhost:9000/editProduct/:id/';

  updateProductTypeURL = 'http://localhost:9000/editProductType/:id/';

  updateProductTypeFunc():Observable<any>{
    return this.http.post(this.updateProductTypeURL,this.updatedProductTypeBody,this.httpOptions);
  }

  deleteProductTypeFunc():Observable<any>{
    return this.http.get(this.deleteProductTypeURL,this.httpOptions);
  }
  updateProductFunc():Observable<any>{
    return this.http.post(this.updateProductURL,this.updatedProductBody,this.httpOptions);
  }
  addProductFunc():Observable<any>{
    return this.http.post(this.addProductUrl,this.productBody,this.httpOptions);
  }

  addProductTypeFunc():Observable<any>{
    return this.http.post(this.addProdTypeURL,this.prodTypeBody,this.httpOptions);
  }
  getTransactionsFunc():Observable<any>{
    return this.http.get(this.getTransactionsUrl,this.httpOptions);
  }

  loginFunc():Observable<any>{
    return this.http.post(this.loginUrl,this.body,this.httpOptions);
  }

  getProductsFunc():Observable<any>{
    return this.http.get<ViewProdItem[]>(this.getProductsUrl,this.httpOptions);
  }

  deleteProdFunc():Observable<any>{
    return this.http.get(this.deleteProductURL,this.httpOptions);
  }

  getProductTypeFunc():Observable<any>{
    return this.http.get(this.getProductTypeUrl,this.httpOptions);
  }

  getCertainProductFunc():Observable<any>{
    return this.http.get(this.getCertainProductUrl,this.httpOptions);
  }

}
