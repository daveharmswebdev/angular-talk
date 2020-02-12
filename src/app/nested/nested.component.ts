import { Component, OnInit } from '@angular/core';
import { NestedService } from './nested.service';
import { Observable, Subscription, combineLatest } from 'rxjs';
import { IProduct } from './product';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-nested',
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.scss']
})
export class NestedComponent implements OnInit {
  products: IProduct[];
  products$: Observable<IProduct[]>;

  constructor(
    private nestedService: NestedService
  ) { }

  ngOnInit() {
    this.nestedService.customerId$.subscribe(
      id => {
        this.nestedService.regionCode$.subscribe(
          code => {
            this.nestedService.getProducts(id, code).subscribe(
              products => this.products = products
            );
          }
        );
      }
    );

    this.products$ = combineLatest([
      this.nestedService.customerId$,
      this.nestedService.regionCode$
    ]).pipe(
      switchMap(([id, code]: [string, string]) => {
        return this.nestedService.getProducts(id, code);
      })
    );
  }

}
