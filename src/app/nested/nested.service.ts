import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs';
import { IProduct } from './product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NestedService {
  private baseUrl = 'http://localhost:3000/products';

  regionCode$ = of('6148edcb-fffc-4d1f-b12b-c3b352dd4c3b');
  customerId$ = of('d174a1ef-6b5f-49b5-8473-ccade3f67609');

  constructor(
    private http: HttpClient
  ) {}

  getProducts(customerId: string, regionCode: string): Observable<IProduct[]> {

    if (customerId && regionCode) {
      return this.http.get<IProduct[]>(this.baseUrl);
    } else {
      return of([]);
    }
  }

}
