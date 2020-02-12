import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/services/customer.service';
import { Observable } from 'rxjs';
import { ICustomer } from '../shared/models/customer';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.scss']
})
export class PromisesComponent implements OnInit {
  promisedCustomers: ICustomer[];
  customers$: Observable<ICustomer[]>;

  // antiPattern
  customers: ICustomer[];

  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.customerService.getAllCustomerPromise()
      .then(customers => {
        console.log('from promise', customers);
        this.promisedCustomers = customers;
      });

    this.customers$ = this.customerService.getAllCustomers().pipe(
      tap(customers => console.log('from observable', customers))
    );

    // antipattern
    this.customerService.getAllCustomers().subscribe(
      customers => this.customers = customers
    );
  }

}
