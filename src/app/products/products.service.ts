import { Injectable} from "@angular/core";
import { Product } from "../product";
import { PRODUCTS } from "./products.json";

// @Injectable([
//     providedIn:'root'
// ])
export class ProductService{
    getProducts():Product[]{
        return PRODUCTS;
    }
}