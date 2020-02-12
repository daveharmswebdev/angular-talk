import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';
import { map, tap, switchMap, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-bacon',
  templateUrl: './bacon.component.html',
  styleUrls: ['./bacon.component.scss']
})
export class BaconComponent implements OnInit {
  private url = 'https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1';
  bacon: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    interval(5000).pipe(
      startWith(0),
      switchMap(() => this.http.get(this.url)),
      tap(console.log)
    ).subscribe(bacon => this.bacon = bacon);
  }

}
