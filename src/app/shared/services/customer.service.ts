import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ICustomer } from '../models/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private baseUrl = 'http://localhost:3000/customers';

  constructor(
    private http: HttpClient
  ) {}

  getAllCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.baseUrl);
  }

  getAllCustomerPromise(): Promise<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.baseUrl).toPromise();
  }
}
