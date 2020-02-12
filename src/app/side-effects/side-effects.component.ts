import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NestedService } from '../nested/nested.service';
import { Observable } from 'rxjs';
import { IProduct } from '../nested/product';
import { shareReplay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-side-effects',
  templateUrl: './side-effects.component.html',
  styleUrls: ['./side-effects.component.scss'],
})
export class SideEffectsComponent implements OnInit {
  productSelect = new FormControl('');
  products$: Observable<IProduct[]>;

  constructor(private nestedService: NestedService) {}

  ngOnInit() {
    // this.products$ = this.nestedService
    //   .getProducts('a', 'b').pipe(shareReplay());
    // this.products$.subscribe(products => {
    //   console.log(products[0]);
    //   this.productSelect.setValue(products[0]);
    // });

    this.products$ = this.nestedService
      .getProducts('a', 'b')
      .pipe(
        tap(products => {
          this.productSelect.setValue(products[0]);
        })
      );
  }

  compareProductObjects(object1: any, object2: any) {
    return object1 && object2 && object1.id === object2.id;
  }
}
