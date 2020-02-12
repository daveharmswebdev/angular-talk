import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { CustomerService } from '../shared/services/customer.service';
import { ICustomer } from '../shared/models/customer';
import { Observable, fromEvent, Subscription } from 'rxjs';
import { map, startWith, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-evts-obs',
  templateUrl: './evts-obs.component.html',
  styleUrls: ['./evts-obs.component.scss']
})
export class EvtsObsComponent implements OnInit, AfterViewInit {
  searchTerm = '';
  customers: ICustomer[];
  customers$: Observable<ICustomer[]>;

  reactiveFormsCustomers$: Observable<ICustomer[]>;

  query = new FormControl('');

  @ViewChild('customer', {static: false}) elCustomer: ElementRef;

  constructor(
    private customerService: CustomerService,
  ) { }

  ngOnInit() {
    this.populateList();

    this.reactiveFormsCustomers$ = this.query.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      tap(term => console.log('before it becomes an array of customers', term)),
      switchMap(term => this.customerService.getAllCustomers().pipe(
        map(customers => customers.filter(c => c.lastName.includes(term)))
      ))
    );
  }

  ngAfterViewInit() {
    this.customers$ = fromEvent<any>(this.elCustomer.nativeElement, 'keyup')
      .pipe(
        map(event => event.target.value),
        startWith(''),
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(term => this.customerService.getAllCustomers().pipe(
          map(customers => customers.filter(c => c.lastName.includes(term)))
        )
      ));
  }

  handleKeyDown(evt: KeyboardEvent) {
    if (['Enter', 'Backspace'].indexOf(evt.key) > -1) {
      this.populateList();
    }
  }

  populateList() {
    this.customerService.getAllCustomers().subscribe(
      customers => this.customers = customers.filter(c => c.lastName.includes(this.searchTerm))
    );
  }
}
